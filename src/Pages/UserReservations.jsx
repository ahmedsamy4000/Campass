import React from 'react';
import Intro from '../components/UserReservations/intro';
import { Grid } from '@mui/material';
import Reservations from '../components/UserReservations/Reservations';


const UserReservations = () => {
    return (
        <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
            <Intro></Intro>
            <Reservations></Reservations>
        </Grid>
    );
}

export default UserReservations;
