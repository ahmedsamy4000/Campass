import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFeedBackAction, feedBacksAction } from '../../../redux/slices/FeedbacksSlice';
import SimpleBackdrop from '../../../components/spinner';
import "../page/contactpage.css";
import { Form } from 'react-bootstrap/esm';
import {v4 as uuid} from "uuid";



const Contactpage = () => {
    const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
    const [message,setMessage]=useState("");
    const handleChange = (e) => {
        setMessage(e.target.value);
        
    }
    const senFeedback=()=>{
        dispatch(addFeedBackAction({
            
                "id":uuid(),
                "message":message,
                "Email":localStorage.getItem("email"),
                "date":new Date(Date.now()).toLocaleString()
            
        }));
        console.log("success");
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(feedBacksAction());
    }, [dispatch]);

    if (feedbacks.length === 0) {
        return <SimpleBackdrop></SimpleBackdrop>
    }
    return (
        <div id="background">
            <div className='row w-100 p-0 m-0 h-100'>
                <div className='col-8 d-flex flex-column'>
                    <div className='d-flex align-items-center w-100'>
                        <label className='mb-4' id="campasslabel">Campass</label>
                    </div>
                    <label id="touch">Get In Touch</label>
                    <label id="description">Your Words will Help us To Improve our Service and provide more features for you </label>

                </div>

                <div className='d-flex flex-column col-4 text-white m-auto justify-content-start h-100'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={localStorage.getItem("email")} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Openions</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1"  rows={7} value={message} onChange={handleChange}/>
                    </div>
                    <div className='d-flex align-items-start p-5'>
                    <div className='w-75 btn btn-light m-auto' type="button" onClick={senFeedback}>Send</div>
                    </div>
                   
                </div>

            </div>





        </div>
    );
}

export default Contactpage;
