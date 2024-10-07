import React from 'react';
import { LayoutDefault } from '../Layout/LayoutDefault';
import { useAuth } from '../auth/AuthProvider';

export const Settings = () => {
    const {logout} = useAuth()

    const handleSubmit = (e) =>{
        e.preventDefault()
        logout()
    }
    return (
        <LayoutDefault>
            <div>
                    <p>¿Quieres cerrar sesion?</p>
                    <button type='submit' onClick={logout}>Cerrar sesion</button>
            </div>
        </LayoutDefault>
    );
};
