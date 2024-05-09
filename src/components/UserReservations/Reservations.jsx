import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserReservation} from '../../redux/slices/reservationsSlice';
import { Grid } from '@mui/material';
import ReservationItem from './ReservationItem';
import EmptyReservation from './EmptyReservation';

const Reservations = () => {
    const reservations = useSelector((state) => state.reservations.userReservations);
    const dispatch = useDispatch();
    useEffect(() => {
        if(localStorage.getItem('email')){
            dispatch(GetUserReservation(localStorage.getItem('email')))
        }
    }, [dispatch])
    if(!reservations) return <EmptyReservation></EmptyReservation>
    return (
        <Grid container>
            {reservations.map((r)=><ReservationItem {...r}></ReservationItem>)}
        </Grid>
    );
}

export default Reservations;
