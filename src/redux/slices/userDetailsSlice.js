import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userAction = createAsyncThunk("users/getUserDetails", async(id)=>{
    const user = await axios.get(`https://campass-json-server.onrender.com/users/${id}`);
    return user.data;
})
const userSlice = createSlice({
    name: "user",
    initialState: {user: {}},
    extraReducers: (builder) => {
        builder.addCase(userAction.fulfilled, (state, action)=>{
            state.user = action.payload;
        });
    }
})

export default userSlice.reducer;