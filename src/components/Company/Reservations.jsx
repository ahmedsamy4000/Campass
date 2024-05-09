import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reservationsAction } from '../../redux/slices/reservationsSlice';
import { useParams } from 'react-router-dom';
import Reservation from './Reservation';
import homeClass from '../../Styles/Home.module.css';
import { Stack } from 'react-bootstrap';
import classes from '../../Styles/companyCard.module.css'



const Reservations = () => {
    const reservations = useSelector(state => state.reservations.reservations);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [proRes, setProRes] = useState([]);
    useEffect(() => {
        dispatch(reservationsAction());
        if (reservations)
            setProRes(reservations.filter(r => r.programId === id));
    }, [dispatch]);
    console.log(proRes);
    if (proRes) {
        return (
            <div>
                {/* <div className={classes.background}>
                </div> */}
                <div style={{ marginTop: "200px" }}>
                    {/* <Stack direction='row'> */}
                        {proRes.map((program) => <Reservation key={program.programId} {...program}></Reservation>)}
                    {/* </Stack> */}
                </div>
            </div>
        );
    }
}

export default Reservations;
