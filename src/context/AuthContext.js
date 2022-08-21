import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../FireBase/Firebase";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    return context;
}
export function AuthProvider ({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);
    
    const logout = () => signOut(auth);

    const resetPassword = email => 
        sendPasswordResetEmail(auth, email, {
            url: 'http://localhost:3000/login'
        })

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])
    
    return(
        <authContext.Provider 
        value={{ 
            signup, 
            login, 
            user, 
            logout, 
            loading,
            resetPassword
        }}>
            {children}
        </authContext.Provider>
    )
}