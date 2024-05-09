import React from 'react';
import Intro from '../components/Home/intro';
import { Grid } from '@mui/material';
import RecentlyPrograms from '../components/Home/RecentlyPrograms';
import Experience from '../components/Home/Experience';
import { CountriesHome } from '../components/Home/Countries';
import PriceList from '../components/Home/PriceList';

const Home = () => {
    // const token=useSelector((state)=>state.payments.token);
    // const dispatch=useDispatch();

    // useEffect(()=>{
    //     dispatch(paymentMethoAction({
    //         programName:"ahmed",
    //         amount:"500",
    //         description:"amr yehia",
    //         totalPrice:"6000",
    //         billing_data:{
    //             apartment: "803", 
    //             email: "ahmedSamy@gmail.com", 
    //             floor: "42", 
    //             first_name: "Clifford", 
    //             street: "Ethan Land", 
    //             building: "8028", 
    //             phone_number: "+86(8)9135210487", 
    //             shipping_method: "PKG", 
    //             postal_code: "01898", 
    //             city: "Jaskolskiburgh", 
    //             country: "CR", 
    //             last_name: "Nicolas", 
    //             state: "Utah"
    //           }, 
    //     }))
    // },[]);

    return (
        <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
            <Intro></Intro>
            <RecentlyPrograms></RecentlyPrograms>
            <Experience></Experience>
            <CountriesHome></CountriesHome>
            <PriceList></PriceList>
        </Grid>
    );
}

export default Home;
