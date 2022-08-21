import {React} from 'react';
import './FormAlert.css'

export function FormAlert({message}){
    return <div className='container-alert'>
        <span>{message}</span>
    </div>
}