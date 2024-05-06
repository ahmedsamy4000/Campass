import { configureStore } from "@reduxjs/toolkit";
import programsReducer from '../slices/programsSlice'
import feedbacksReducer from '../slices/FeedbacksSlice';
import habitationsSlice from "../slices/habitationsSlice";
import usersReducer from "../slices/usersSlice";
import reservationsSlice from "../slices/reservationsSlice";
import countriesSlice from './../slices/ContriesSlice';

const store = configureStore({
    reducer: {
        programs: programsReducer,
        feedbacks:feedbacksReducer,
        habitations:habitationsSlice,
        users: usersReducer,
        reservations:reservationsSlice,
        countries:countriesSlice

    }
})

export default store;