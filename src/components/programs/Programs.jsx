import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { programsAction } from '../../redux/slices/programsSlice';
import SimpleBackdrop from '../spinner';
import Image from 'react-bootstrap/Image';

const Programs = () => {
    const programs = useSelector((state) => state.programs.programs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(programsAction())
    }, [dispatch])
    
    console.log(programs);

    if(programs.length === 0) return <SimpleBackdrop></SimpleBackdrop>
    return (
        <div>
            
            {/* {programs.map((p) => <div key={p.id}>{p.programName}</div>)}  */}
        </div>
    );
}

export default Programs;
