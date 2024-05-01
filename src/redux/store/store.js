import { configureStore } from "@reduxjs/toolkit";
import programsReducer from '../slices/programsSlice'

const store = configureStore({
    reducer: {
        programs: programsReducer
    }
})

export default store;