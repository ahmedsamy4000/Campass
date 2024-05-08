import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const CountryByIdAction = createAsyncThunk("countries/getById", async (countryId) => {
    const res = await axios.get(`http://localhost:8000/Countries/${countryId}`);
    const data = res.data;
    return data;    
});

export const countriesAction = createAsyncThunk("countries/getAll", async () => {
    const res = await axios.get("http://localhost:8000/Countries");
    const data = res.data;
    return data;    
});

const countriesSlice = createSlice({
    name: "countries",
    initialState: { countries: [], loading: false, selectedCountry: null },
    extraReducers: (builder) => {
        builder.addCase(countriesAction.fulfilled, (state, action) => {
            state.countries = action.payload;
            state.loading = false;
        });
        builder.addCase(countriesAction.pending, (state, action) => {
            state.loading = true;
            state.countries = [];
        });
        builder.addCase(countriesAction.rejected, (state, action) => {
            state.loading = false;
            state.countries = [];
        });
        builder.addCase(CountryByIdAction.fulfilled, (state, action) => {
            state.selectedCountry = action.payload;
        });
    } 
});

export default countriesSlice.reducer;
