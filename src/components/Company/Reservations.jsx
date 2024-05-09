import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reservationsAction } from '../../redux/slices/reservationsSlice';
import { useParams } from 'react-router-dom';

const Reservations = () => {
    const reservations = useSelector(state => state.reservations.reservations);
    const dispatch = useDispatch();
    const {id} = useParams();
    // const [proRes, setProRes] = useState([]);
    useEffect(()=>{
        dispatch(reservationsAction());
        // if(reservations)
        //     setProRes(reservations.filter(r => r.id === id));
    }, [dispatch]);
    console.log(reservations);
    console.log(id);
    // console.log(proRes);
    return (
        <div>
        </div>
    );
}

export default Reservations;
