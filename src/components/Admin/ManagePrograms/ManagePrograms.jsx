import { dispatch } from 'd3';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { programsAction } from '../../../redux/slices/programsSlice';
import { Container, Row } from 'react-bootstrap';
import ManageProgram from './ManageProgram';
import classes from '../../../Styles/ManageProgram.module.css';
import { Grid } from '@mui/material';


const ManagePrograms = () => {
    const programs = useSelector(state => state.programs.programs.filter((p) => p.isPending === true))
    const dipatch = useDispatch()
    useEffect(() => {
        dipatch(programsAction())
    }, [dispatch])
    // console.log(programs)
    return (
        <>
            <Grid item md={12}>
                <p className={classes.title}>Pending Programs</p>
                <img className={classes.coverImg} src='pendingprogram.avif' alt='Backgroung'></img>
            </Grid>
            <div style={{ width: "100%", padding: "70px", }}>
                <div>
                    <Container>
                        <Row>
                            {programs.map((m) => <ManageProgram key={m.id} {...m}></ManageProgram>)}
                        </Row>
                    </Container>

                </div>
            </div>
        </>
    );
}

export default ManagePrograms;
