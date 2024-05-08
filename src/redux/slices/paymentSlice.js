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
})


// export const authRequestAction=createAsyncThunk("payments/getAll",async ()=>{
//     console.log(process.env.REACT_APP_API_KEY);
//     const res=await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_AUTH_REQUEST}`,
//     {
//         api_key:`${process.env.REACT_APP_API_KEY}`
//     }
//     );
//     const data=res.data;
//     return data.token;    
// })

// export const orderRequestAction=createAsyncThunk("Orderpayments/getAll",async (obj)=>{
//     console.log(obj);
//     const res=await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ORDER}`,
//     {
//         auth_token:obj.token,
//         delivery_needed: "false",
//         amount_cents: `${obj.totalPrice*100}`,
//         currency: "EGP",
//         items: [
//             {
//                 name:obj.programName,
//                 amount_cents:obj.amount+'',
//                 description: obj.description,
//                 quantity: "1"
//             }
//           ]
//       }
//     );
//     console.log(res);
//     const data=res.data;
//     return data.id;    
// });

// export const paymentKeyRequestAction=createAsyncThunk("paymentsKey/getAll",async (obj)=>{
//     console.log(obj);
//     const res=await axios.post(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PAYMENT_KEY}`,
//    obj
//     );
//     console.log(res);
//     const data=res.data;
//     return data.id;    
// });



const paymentSlice=createSlice({
    name:"payments",
    initialState:{payments:[],token:"",loading:false},
    extraReducers:(builder)=>{
        ///////////////////////////////AUTHTOKEN///////////////////////
        builder.addCase(paymentMethoAction.fulfilled,(state,action)=>{
            state.token=action.payload;
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



