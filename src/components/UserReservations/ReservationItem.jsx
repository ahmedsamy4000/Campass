import React, { useEffect } from 'react';
import Classes from '../../Styles/UserReservations.module.css';
import { Box, Grid, Typography } from '@mui/material';
import { programActionByID } from '../../redux/slices/programsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteReservation } from '../../redux/slices/reservationsSlice';
const ReservationItem = (props) => {
    const { programId, event, date, totalPrice } = props;
    console.log(event.name)
    const program = useSelector((state) => state.programs.program);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(programActionByID(programId))
    }, [dispatch, programId])

    const handleClick = () => {
        const confirmed = window.confirm("Do you want to cancel?");
        if (confirmed) {
            dispatch(DeleteReservation(programId))
            window.location.reload();
        } 
    }
    console.log(program)
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
}

export default ReservationItem;
