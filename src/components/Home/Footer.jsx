import React from 'react';
import classes from '../../Styles/Footer.module.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className={classes.scallopup}></div>
            <div className={classes.colourblock}>
                <h1 className={classes.h1}>Campass</h1>
                <Link className={classes.p} style={{width:"80px"}} to="/programs">Programs</Link>
                <Link className={classes.p} style={{width:"100px"}} to="/contact">Contact Us</Link>
                <Link className={classes.p} style={{width:"60px"}} to="/about">About</Link>
            </div>
        </>
    );
}

export default Footer;

