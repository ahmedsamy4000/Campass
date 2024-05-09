import React, { useEffect, useState } from 'react';
import classes from '../../Styles/companyCard.module.css'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { reservationsAction } from '../../redux/slices/reservationsSlice';
import { Deleteprogram } from '../../redux/slices/programsSlice';

const CompanyProgram = ({ programName, description, image, id, handleOpen }) => {
    const reservations = useSelector(state => state.reservations.reservations);
    const dispatch = useDispatch();
    const [found, setFound] = useState(false);

    useEffect(() => {
        dispatch(reservationsAction());
    }, [dispatch]);


    const handleClick = (event) => {
        event.preventDefault();
        for (var res of reservations) {
            if (res.programId === id)
                setFound(true);
        }
        if (found)
            handleOpen(id, found);
        else
        {
            dispatch(Deleteprogram(id));
            window.location.reload();
        }
    }
    return (
        <div>
            <div className={classes.card} style={{ backgroundImage: `url(${image})` }}>
                <div className={classes.cardContent}>
                    <h2 className={classes.cardTitle}>{programName}</h2>
                    <Stack direction={"column"} justifyContent={"space-between"} height={"70%"}>
                        <p className={classes.cardBody}>
                            {description}
                        </p>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Link to={`/reservations/${id}`} className={classes.button}>
                                Reservations
                            </Link>
                            <Link to={`/company/programs/${id}`} className={classes.button}>
                                Update
                            </Link>
                            <button className={classes.button} onClick={handleClick}>
                                Delete
                            </button>
                        </Stack>
                    </Stack>
                </div>
            </div>
        </div>
    );
}

export default CompanyProgram;
