import React from 'react';
import homeClass from '../../Styles/Home.module.css';
import { Grid, Typography } from '@mui/material';
import AnimationIcon from './AnimationIcon';
import { useNavigate } from 'react-router-dom';


const Experience = () => {
    const router=useNavigate()
    const handleClick=()=>{
        router("/programs");
    }
    return (
        <>
            <Grid md={6}>
                <img src='//res2.weblium.site/res/65a4dd651ae638000e4a167b/65c4a070350ece000fea4a87_optimized_1396?nowebp' className={homeClass.expImg}></img>
            </Grid>
            <Grid md={6}>
                <div className={homeClass.exp}>
                    <Typography variant="h4" component="h2" className={homeClass.welcome}>
                        Experience Nature in Style - Reserve Your Spot!
                    </Typography>
                    <Typography variant="p" component="h2" style={{ fontSize: "16pt", margin: "20px", color: "gray" }}>
                        Whether you're seeking a romantic getaway, a family adventure, or a solo escape, Hidden Heaven promises an unforgettable stay for every visitor. From cozy tents to charming cabins, our accommodations are thoughtfully designed to provide a tranquil haven amidst the breathtaking wilderness.
                    </Typography>
                    <button onClick={handleClick} className={homeClass.button}>
                        <span className={homeClass.span}>Book</span>
                    </button>
                </div>
            </Grid>
            <Grid item md={12} display="flex" justifyContent={"center"}>
                <AnimationIcon></AnimationIcon>
            </Grid>
        </>
    );
}

export default Experience;
