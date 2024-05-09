import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const feedBacksAction=createAsyncThunk("feedbacks/getAll",async ()=>{
    const res=await axios.get("https://campass-json-server.onrender.com/feedbacks");
    const data=res.data;
    return data;    
})

export const addFeedBackAction=createAsyncThunk("feedbacks/add",async (feedback)=>{
    const res=await axios.post("https://campass-json-server.onrender.com/feedbacks",feedback); 
    const data=res.data;
    return data;
});

const feedBackSlice=createSlice({
    name:"feedbacks",
    initialState:{feedbacks:[],loading:false},
    extraReducers:(builder)=>{
        ///////////////////////////////GET///////////////////////
        builder.addCase(feedBacksAction.fulfilled,(state,action)=>{
            state.feedbacks=action.payload;
            
        })
        builder.addCase(feedBacksAction.pending,(state,action)=>{
            state.loading=true;
            state.feedbacks=[];
        })
        builder.addCase(feedBacksAction.rejected,(state,action)=>{
            state.loading=false;
            state.feedbacks=[];
        })

        ///////////////////////////////POST///////////////////////

        builder.addCase(addFeedBackAction.fulfilled,(state,action)=>{
            state.loading=false;
        
        })
        builder.addCase(addFeedBackAction.pending,(state,action)=>{
            state.loading=true;
      
        })
        builder.addCase(addFeedBackAction.rejected,(state,action)=>{
            state.loading=false;
          
        })
    } 
});


export default feedBackSlice.reducer



