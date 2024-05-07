import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reservationsAction } from '../../redux/slices/reservationsSlice';

const Reservations = () => {
    const reservations = useSelector(state => state.reservations.reservations);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(reservationsAction());
    }, [dispatch]);
    console.log(reservations);
    return (
        <div>
            
        </div>
    );
}

export default Reservations;
