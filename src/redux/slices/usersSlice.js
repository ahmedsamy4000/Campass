import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config.json"

export const usersAction = createAsyncThunk("get/getAllUsers", async()=>{
    const users = await axios.get(config.usersApi);
    return users.data;
})

const usersSlice = createSlice({
    name: "users",
    initialState: {users: []},
    extraReducers: (builder)=>{
        builder.addCase(usersAction.fulfilled, (state, action)=>{
            state.users = action.payload;
        });
    }
});

export default usersSlice.reducer;