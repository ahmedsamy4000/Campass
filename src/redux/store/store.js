import { configureStore } from "@reduxjs/toolkit";
import programsReducer from '../slices/programsSlice'
import feedbacksReducer from '../slices/FeedbacksSlice';
import habitationsSlice from "../slices/habitationsSlice";
import usersReducer from "../slices/usersSlice";

const store = configureStore({
    reducer: {
        programs: programsReducer,
        feedbacks:feedbacksReducer,
        habitations:habitationsSlice,
        users: usersReducer
    }
})

export default store;