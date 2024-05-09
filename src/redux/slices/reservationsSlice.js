import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const reservationsAction=createAsyncThunk("reservations/getAll",async ()=>{
    const res=await axios.get("https://campass-json-server.onrender.com/reservations");
    const data=res.data;
    return data;    
})

export const addreservationAction=createAsyncThunk("reservations/add",async (reservation)=>{
    console.log("here");
    const res=await axios.post("https://campass-json-server.onrender.com/reservations",reservation); 
    console.log("res", res);
    const data=res.data;
    return data;
});
export const GetUserReservation = createAsyncThunk("get/userReservation", async(email)=>{
    const reservations = await axios.get("https://campass-json-server.onrender.com/reservations");
    const reservation = await reservations.data.filter(r => r.email === email);
    return reservation;
})
export const DeleteReservation = createAsyncThunk("delete/reservation", async(ID)=>{
    await axios.delete("https://campass-json-server.onrender.com/reservations/"+ID);
})
const reservationsSlice=createSlice({
    name:"reservations",
    initialState:{reservations:[],loading:false,userReservations:[]},
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
        builder.addCase(GetUserReservation.fulfilled, (state, action)=>{
            state.userReservations = action.payload;
        });
    } 
});


export default reservationsSlice.reducer



