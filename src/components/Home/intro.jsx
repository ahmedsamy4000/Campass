import React from 'react';
import homeClass from '../../Styles/Home.module.css';
import { Grid, Typography } from '@mui/material';
import AnimationIcon from './AnimationIcon';
import AnimationImage from './AnimationImage';

const Intro = () => {
    return (
        <>
            <Grid item md={12}>
                <p className={homeClass.title}>CAMPASS</p>
                <img className={homeClass.coverImg} src='cover.png' alt='Backgroung'></img>
            </Grid>
            <Grid item md={12} display="flex" justifyContent={"center"}>
                <AnimationIcon></AnimationIcon>
            </Grid>
           
            <Grid item md={12} display="flex" justifyContent={"center"}>
            <Typography variant="h2" component="h2" className={homeClass.welcome}>
                    Welcome to Campass
            </Typography>

            </Grid>
            <Grid item md={12} display="flex" justifyContent={"center"}>
            <Typography variant="h6" component="h2" className={homeClass.txt}>
            Embark on your next adventure and discover the joy of camping with our expertly curated experiences! 
            Explore the great outdoors, create lasting memories, and experience the beauty of nature firsthand. 
            From tranquil hikes to starlit nights, immerse yourself in the wonders of the wilderness.
            </Typography>

            </Grid>
            <Grid item md={12} display="flex" justifyContent={"center"}>
                <AnimationImage></AnimationImage>
            </Grid>
            </>
        
    );
}

export default Intro;
