import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { feedBacksAction } from '../../redux/slices/FeedbacksSlice';
import classes from '../../Styles/Feedbacks.module.css';

const Feedbacks = () => {
    const feedbacks = useSelector(state => state.feedbacks.feedbacks)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(feedBacksAction())
    }, [dispatch])
    console.log(feedbacks)
    return (
        <div className={classes.div1}>
            {feedbacks.map((feedback, index) => (
                <div key={index} className={classes.div2}>
                    <p>{feedback.message}</p>
                </div>
            ))}
        </div>
    );
}

export default Feedbacks;


