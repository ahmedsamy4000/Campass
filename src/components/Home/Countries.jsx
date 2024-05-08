import React, { useEffect, useState } from "react";

import classes from '../../Styles/counteriesHome.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { countriesAction } from "../../redux/slices/ContriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import AnimationIcon from "./AnimationIcon";

export const CountriesHome = () => {

    const countries = useSelector((state) => state.countries.countries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(countriesAction())
    }, [dispatch])


  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === countries.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? countries.length - 1 : slide - 1);
  };
  
  return (
    <Grid container>
      <Grid md={12}>
        <Typography variant="h3" component="h2" className={classes.txt} style={{margin:"40px"}}>
                    Countries
        </Typography>
        </Grid>
      <Grid md={6}>
      {countries.map((item, idx) => {
          return ( 
            <div
              key={idx}   
              className={slide === idx ? classes.name : classes.name+' '+classes.nameHidden}>
              {item.Name}
            </div>
          );
        })}
      </Grid>
      <Grid md={6}>
      <div className={classes.carousel}>
        
        <ArrowBackIcon onClick={prevSlide} className={classes.arrow+' '+classes.arrowleft} ></ArrowBackIcon>
        {countries.map((item, idx) => {
          return (
            <img
              src={item.Image}
              alt={item.Name}
              key={idx}   
              className={slide === idx ? classes.slide : classes.slide+' '+classes.slidehidden}
            />
          );
        })}
        <ArrowForwardIcon
          onClick={nextSlide}
          className={classes.arrow+' '+classes.arrowright}
        ></ArrowForwardIcon>
        <span className={classes.indicators}>
          {countries.map((_, idx) => {
            return (
              <div
                key={idx}
                className={
                  slide === idx ? classes.indicator : classes.indicator+' '+classes.indicatorinactive
                }
                onClick={() => setSlide(idx)}
              ></div>
            );
          })}
        </span>
      </div>
      </Grid>
     
    </Grid>
    
  );
};
