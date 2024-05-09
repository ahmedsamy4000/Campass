import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserReservation} from '../../redux/slices/reservationsSlice';
import { Grid } from '@mui/material';
import ReservationItem from './ReservationItem';
import EmptyReservation from './EmptyReservation';
import { programsAction } from '../../redux/slices/programsSlice';

const Reservations = () => {
    const reservations = useSelector((state) => state.reservations.userReservations);
    const programs = useSelector((state) => state.programs.programs);
    const dispatch = useDispatch();
    useEffect(() => {
        if(localStorage.getItem('email')){
            dispatch(GetUserReservation(localStorage.getItem('email')))
        }
    }, [dispatch]);
    useEffect(()=>{
        dispatch(programsAction());
    },[])
    // console.log(reservations);
    if(!reservations) return <EmptyReservation></EmptyReservation>
    return (
        <Grid container>
            {reservations.map((r)=><ReservationItem {...r} programs={programs}></ReservationItem>)}
        </Grid>
    );
}

export default Reservations;
