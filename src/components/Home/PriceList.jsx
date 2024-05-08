import React, { useEffect, useState } from 'react';
import homeClass from '../../Styles/Home.module.css';
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { programsAction } from '../../redux/slices/programsSlice';
import ForestIcon from '@mui/icons-material/Forest';

const PriceList = () => {
    const programs = useSelector((state) => state.programs.programs);
    const dispatch = useDispatch();

     useEffect( () => {
        dispatch(programsAction())
    },[])
    if(!programs) return <div>Loading</div>
    return (
        <>
            <Grid md={6}>
                <img src='price.webp' className={homeClass.priceImg}></img>
            </Grid>
            <Grid md={6}>
                <div className={homeClass.priceList}>
                    <ForestIcon sx={{ color: '#EA9449', width: "60px", height: "120px" }}></ForestIcon>
                    <Typography variant="h4" component="h2" className={homeClass.welcome}>
                        Our Price List
                    </Typography>
                    <Typography variant="p" component="h2" style={{ fontSize: "17pt", margin: "20px", color: "gray" }}>
                        Explore the basic prices for our accommodation.
                    </Typography>
                    
                    {programs.slice(0, 6).map((item, idx) => {
                        return (
                            <Grid container>
                        <Grid item md={8}>
                        <Typography variant="p" component="h2" key={idx} style={{ fontSize: "15pt", margin: "15px",marginLeft:"40px"}}>
                                {item.programName.split(":")[0]}
                        </Typography>
                        </Grid>
                        <Grid item md={4}>
                        <Typography variant="p" component="h2" key={idx} style={{ fontSize: "15pt", margin: "15px",color:"#7C782F"}}>
                            {item.budget}EGP
                        </Typography>
                        
                        </Grid>
                         </Grid>
                            
                        );
                    })}


                </div>
            </Grid>
        </>
    );
}

export default PriceList;
