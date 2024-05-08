import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { programsAction } from '../../redux/slices/programsSlice';
import CompanyProgram from './CompanyProgram';
import AddIcon from '@mui/icons-material/Add';
import classes from '../../Styles/companyCard.module.css'
import { useNavigate } from 'react-router-dom';
import { userActionByEmail } from '../../redux/slices/usersSlice';

const CompanyPrograms = () => {
    const data = useSelector(state => state.programs.programs);
    const user = useSelector(state => state.users.user);
    const [programs, setProgams] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(programsAction());
        dispatch(userActionByEmail(localStorage.getItem('email')));
    }, [dispatch]);
    useEffect(() => {
        setProgams(data.filter(p => p.companyID === user.id && p.isPending === false));
    }, [data, user]);
    const handleAddClick = () => navigate('/company/programs/add');
    if (programs) {
        return (
            <div style={{width: "100%", padding: "100px"}}>
                <div className={classes.programs}>
                    <Typography variant='h2' mx={5} mt={10}>Welcome Company</Typography>
                    <Typography variant='h4' mx={6} my={2}>Here are your programs...</Typography>
                    <Stack direction={"row"} flexWrap="wrap" useFlexGap spacing={10} justifyContent={"center"} alignItems={"center"} mb={10}>
                        {programs.map(program => <CompanyProgram key={program.id} {...program}></CompanyProgram>)}
                        <div onClick={handleAddClick}>
                            <Box sx={{ backgroundColor: "#F6F4E8", boxShadow: "#7C782F 0px 3px 8px", height: "600px", width: "400px", borderRadius: "5px" }}
                                display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                <div style={{ width: "80px", height: "80px", border: "5px #7C782F solid", textAlign: "center" }}>
                                    <AddIcon style={{ color: "#7C782F", width: "70px", height: "70px", fontWeight: "700" }}></AddIcon>
                                </div>
                            </Box>
                        </div>
                    </Stack>
                </div>
            </div>
        );
    }
}

export default CompanyPrograms;
