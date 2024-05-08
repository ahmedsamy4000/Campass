import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const paymentMethoAction=createAsyncThunk("paymentMethod",async (obj)=>{
    const authResponse=await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_AUTH_REQUEST}`,
    {
        api_key:`${process.env.REACT_APP_API_KEY}`
    }
    );
    const authToken=authResponse.data.token;
    
    const orderResponse=await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ORDER}`,
    {
        auth_token:authToken,
        delivery_needed: "false",
        amount_cents: `${obj.totalPrice*100}`,
        currency: "EGP",
        items: [
            {
                name:obj.programName,
                amount_cents:obj.amount+'',
                description: obj.description,
                quantity: "1"
            }
          ]
      }
    );
    const orderId=orderResponse.data.id;

    const PaymentKeyResponse=await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PAYMENT_KEY}`,
    {
        auth_token:authToken,
        amount_cents:obj.amount,
        expiration:3600,
        order_id:orderId,
        billing_data:obj.pillingData,
        currency: "EGP", 
        integration_id: process.env.REACT_APP_INTEGRATION_ID

    }
     );

     const key=PaymentKeyResponse.data.token;

     console.log(authToken)
     console.log(orderId)
     console.log(key);
     return key;
})




const paymentSlice=createSlice({
    name:"payments",
    initialState:{payments:[],key:"",loading:false},
    extraReducers:(builder)=>{
        ///////////////////////////////AUTHTOKEN///////////////////////
        builder.addCase(paymentMethoAction.fulfilled,(state,action)=>{
            state.key=action.payload;
        })
        builder.addCase(paymentMethoAction.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(paymentMethoAction.rejected,(state,action)=>{
            state.loading=false;
       
        })

            // ///////////////////////////////ORDER///////////////////////
            // builder.addCase(orderRequestAction.fulfilled,(state,action)=>{
               
            // })
            // builder.addCase(orderRequestAction.pending,(state,action)=>{
            //     state.loading=true;
            // })
            // builder.addCase(orderRequestAction.rejected,(state,action)=>{
            //     state.loading=false;
           
            // })

            //      ///////////////////////////////ORDER///////////////////////
            //      builder.addCase(paymentKeyRequestAction.fulfilled,(state,action)=>{
               
            //      })
            //      builder.addCase(paymentKeyRequestAction.pending,(state,action)=>{
            //          state.loading=true;
            //      })
            //      builder.addCase(paymentKeyRequestAction.rejected,(state,action)=>{
            //          state.loading=false;
                
            //      })


        

       
    } 
});


export default paymentSlice.reducer



