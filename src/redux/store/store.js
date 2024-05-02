import { configureStore } from "@reduxjs/toolkit";
import programsReducer from '../slices/programsSlice'
import feedbacksReducer from '../slices/FeedbacksSlice';
import habitationsSlice from "../slices/habitationsSlice";

const store = configureStore({
    reducer: {
        programs: programsReducer,
        feedbacks:feedbacksReducer,
        habitations:habitationsSlice
    }
})

export default store;