import React from 'react';
import {useLocation, Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie'

const token = Cookies.get('login');

const ProtectedRoute = ()=>{
    const location = useLocation();
    return token ? ( <Outlet/> ) : ( <Navigate to='/login' state={{ from: location }} replace />)
}

export default ProtectedRoute;