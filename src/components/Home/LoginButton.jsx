import React from 'react';
import classes from '../../Styles/Header.module.css';
import LockPersonTwoToneIcon from '@mui/icons-material/LockPersonTwoTone';

const LoginButton = () => {
    return (
        <div data-tooltip="Price:-$20" className={classes.button}>
            <div className={classes.buttonwrapper}>
                <div className={classes.text}>Login</div>
                <span className={classes.icon}>
                    <LockPersonTwoToneIcon fontSize="small" />
                </span>
            </div>
        </div>
    );
}

export default LoginButton;
