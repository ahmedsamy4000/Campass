import React from 'react';
import Classes from '../../Styles/UserReservations.module.css';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EmptyReservation = () => {
    const router =useNavigate()
    const handleClick=()=>{
        router("/programs")
    }
    return (
        <Box>
            <Typography variant="h2" component="h2" className={Classes.txt}>
                There are no reservations
            </Typography>
            <br></br>
            <button className={Classes.button} style={{marginLeft:"30%"}} onClick={handleClick}>
                <span className={Classes.span}>Reserve Now</span>
            </button>
        </Box>
    );
}

export default EmptyReservation;
