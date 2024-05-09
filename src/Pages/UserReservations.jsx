import React, { useEffect } from 'react';
import Intro from '../components/UserReservations/intro';
import { Grid } from '@mui/material';
import Reservations from '../components/UserReservations/Reservations';
import { useDispatch, useSelector } from 'react-redux';
import { userActionByEmail } from '../redux/slices/usersSlice';

const UserReservations = () => {
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();
    const email=localStorage.getItem("email")
    useEffect(() => {
        console.log(email)
        dispatch(userActionByEmail(email))
    }, [dispatch,email])
    if(user) {
    return (
        <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
            <Intro></Intro>
            <Reservations {...user}></Reservations>
        </Grid>
    );}
}

export default UserReservations;
