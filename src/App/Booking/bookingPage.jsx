import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { programsAction } from '../../redux/slices/programsSlice';
import "./booking.css"
import { addreservationAction } from '../../redux/slices/reservationsSlice';
import { v4 as uuid } from "uuid";
import { paymentMethoAction } from '../../redux/slices/paymentSlice';

const BookingPage = () => {
    const { id } = useParams();
    const programs = useSelector((state) => state.programs.programs);
    const dispatch = useDispatch();
    const [passengersnum, setpassengersnum] = useState(0);
    const [totalPrice, settotalprice] = useState(0);
    const program = programs.find((program) => program.id == id);



    ///////////////////////////////////////////////
    useEffect(() => {
        dispatch(programsAction())
    }, [dispatch])


    const addReservation = () => {
        dispatch(addreservationAction({
            id: uuid(),
            programId: program.id,
            userId: "3",
            event: {},
            date: new Date(Date.now()).toLocaleString(),
            totalPrice: program.budget * passengersnum
        }));
        setpassengersnum(0);
    }
    useEffect(() => {
        if (program) {
            updatetotalprice()
        }
    }, [passengersnum]);
    const updatetotalprice = () => {
        settotalprice(program.budget * passengersnum - (program.budget * passengersnum * program.discount / 100));
    }
    console.log(localStorage.getItem("email"));
    //////////////////////////////////PAYMENT///////////////////////////////


   
    const confirmPayment = () => {
       
        if (localStorage.getItem("email")) {
            dispatch(paymentMethoAction({
                programName: program.programName,
                amount: `${totalPrice*100}`,
                description: program.description,
                totalPrice: totalPrice,
                billing_data: {
                    apartment: "803",
                    email: localStorage.getItem("email"),
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
            })).then((key)=>{
                navigateToPaymentPage(key.payload);
            })
        }

    }
    const navigateToPaymentPage = (key) => {
        if (key) {
            window.location.href = `${process.env.REACT_APP_IFRAME_LINK}${key}`;
        }
    };

    if (program) {


        return (
            <div id='bookingbg'>
                <div className='row w-100 m-0 p-5'>
                    <div className='col-5'>
                        <img src={program.image} id="programimg"></img>
                    </div>
                    <div className='col-7 m-0 p-0' id="info">
                        <label className='text-white' id="progname">{program.programName}</label>
                        <div className='row m-0 p-0'>
                            <div className='col-6 d-flex flex-column'>
                                <label className="progInfo">Country : {program.countryName}</label>
                                <label className="progInfo">Cities : {program.cities.map((item) => <label id="city">{item}</label>)}</label>
                                <label className="progInfo">Transportation : {program.transportationType}</label>
                                <label className="progInfo">Duration : {program.duration} days</label>
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label className="progInfo">Budget : {program.budget}</label>
                                <label className="progInfo">Date : {program.date}</label>
                                <label className="progInfo">Discount : {program.discount}</label>
                            </div>
                        </div>

                    </div>


                </div>

                <label className='p-5 text-white' id="filllabel">Please Fill these Information</label>
                <div className='row w-100 m-0' id="personalinfo">
                    <label id="passengers"> Number of Passengers</label>
                    <input type="number" className="form-control w-25" value={passengersnum >= 0 ? passengersnum : 0} onChange={(e) => { setpassengersnum(Math.max(0, e.target.value)); }} id="exampleFormControlInput1" placeholder="Number Of Members" />
                    <label id="budget">Total Budget : {totalPrice} </label>
                    <div className='w-25 btn btn-light mt-3' type="button" onClick={confirmPayment}>Confirm</div>
                </div>






            </div>
        )


    } else {
        return (
            <div>
                Not Found
            </div>
        );
    }

}

export default BookingPage;
