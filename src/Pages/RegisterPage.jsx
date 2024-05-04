import React from 'react';
import Register from '../components/authentication/register';
import classes from '../Styles/login.module.css'

const RegisterPage = () => {
    return (
        <div className={classes.background}>
            <Register></Register>
        </div>
    );
}

export default RegisterPage;
