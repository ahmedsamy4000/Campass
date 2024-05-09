import React from 'react';
import classes from '../Styles/loginPageStyle.module.css'
import Login from '../components/authentication/login'

const LoginPage = () => {
    return (
        <div className={classes.background}>
            <Login></Login>
        </div>
    );
}

export default LoginPage;
