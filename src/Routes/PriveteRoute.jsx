import React, { useContext } from 'react';
import { Context } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PriveteRoute = ({ children }) => {
    const { user, loading } = useContext(Context);
    const location = useLocation()
    if (loading) {
        return <h1 className='text-3xl font-bold mt-10'>Loading...</h1>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location} replace />
};

export default PriveteRoute;