import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'

export const ProtectedRoutes = ({children}) => {
    const {user, loading} = useAuth()

    if(loading) return <LoadingAnimation />

    if(!user) return <Navigate to='/login'/>
    
  return (
    <>{children}</>
  )
}
