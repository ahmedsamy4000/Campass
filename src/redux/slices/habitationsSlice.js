import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const habitationsAction=createAsyncThunk("habitations/getAll",async ()=>{
    try{
        const res=await axios.get("http://localhost:8000/habitations");
        const data=res.data;
        return data;    
    }catch(error){
        return [];
    }
    
})

const habitationsSlice=createSlice({
    name:"habitations",
    initialState:{habitations:[],loading:false},
    extraReducers:(builder)=>{
        builder.addCase(habitationsAction.fulfilled,(state,action)=>{
            state.habitations=action.payload;
        })
        builder.addCase(habitationsAction.pending,(state,action)=>{
            state.loading=true;
            state.habitations=[];
        })
        builder.addCase(habitationsAction.rejected,(state,action)=>{
            state.loading=false;
            state.habitations=[];
        })
    } 
});


export default habitationsSlice.reducer



