import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActionByEmail } from '../../redux/slices/usersSlice';
import classes from '../../Styles/Feedbacks.module.css';
import { Box, Typography } from '@mui/material';


const Reservation = (props) => {
    console.log(props);
    const user = useSelector(state => state.users.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActionByEmail(props.userId));
        console.log(user);
    }, [dispatch])
    if (user) {
        return (
            <div style={{ backgroundColor: 'black' , height: "200px", width: "100px"}}>
                {console.log(user.fName)}
                <Box sx={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", flexDirection: "row", padding: "20px", alignItems: "center" }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '40px' }}>
                            <Box sx={{ flex: '1 0 auto' }}>
                                <Typography variant="subtitle1" component="div">
                                    <span style={{ fontWeight: "bold" }}>User Name: </span>{user.fName} {user.lName}
                                </Typography>
                                <Typography variant="subtitle1" component="div">
                                    <span style={{ fontWeight: "bold" }}>User Email: </span>{user.email}
                                </Typography>
                            </Box>
                        </Box>
                    </div>
                </Box>
            </div>
        );
    }
}

export default Reservation;
