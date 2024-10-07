import React from 'react'
import { PublicLayout } from '../Layout/PublicLayout'
import { SignupForm } from '../components/SignupForm'
import { useAuth } from '../auth/AuthProvider'
import { Navigate } from 'react-router-dom'

export const Signup = () => {
	const auth = useAuth()

	if(auth.isAuthenticated){
		return <Navigate to={'/'}/>
	}

	return (
		<PublicLayout>
			<SignupForm />
		</PublicLayout>
	)
}
