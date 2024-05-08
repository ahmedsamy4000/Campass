import { dispatch } from 'd3';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { programsAction } from '../../../redux/slices/programsSlice';
import { Col, Container, Row } from 'react-bootstrap';
import ManageProgram from './ManageProgram';


const ManagePrograms = () => {
    const programs = useSelector(state => state.programs.programs.filter((p) => p.isPending === true))
    const dipatch = useDispatch()
    useEffect(() => {
        dipatch(programsAction())
    }, [dispatch])
    // console.log(programs)
    return (
        <div style={{ backgroundColor: "#F6F4E8", width: "100%", padding:"70px", }}>
            <div>
                <Container>
                    <Row>
                        {programs.map((m) => <ManageProgram key={m.id} {...m}></ManageProgram>)}
                    </Row>
                </Container>

            </div>
        </div>
    );
}

export default ManagePrograms;
