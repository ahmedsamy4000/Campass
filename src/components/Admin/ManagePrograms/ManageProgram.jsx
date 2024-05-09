import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Deleteprogram, Manageprogram } from '../../../redux/slices/programsSlice';
import classes from '../../../Styles/ManageProgram.module.css';
import Box from '@mui/material/Box';
import { habitationsActionById } from '../../../redux/slices/habitationsSlice';

const ManageProgram = (program) => {
    const navigateTo = useNavigate();
    const dispatch = useDispatch()
    const acceptprogram = () => {
        dispatch(Manageprogram({ programId: program.id, program: { ...program, isPending: false } }))
        navigateTo('/acceptprogram')
    }
    const deleteprogram = () => {
        dispatch(Deleteprogram(program.id))
        navigateTo('/acceptprogram')
    }
    const habitation = useSelector(state => state.habitations.habitation)
    let [habitationNames, sethabitationsNames] = useState('');
    useEffect(() => {

        for (var p of program.habitations) {
            dispatch(habitationsActionById(p))
            habitationNames = habitation.name;
            sethabitationsNames(habitationNames)
        }
    }, [dispatch])

    let [cityNames, setcityNames] = useState('');
    useEffect(() => {
        for (var p of program.cities) {
            cityNames = p.Name;
            setcityNames(cityNames)
        }
    }, [dispatch])

    return (
        <div className={classes.con}>
            <Box sx={{ display: 'flex', width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "row", padding: "20px", alignItems: "center" }}>
                    <img
                        style={{ width: "300px", height:"400px" }}
                        src={program.image}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '40px' }}>
                        <Box sx={{ flex: '1 0 auto' }}>
                            <Typography variant="subtitle1" component="div">
                                <span style={{ fontWeight: "bold" }}>Program Name: </span>{program.programName}
                            </Typography>
                            <Typography variant="subtitle1" component="div">
                                <span style={{ fontWeight: "bold" }}>Description: </span>{program.description}
                            </Typography>
                            <Typography variant="subtitle1" component="div">
                                <span style={{ fontWeight: "bold" }}>Country Name: </span>{program.countryName}
                            </Typography>
                            <Typography variant="subtitle1" component="div">
                                <span style={{ fontWeight: "bold" }}>Program Date: </span>{program.date}
                            </Typography>
                            <Typography variant="subtitle1" component="div">
                                <span style={{ fontWeight: "bold" }}>Transportation Type: </span>{program.transportationType}
                            </Typography>
                            <Typography variant="subtitle1" component="div">
                                <span style={{ fontWeight: "bold" }}>Duration: </span>{program.duration}
                            </Typography>
                            <Typography variant="subtitle1" component="div">
                                <span style={{ fontWeight: "bold" }}>Budget: </span>{program.budget}
                            </Typography>
                            {program.discount > 0 && <Typography variant="subtitle1" component="div">
                                <span style={{ fontWeight: "bold" }}>Discount: </span>{program.discount}
                            </Typography>
                            }
                            <Typography variant="subtitle1" component="div">
                                <span style={{ fontWeight: "bold" }}>Habitations Names: </span>{habitationNames}
                            </Typography>
                            <Typography variant="subtitle1" component="div">
                                <span style={{ fontWeight: "bold" }}>Cities Names: </span>{cityNames}
                            </Typography>
                        </Box>
                    </Box>
                </div>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <button className={classes.button} onClick={acceptprogram}><span className={classes.span}>Accept</span></button>
                    <button className={classes.button} onClick={deleteprogram}><span className={classes.span}>Reject</span></button>
                </Box>
            </Box>
        </div>
    );
}

export default ManageProgram;
