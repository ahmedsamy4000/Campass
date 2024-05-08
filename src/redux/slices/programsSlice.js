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
export const programsHabitationAction = createAsyncThunk("programs/getByHabitationId", async (habitationId) => {
    try {
        const res = await axios.get(config.programsApi);
        const filteredPrograms = res.data.filter(program => program.habitations.includes(parseInt(habitationId)));
        return filteredPrograms;
    } catch (error) {
        console.error("Error fetching programs by habitation ID:", error);
        return [];
    }
});



const programSlice = createSlice({
    name: "programs",
    initialState: {programs: [], loading: false},
    extraReducers:(builder) => {
        builder.addCase(programsAction.fulfilled, (state, action) => {
            state.programs = action.payload
        })

        builder.addCase(programsAction.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(programsAction.rejected, (state, action) => {
            state.loading = false;
        })
        builder.addCase(programsHabitationAction.fulfilled, (state, action) => {
            state.programs = action.payload
        })
    }
})

export default programSlice.reducer;