import React from 'react';
import Intro from '../components/Home/intro';
import { Grid } from '@mui/material';
import RecentlyPrograms from '../components/Home/RecentlyPrograms';

const Home = () => {
    return (
        <Grid container spacing={2}>
            <Intro></Intro>
            <RecentlyPrograms></RecentlyPrograms>
        </Grid>
    );
}

export default Home;
