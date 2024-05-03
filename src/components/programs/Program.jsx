import React from 'react';
import classes from '../../styles/programCard.module.css'
import { Card, Col } from 'react-bootstrap';
import { Typography } from '@mui/material';

const Program = (program) => {
    return (
        <Col sm={6} md={4}>
            <div className={classes.card}>
                <div className={`${classes.imgCard} mt-4`}>
                    <div className={classes.inner} style={{backgroundImage:`url(${program.image})`}}>
                        <div className={classes.front}>
                        <Typography variant="p" gutterBottom sx={{color:"white", fontWeight:"bold"}} className='position-absolute bottom-0 end-0 me-5 mb-5 ms-3'>
                            {program.programName}
                        </Typography>
                        </div>
                    </div>
                    <div className={classes['card-back']} style={{backgroundImage:`url(${program.image})`}}>
                        <div className={classes.frontInner}>
                        <div className='mx-5 auto'>
                            <div className='mb-3'>
                            <Typography variant="p" gutterBottom sx={{color:"white", fontWeight:"bold"}}>
                                {program.description}
                            </Typography>
                            </div>
                            <div className='d-flex justify-content-between'>
                            <Typography variant="p" gutterBottom sx={{color:"white"}}>
                                Date: {program.date}
                            </Typography>
                            <Typography variant="p" gutterBottom sx={{color:"white"}}>
                                Duration: {program.duration} days
                            </Typography>
                            </div>
                            <div>

                            <Typography variant="p" gutterBottom sx={{color:"white"}}>
                                Budget: {program.budget}
                            </Typography>
                            </div>
                            <div className='d-flex justify-content-center mt-5'>
                            <button
                            style={{boxShadow: "inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)"}}
                            className="inline-flex cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
                            >
                            Book
                            </button>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </Col>
    );
}

export default Program;
