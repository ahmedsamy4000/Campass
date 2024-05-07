import React from 'react';
import homeClass from '../../Styles/Home.module.css';
import { Grid, Typography } from '@mui/material';
import AnimationIcon from './AnimationIcon';
import AnimationImage from './AnimationImage';

const Intro = () => {
    return (
        <>
            <Grid item md={12}>
                <p className={homeClass.title} style={{backgroundColor:"black"}}>CAMPASS</p>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero sint consequatur, enim, mollitia inventore temporibus error animi provident, consequuntur accusamus tenetur ratione nihil! Possimus ducimus voluptatibus inventore ipsum sed.
            </Typography>

            </Grid>
            <Grid item md={12} display="flex" justifyContent={"center"}>
                <AnimationImage></AnimationImage>
            </Grid>
            </>
        
    );
}

export default Intro;
