import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { programsAction } from '../../redux/slices/programsSlice';
import homeClass from '../../Styles/Home.module.css';
import ProgramHome from './programHome';
const RecentlyPrograms = () => {
    const programs = useSelector((state) => state.programs.programs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(programsAction())
    }, [dispatch])
    return (
        <>
        <Grid md={12}>
        <Typography variant="h3" component="h2" className={homeClass.welcome} style={{margin:"40px",marginTop:"110px",fontSize:"50pt"}}>
                    Recent Programs
            </Typography>
        </Grid>
        {programs.slice(0, 3).map((item, idx) => <ProgramHome key={idx} {...item}></ProgramHome>)}
        </>
    );
}

export default RecentlyPrograms;
