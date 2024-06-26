import React from 'react';
import classes from '../../Styles/Footer.module.css'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';

const Footer = () => {
    const isAuth = useSelector(state => state.isAuth.isAuth)
    const type = localStorage.getItem('type')
    return (
        <>
            <div className={classes.scallopup}></div>
            <div className={classes.colourblock} style={{ width: "100%" }}>

                <Stack direction='row' spacing={10} justifyContent={'space-between'} width={'100%'}>
                    <div>
                        <h1 className={classes.h1}>Campass</h1>
                        <h6 style={{color:"whitesmoke"}}>Connect with us for the latest updates, tips, and adventures, and explore our blog for inspiration and safety guidelines.</h6>
                    </div>
                    <div>
                        <h4>Quick Links</h4>
                        <p><Link className={classes.p} to='/countries'>Countries</Link></p>
                        <p><Link className={classes.p} to='/habitations'>Habitations</Link></p>
                        <p><Link className={classes.p} to='/programs'>Programs</Link></p>
                        <p><Link className={classes.p} to='/about'>About</Link></p>
                        {!isAuth && <p><Link className={classes.p} to='/signin'>Reservations</Link></p>}
                        {isAuth && type == 'Traveller' && <p><Link className={classes.p} to='/userReservations'>Reservations</Link></p>}
                    </div>
                </Stack>

            </div>
        </>
    );
}

export default Footer;

