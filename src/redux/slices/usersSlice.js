import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../config.json"

export const usersAction = createAsyncThunk("get/getAllUsers", async()=>{
    const users = await axios.get(config.usersApi);
    console.log(users.data);
    return users.data;
})
export const userActionByEmail = createAsyncThunk("get/getUser", async(email)=>{
    const users = await axios.get(config.usersApi);
    const user = await users.data.find(u => u.email === email);
    return user;
})

const usersSlice = createSlice({
    name: "users",
    initialState: {users: [], user: {}},
    extraReducers: (builder)=>{
        builder.addCase(usersAction.fulfilled, (state, action)=>{
            state.users = action.payload;
        });
        builder.addCase(userActionByEmail.fulfilled, (state, action)=>{
            state.user = action.payload;
        });
    }
});

export default usersSlice.reducer;