import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { PublicLayout } from '../Layout/PublicLayout'
import { LoginForm } from '../components/LoginForm';
import { useAuth } from '../auth/AuthProvider';

export const Login = () => {
    const auth = useAuth()

    if(auth.isAuthenticated){
        return <Navigate to={'/'}/>
    }
    return(
        <PublicLayout>
            <LoginForm />
        </PublicLayout>
    )
}