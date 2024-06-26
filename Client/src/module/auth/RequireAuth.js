import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Pages/Shared/Loading/Loading'

const RequireAuth = ({children}) => {
     let location = useLocation();
    let [user, loading, error] = useAuthState(auth)
    if (loading) return <Loading></Loading>
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;