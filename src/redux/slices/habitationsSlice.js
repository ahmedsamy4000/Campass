import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const habitaionsAction=createAsyncThunk("habitaions/getAll",async ()=>{
    const res=await axios.get("http://localhost:8000/habitations");
    const data=res.data;
    return data;    
})

const habitationsSlice=createSlice({
    name:"habitaions",
    initialState:{habitaions:[],loading:false},
    extraReducers:(builder)=>{
        builder.addCase(habitaionsAction.fulfilled,(state,action)=>{
            state.habitaions=action.payload;
        })
        builder.addCase(habitaionsAction.pending,(state,action)=>{
            state.loading=true;
            state.habitaions=[];
        })
        builder.addCase(habitaionsAction.rejected,(state,action)=>{
            state.loading=false;
            state.habitaions=[];
        })
    } 
});


export default habitationsSlice.reducer



