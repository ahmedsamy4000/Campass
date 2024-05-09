import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { feedBacksAction } from '../../redux/slices/FeedbacksSlice';
import classes from '../../Styles/Feedbacks.module.css';
import { Box, Typography } from '@mui/material';
import { userActionByEmail } from '../../redux/slices/usersSlice';

const Feedback = (feedback) => {
    const user = useSelector(state=>state.users.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userActionByEmail(feedback.Email))
    }, [dispatch])
    return (
        <div  className={classes.con}>
            <Box sx={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "row", padding: "20px", alignItems: "center" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '40px' }}>
                        <Box sx={{ flex: '1 0 auto' }}>
                            <Typography variant="subtitle1" component="div">
                                <span style={{ fontWeight: "bold" }}>User Name: </span>{user.fName} {user.lName}
                            </Typography>
                            <Typography variant="subtitle1" component="div">
                                <span style={{ fontWeight: "bold" }}>User Email: </span>{feedback.Email}
                            </Typography>
                            <Typography variant="subtitle1" component="div">
                                <span style={{ fontWeight: "bold" }}>Date: </span>{feedback.date}
                            </Typography>
                            <Typography variant="subtitle1" component="div">
                                <span style={{ fontWeight: "bold" }}>Feedback: </span>{feedback.message}
                            </Typography>

                        </Box>
                    </Box>
                </div>
            </Box>
        </div>
    );
}

export default Feedback;
