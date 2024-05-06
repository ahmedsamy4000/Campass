import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { feedBacksAction } from '../../redux/slices/FeedbacksSlice';

const Feedbacks = () => {
    const feedbacks = useSelector(state=>state.feedbacks.feedbacks)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(feedBacksAction())
    },[dispatch])
    console.log(feedbacks)
    return (
        <div>
            
        </div>
    );
}

export default Feedbacks;
