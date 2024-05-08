import React, { useEffect, useState } from 'react';
import Intro from '../components/Home/intro';
import { Grid } from '@mui/material';
import RecentlyPrograms from '../components/Home/RecentlyPrograms';
import { useDispatch, useSelector } from 'react-redux';
import { authRequestAction, orderRequestAction, paymentKeyRequestAction, paymentMethoAction } from '../redux/slices/paymentSlice';

const Home = () => {
    const token=useSelector((state)=>state.payments.token);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(paymentMethoAction({
            programName:"ahmed",
            amount:"500",
            description:"amr yehia",
            totalPrice:"6000",
            billing_data:{
                apartment: "803", 
                email: "ahmedSamy@gmail.com", 
                floor: "42", 
                first_name: "Clifford", 
                street: "Ethan Land", 
                building: "8028", 
                phone_number: "+86(8)9135210487", 
                shipping_method: "PKG", 
                postal_code: "01898", 
                city: "Jaskolskiburgh", 
                country: "CR", 
                last_name: "Nicolas", 
                state: "Utah"
              }, 
        }))
      
    //    dispatch(orderRequestAction({token:"ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1Rjd09ESTNMQ0p3YUdGemFDSTZJamd3WTJZNU5UUmpOemN3TkRGa1lUbGpNV1U1TWpBMVlqQmhabVl3TVRnMk1UQXdObUZrWlRrellXSTRaV1V6WldSbU56WmhZbVl5TVdNNE5UWXhNMllpTENKbGVIQWlPakUzTVRVeE16SXhNRE45LklwMllvWlN6NXgzMkFjUTJHMkEtU2RZNW1xVURkZW9TTHhBY2pfeTJJcm54QWc4ejRnRVpHdW5RVkh1NEt2MEVmOVVfSkhleWdEVGlsMXp2bmhXV3Bn",programName:"hello",description:"anyyy",amount:"800",totalPrice:"1000"}));
    //     dispatch(paymentKeyRequestAction({
    //         auth_token: "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2T1Rjd09ESTNMQ0p3YUdGemFDSTZJamd3WTJZNU5UUmpOemN3TkRGa1lUbGpNV1U1TWpBMVlqQmhabVl3TVRnMk1UQXdObUZrWlRrellXSTRaV1V6WldSbU56WmhZbVl5TVdNNE5UWXhNMllpTENKbGVIQWlPakUzTVRVeE16SXhNRE45LklwMllvWlN6NXgzMkFjUTJHMkEtU2RZNW1xVURkZW9TTHhBY2pfeTJJcm54QWc4ejRnRVpHdW5RVkh1NEt2MEVmOVVfSkhleWdEVGlsMXp2bmhXV3Bn",
    //         amount_cents: "500000", 
    //         expiration: 3600, 
    //         order_id: "207691932",
    //         billing_data: {
    //           apartment: "803", 
    //           email: "ahmedSamy@gmail.com", 
    //           floor: "42", 
    //           first_name: "Clifford", 
    //           street: "Ethan Land", 
    //           building: "8028", 
    //           phone_number: "+86(8)9135210487", 
    //           shipping_method: "PKG", 
    //           postal_code: "01898", 
    //           city: "Jaskolskiburgh", 
    //           country: "CR", 
    //           last_name: "Nicolas", 
    //           state: "Utah"
    //         }, 
    //         currency: "EGP", 
    //         integration_id: 4555884
    //       }))
    },[]);

    return (
        <Grid container spacing={2}>
            <Intro></Intro>
            <RecentlyPrograms></RecentlyPrograms>
        </Grid>
    );
}

export default Home;
