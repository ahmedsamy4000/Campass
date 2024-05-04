import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { programsAction } from '../../redux/slices/programsSlice';
import Program from '../programs/Program';
import homeClass from '../../styles/Home.module.css';
const RecentlyPrograms = () => {
    const programs = useSelector((state) => state.programs.programs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(programsAction())
    }, [dispatch])
    return (
        <>
        <Grid md={12}>
        <Typography variant="h3" component="h2" className={homeClass.welcome}>
                    A Recent Programs
            </Typography>
        </Grid>
            <Program {...programs[0]}></Program>
            <Program {...programs[1]}></Program>
            <Program {...programs[2]}></Program>
        
        </>
    );
}

export default RecentlyPrograms;
