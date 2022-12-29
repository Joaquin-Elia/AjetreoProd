import { useEffect, useRef } from 'react'

export const useSEO = ({title, description}) => {
    const prevTitleRef = useRef(document.title);
    const prevDescriptionRef = useRef(document.querySelector('meta[name="description"]').getAttribute('content')) ;
    
    useEffect(() => {
        const previousTitle = prevTitleRef.current;
        if(title){
            document.title = `Ajetreo Producciones | ${title}`;
        }
        
        return () => document.title = previousTitle;
    }, [title])

    useEffect(() => {
        const previousDescription = prevDescriptionRef.current;
        const metaDescription = document.querySelector('meta[name="description"]');
        
        if(description){
            metaDescription.setAttribute('content', description)
        }
         
        return () => metaDescription.setAttribute('content', previousDescription);
    }, [description])
  
}
