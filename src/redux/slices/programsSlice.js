import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {programsApi} from "../../config.json"

export const programsAction = createAsyncThunk("programs/getAll", async () => {
    try {
        const res = await axios.get(programsApi);
        return res;
    } catch (error) {
        return [];
    }
})

const programSlice = createSlice({
    name: "programs",
    initialState: {programs: [], loading: false},
    extraReducers:(builder) => {
        builder.addCase(programsAction.fulfilled, (state, action) => {
            state.movies = action.payload;
        })

        builder.addCase(programsAction.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(programsAction.rejected, (state, action) => {
            state.loading = false;
        })
    }
})

export default programSlice.reducer;