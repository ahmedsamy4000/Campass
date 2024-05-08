import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { programsAction, programsHabitationAction } from '../../redux/slices/programsSlice';
import SimpleBackdrop from '../spinner';
import classes from '../../Styles/programStyle.module.css'
import { Typography } from '@mui/material';
import Program from './Program';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Programs = () => {
    const { id, cityName } = useParams();
    const programs = useSelector((state) => state.programs.programs);
    const dispatch = useDispatch();
    useEffect(() => {
        if(id) {
            dispatch(programsHabitationAction(id));
        } else {
            dispatch(programsAction())
        }
    }, [dispatch, id]);

    const filteredPrograms = useMemo(() => {
        if(cityName && programs) {
            return programs.filter((p) => p.cities.includes(cityName))
        }
    })

    if (programs.length === 0) return (<>{console.log(programs)}<SimpleBackdrop></SimpleBackdrop></>)
    else if (filteredPrograms?.length === 0  && cityName) return <div>City has no programs</div>
    else 
        return (
            <div style={{ backgroundColor: "#F6F4E8", height:"100%", width:"100%" }}>
                <div className={classes.ad}>
                    <div className={classes.discover}>
                        <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
                            Unwind in Nature's Embrace
                        </Typography>
                        <Typography variant="p" gutterBottom>
                            Embark on an Adventure of Serenity and Exploration with Our Programs
                        </Typography>
                    </div>
                </div>
                <div>
                    <Container>
                        <Row>
                        <Col>
                            <div className='position-relative'>
                                <div style={{}} className={`mt-5 ms-5 ${classes.programs}`}>
                                    <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                                        Discover our programs
                                    </Typography>
                                </div>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            {filteredPrograms?.length > 0 ? filteredPrograms.map((m) => <Program key={m.id} {...m}></Program>):programs.map((m) => <Program key={m.id} {...m}></Program>)}
                            
                        </Row>

                    </Container>

                </div>
            </div>
        );
}

export default Programs;
