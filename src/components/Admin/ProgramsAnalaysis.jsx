import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { programsAction } from '../../redux/slices/programsSlice';
import SimpleBackdrop from '../spinner';
import * as d3 from "d3";
import Pie from './Charts/Pie';
import ProgramsNoCard from './ProgramsNoCard';
import { Typography } from '@mui/material';
import Barchart from './Charts/Barchart';

const ProgramsAnalaysis = () => {
    const programs = useSelector((state) => state.programs.programs)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(programsAction())
    }, [dispatch])

    const generateData = (value, length = 5, prop) =>
        d3.range(length).map((item, idx) => ({
            date: idx,
            value: value === null || value === undefined ? Math.random() * 100 : value[idx][prop],
            label: value === null || value === undefined ? `Program ${idx}` : value[idx].programName
        }));


    const sortedPrograms = useMemo(() => {
        if (programs.length > 0) {
            return programs.slice().sort((a, b) => {
                return b.totalReservations - a.totalReservations;
            });
        } else {
            return [];
        }
    }, [programs]);

    const pieData = useMemo(() => {
        if (sortedPrograms.length > 0) {
            return generateData(sortedPrograms, 5, "totalReservations")
        } else {
            return [];
        }
    }, [sortedPrograms]);

    const barData = useMemo(() => {
        if (sortedPrograms.length > 0) {
            return generateData(sortedPrograms, 5, "duration")
        } else {
            return [];
        }
    }, [sortedPrograms]);

    if (programs.length === 0) return <SimpleBackdrop></SimpleBackdrop>
    else {
        return (<div>
                <img src="https://res2.weblium.site/res/5dc02e35769ac4002109a58b/5dc03e56b2d7cf0022c5e3a1_optimized_1396.webp" alt='Background' style={{width:"100%",height:"500px"}}></img>
            <div style={{backgroundColor:"#F6F5F2", width:"100%", height:"100vh"}}>

                <div className='d-flex justify-content-evenly gap-3' >
                    <div className='mt-3'>
                        <ProgramsNoCard data={programs} text={'Programs Number'}></ProgramsNoCard>
                    </div>
                    <div className='mt-3'>
                        <ProgramsNoCard data={programs} text={'Total Reservations'}></ProgramsNoCard>
                    </div>
                </div>
                <div className='container mt-5 mb-5'>
                    <div className='row mt-5'>
                        <div className='col-8'>
                            <div className='row'>
                                <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>Top 5 Programs' total reservations</Typography>
                                <div className='row'>
                                    <div >
                                        <Pie
                                            data={pieData}
                                            width={200}
                                            height={200}
                                            innerRadius={60}
                                            outerRadius={100}
                                        />      
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='row'>
                                <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>Distribution of Top 5 Programs' duration</Typography>
                            </div>
                            <div className='row mt-5'>
                                <div>
                                    <Barchart data={barData}/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default ProgramsAnalaysis;
