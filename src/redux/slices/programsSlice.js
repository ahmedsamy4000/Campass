import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config.json"

export const programsAction = createAsyncThunk("programs/getAll", async () => {
    try {
        const res = await axios.get(config.programsApi);
        return res.data;
    } catch (error) {
        return [];
    }
})

function reducer(state, action){
    if(state.programs === action.payload.programs){
      return state.programs
    }
    return action.payload
}

const programSlice = createSlice({
    name: "programs",
    initialState: {programs: [], loading: false},
    extraReducers:(builder) => {
        builder.addCase(programsAction.fulfilled, (state, action) => {
            state.programs = reducer(state, action)
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