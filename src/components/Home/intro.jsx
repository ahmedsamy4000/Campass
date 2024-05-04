import React from 'react';
import homeClass from '../../Styles/Home.module.css';
import { Grid, Typography } from '@mui/material';

const Intro = () => {
    return (
        <>
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
            <Grid md={12} display="flex" justifyContent={"center"}>
            <Typography variant="h6" component="h2" className={homeClass.txt}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero sint consequatur, enim, mollitia inventore temporibus error animi provident, consequuntur accusamus tenetur ratione nihil! Possimus ducimus voluptatibus inventore ipsum sed.
            </Typography>

            </Grid>

            </>
        
    );
}

export default Intro;
