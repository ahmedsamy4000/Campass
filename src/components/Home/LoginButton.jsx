import React from 'react';
import classes from '../../Styles/Header.module.css';
import LockPersonTwoToneIcon from '@mui/icons-material/LockPersonTwoTone';

const LoginButton = (props) => {
    return (
        <div data-tooltip="Price:-$20" className={classes.button}>
            <div className={classes.buttonwrapper}>
                <div className={classes.text}>{props.txt}</div>
                <span className={classes.icon}>
                    <LockPersonTwoToneIcon fontSize="small" />
                </span>
            </div>
        </div>
    );
}

export default LoginButton;
