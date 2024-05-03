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
                        <Typography variant="p" gutterBottom sx={{color:"white", fontWeight:"bold"}} className='position-absolute bottom-0 end-0 me-5 mb-5 ms-2'>
                            {program.programName}
                        </Typography>
                        </div>
                    </div>
                    <div className={classes['card-back']} style={{backgroundImage:`url(${program.image})`}}>
                        <div className={classes.frontInner}>
                        <div className=''>
                            <div>

                            <Typography variant="p" gutterBottom sx={{color:"white", fontWeight:"bold"}}>
                                {program.date}
                            </Typography>
                            </div>
                            <div>

                            <Typography variant="p" gutterBottom sx={{color:"white", fontWeight:"bold"}}>
                                {program.duration}
                            </Typography>
                            </div>
                            <div>

                            <Typography variant="p" gutterBottom sx={{color:"white", fontWeight:"bold"}}>
                                {program.budget}
                            </Typography>
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
