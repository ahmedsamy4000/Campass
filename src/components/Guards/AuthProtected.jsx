import React from 'react';
import { useSelector } from 'react-redux';
import NotFound from '../../Pages/NotFound';

const AuthProtected = ({children}) => {
    const isAuth = useSelector(state => state.isAuth.isAuth);
    if(!isAuth)
        return children;
    else
    return <NotFound></NotFound>
}

export default AuthProtected;
