import React from 'react';
import Classes from '../../Styles/UserReservations.module.css';
import { Grid } from '@mui/material';

const Intro = () => {
    return (
        <Grid item md={12}>
                <p className={Classes.title}>Your Reservations</p>
                <img className={Classes.coverImg} src='https://res2.weblium.site/res/65a4dd651ae638000e4a167b/65c4debf6bbc31000f41ddf0_optimized_1396_c1396x930-0x0.webp' alt='Backgroung'></img>
        </Grid>
    );
}

export default Intro;
