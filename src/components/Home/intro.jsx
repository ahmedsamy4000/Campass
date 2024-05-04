import React from 'react';
import homeClass from '../../styles/Home.module.css';
import { Grid, Typography } from '@mui/material';

const Intro = () => {
    return (
        <Grid container spacing={2}>
            <Grid md={12}>
                <p className={homeClass.title}>CAMPASS</p>
                <img className={homeClass.coverImg} src='cover.png' alt='Backgroung'></img>
            </Grid>
            <Grid md={12} display="flex" justifyContent={"center"}>
                <img className={homeClass.logoImg} src='camping.png' alt='logo'></img>
                
            </Grid>
            <Grid md={12} display="flex" justifyContent={"center"}>
            <Typography variant="h2" component="h2" className={homeClass.welcome}>
                    Welcome to Campass
            </Typography>
                
            </Grid>

        </Grid>
    );
}

export default Intro;
