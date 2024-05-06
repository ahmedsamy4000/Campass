import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const reservationsAction=createAsyncThunk("reservations/getAll",async ()=>{
    const res=await axios.get("http://localhost:8000/reservations");
    const data=res.data;
    return data;    
})

export const addreservationAction=createAsyncThunk("reservations/add",async (reservation)=>{
    const res=await axios.post("http://localhost:8000/reservations",reservation); 
    const data=res.data;
    return data;
});

const reservationsSlice=createSlice({
    name:"reservations",
    initialState:{reservations:[],loading:false},
    extraReducers:(builder)=>{
        ///////////////////////////////GET///////////////////////
        builder.addCase(reservationsAction.fulfilled,(state,action)=>{
            state.reservations=action.payload;
            
        })
        builder.addCase(reservationsAction.pending,(state,action)=>{
            state.loading=true;
            state.reservations=[];
        })
        builder.addCase(reservationsAction.rejected,(state,action)=>{
            state.loading=false;
            state.reservations=[];
        })

        ///////////////////////////////POST///////////////////////

        builder.addCase(addreservationAction.fulfilled,(state,action)=>{
            state.loading=false;
        
        })
        builder.addCase(addreservationAction.pending,(state,action)=>{
            state.loading=true;
      
        })
        builder.addCase(addreservationAction.rejected,(state,action)=>{
            state.loading=false;
          
        })
    } 
});


export default reservationsSlice.reducer



