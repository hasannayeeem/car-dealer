import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../firebase.init'
import useRole from '../../Hooks/useRole'
import Loading from '../../Pages/Shared/Loading/Loading'

const RequireAuth = ({ children }) => {
	let [user, loading, error] = useAuthState(auth)
	let [role, roleLoading] = useRole(user)

	if (loading || roleLoading) {
		return <Loading />;
	}
	if (!user || role !== 'admin') {
		toast.error('This is Protected for only Admin', { id: 'requireAdmin' })
		signOut(auth)
		return <Navigate to="/login" />
	}
	return children
}

export default RequireAuth
