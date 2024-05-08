import React from 'react';
import classes from '../../../Styles/ManageProgram.module.css'
import { Col } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Deleteprogram, Manageprogram } from '../../../redux/slices/programsSlice';

const ManageProgram = (program) => {
    const navigateTo = useNavigate();
    const dispatch = useDispatch()
    const acceptprogram =()=>{
        dispatch(Manageprogram({programId:program.id, program:{...program, isPending:false}}))
        navigateTo('/acceptprogram')
    }
    const deleteprogram =()=>{
        dispatch(Deleteprogram(program.id))
        navigateTo('/acceptprogram')
    }
    return (
        <Col sm={6} md={4}>
            <div className={classes.card}>
                <div className={`${classes.imgCard} mt-4`}>
                    <div className={classes.inner} style={{ backgroundImage: `url(${program.image})` }}>
                        <div className={classes.front}>
                            <Typography variant="p" gutterBottom sx={{ color: "white", fontWeight: "bold" }} className='position-absolute bottom-0 end-0 me-5 mb-5 ms-3'>
                                {program.programName}
                            </Typography>
                        </div>
                    </div>
                    <div className={classes['card-back']} style={{ backgroundImage: `url(${program.image})` }}>
                        <div className={classes.frontInner}>
                            <div className='mx-5 auto'>
                                <div className='mb-3'>
                                    <Typography variant="p" gutterBottom sx={{ color: "white", fontWeight: "bold" }}>
                                        {program.description}
                                    </Typography>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <Typography variant="p" gutterBottom sx={{ color: "white" }}>
                                        Date: {program.date}
                                    </Typography>
                                    <Typography variant="p" gutterBottom sx={{ color: "white" }}>
                                        Duration: {program.duration} days
                                    </Typography>
                                </div>
                                <div>

                                    <Typography variant="p" gutterBottom sx={{ color: "white" }}>
                                        Budget: {program.budget}
                                    </Typography>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={acceptprogram}><span>Accept</span></button>
            <button onClick={deleteprogram}><span>Reject</span></button>
        </Col>
    );
}

export default ManageProgram;
