import { Box, Grid, IconButton, Modal, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import classes from '../../Styles/companyCard.module.css'
import CloseIcon from '@mui/icons-material/Close';

const AddProgram = ({ open, handleClose }) => {
    const [program, setProgram] = useState({programName: "", countryName: "", companyID: "", cities: [], 
    transportationType: "", duration: "", budget: "", discount: "", habitations: "", image: "", description: "", isPending: ""});
    const [errors, setErrors] = useState({programName: "", countryName: "", cities: [], transportationType: "", duration: "", 
    budget: "", discount: "", habitations: "", image: "", description: ""});

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setProgram({...program, [name]: value});
    }

    const handleClick = ()=>{

    }
    return (
        <div>
            <Modal
                open={open}
                onClose={() => handleClose()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Stack direction={"row"} justifyContent={"space-between"} mt={2} mx={3}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Add New Program
                        </Typography>
                        <IconButton onClick={() => handleClose()}>
                            <CloseIcon></CloseIcon>
                        </IconButton>
                    </Stack>
                    <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} p={2} spacing={{ md: 5, xs: 1 }}>
                        <Grid container width={"80%"} justifyContent={"center"} spacing={{ xs: 1, md: 0 }}>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField variant='standard' name='programName' value={program.programName} onChange={handleChange} 
                                label="Program Name" sx={{ width: "100%",
                                "& .MuiInput-root": {
                                    "&:before": { borderColor: "black" },
                                    "&:after": { borderColor: "black" }
                                },
                                "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" }}}}></TextField>
                            </Grid>
                            <Grid item md={1} xs={12} width={"100%"}>
                            </Grid>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField variant='standard' name='countryName' value={program.countryName} onChange={handleChange} 
                                label="Country Name" sx={{ width: "100%",
                                "& .MuiInput-root": {
                                    "&:before": { borderColor: "black" },
                                    "&:after": { borderColor: "black" }
                                },
                                "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" }}}}></TextField>
                            </Grid>
                        </Grid>
                        <Grid container width={"80%"} justifyContent={"center"} spacing={{ xs: 1, md: 0 }}>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField variant='standard' name='description' value={program.description} onChange={handleChange} 
                                label="Description" sx={{ width: "100%",
                                "& .MuiInput-root": {
                                    "&:before": { borderColor: "black" },
                                    "&:after": { borderColor: "black" }
                                },
                                "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" }}}}></TextField>
                            </Grid>
                            <Grid item md={1} xs={12} width={"100%"}>
                            </Grid>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField variant='standard' name='image' value={program.image} onChange={handleChange} 
                                label="Image URL" sx={{ width: "100%",
                                "& .MuiInput-root": {
                                    "&:before": { borderColor: "black" },
                                    "&:after": { borderColor: "black" }
                                },
                                "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" }}}}></TextField>
                            </Grid>
                        </Grid>
                        <Grid container width={"80%"} justifyContent={"center"} spacing={{ xs: 1, md: 0 }}>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField variant='standard' type='number' name='duration' value={program.duration} onChange={handleChange} 
                                label="Duration" sx={{ width: "100%",
                                "& .MuiInput-root": {
                                    "&:before": { borderColor: "black" },
                                    "&:after": { borderColor: "black" }
                                },
                                "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" }}}}></TextField>
                            </Grid>
                            <Grid item md={1} xs={12} width={"100%"}>
                            </Grid>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField variant='standard' type='number' name='budget' value={program.budget} onChange={handleChange} 
                                label="Budget" sx={{ width: "100%",
                                "& .MuiInput-root": {
                                    "&:before": { borderColor: "black" },
                                    "&:after": { borderColor: "black" }
                                },
                                "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" }}}}></TextField>
                            </Grid>
                        </Grid>
                        <button className={classes.button} onClick={handleClick} style={{marginTop: "30px", width: "30%", height: "10%", fontSize: "20px"}}>Add</button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}

export default AddProgram;
