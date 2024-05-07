import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { programsAction } from '../../redux/slices/programsSlice';
import CompanyProgram from './CompanyProgram';
import AddIcon from '@mui/icons-material/Add';
import classes from '../../Styles/companyCard.module.css'
import AddProgram from './AddProgram';

const CompanyPrograms = () => {
    const programs = useSelector(state => state.programs.programs);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        dispatch(programsAction());
    }, [dispatch]);
    const handleAddClick = () => setOpen(true);
    const handleClose = () => setOpen(false);
    if (programs) {
        return (
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
                <AddProgram open={open} handleClose={handleClose}></AddProgram>
            </div>
        );
    }
}

export default CompanyPrograms;
