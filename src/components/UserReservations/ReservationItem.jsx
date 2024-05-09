import React, { useEffect, useMemo } from 'react';
import Classes from '../../Styles/UserReservations.module.css';
import { Box, Grid, Typography } from '@mui/material';
import { programActionByID } from '../../redux/slices/programsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteReservation, GetUserReservation } from '../../redux/slices/reservationsSlice';
import { Spinner } from 'react-bootstrap';
const ReservationItem = (props) => {
    const { programId, event, date, totalPrice } = props;
    const program =props.programs.filter((item)=>item.id===programId)[0];

    const dispatch = useDispatch();
    const handleClick = () => {
        const confirmed = window.confirm("Do you want to cancel?");
        if (confirmed) {
            dispatch(DeleteReservation(props.id))
            dispatch(GetUserReservation(localStorage.getItem("email")));
        } 
    }
    // console.log(program)
    if(program){
        return (
            <Grid className={Classes.con} container>
                <Grid md={3}>
                    <img src={program.image} className={Classes.Img}>
                    </img>
                </Grid>
                <Grid md={9}>
                    <div className={Classes.info}>
                        <Typography variant="p" component="h3" margin={"20px"} style={{ fontWeight: "bold" }}>
                            {program.programName}
                        </Typography>
                        <Typography variant="p" component="h5" margin={"25px"} style={{ fontWeight: "bold" }}>
                            Country: <span style={{ fontWeight: "normal" }}>{program.countryName}</span>
                        </Typography>
                        <Typography variant="p" component="h5" margin={"25px"} style={{ fontWeight: "bold" }}>
                            Transportation: <span style={{ fontWeight: "normal" }}>{program.transportationType}</span>
                        </Typography>
                        <Typography variant="p" component="h5" margin={"25px"} style={{ fontWeight: "bold" }}>
                            Duration: <span style={{ fontWeight: "normal" }}>{program.duration} Days</span>
                        </Typography>
                        {!event.name ? <></> :
                            <Typography variant="p" component="h5" margin={"25px"} style={{ fontWeight: "bold" }}>
                                Event: <span style={{ fontWeight: "normal" }}>{event.name}</span>
                            </Typography>}
                        <Typography variant="p" component="h5" margin={"25px"} style={{ fontWeight: "bold" }}>
                            Date: <span style={{ fontWeight: "normal" }}>{date}</span>
                        </Typography>
                        <Typography variant="p" component="h5" margin={"25px"} style={{ fontWeight: "bold" }}>
                            Total Price: <span style={{ fontWeight: "normal" }}>{totalPrice}</span>
                        </Typography>
                        <Box display={"flex"} justifyContent={"end"} marginRight={"60px"}>
                            <button className={Classes.button} onClick={handleClick}>
                                <span className={Classes.span}>Cancel Reservation</span>
                            </button>
                        </Box>
                    </div>
                </Grid>
            </Grid>
    
        );
    }else{
        return <Spinner></Spinner>
    }
   
}

export default ReservationItem;
