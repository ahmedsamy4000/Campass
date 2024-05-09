import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { feedBacksAction } from '../../redux/slices/FeedbacksSlice';
import classes from '../../Styles/Feedbacks.module.css';
import { Box, Grid, Typography } from '@mui/material';
import { userActionByEmail } from '../../redux/slices/usersSlice';
import Feedback from './Feedback';

const Feedbacks = () => {
    const feedbacks = useSelector(state => state.feedbacks.feedbacks)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(feedBacksAction())
    }, [dispatch])
    console.log(feedbacks)
    return (
        <div>
            <Grid item md={12}>
                <p className={classes.title}>Feedbacks</p>
                <img className={classes.coverImg} src='feedback.avif' alt='Backgroung'></img>
            </Grid>
            {feedbacks.map((feedback, index) => (
                <Feedback key={index} {...feedback}></Feedback>
            ))}
        </div>

    );
}

export default Feedbacks;


