import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { programActionByID } from '../../redux/slices/programsSlice';
import { Box, Grid, MenuItem, Stack, TextField, Typography } from '@mui/material';
import classes from '../../Styles/companyCard.module.css'
import { countriesAction } from '../../redux/slices/ContriesSlice';
import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { habitationsAction } from '../../redux/slices/habitationsSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateProgram = () => {
    const { id } = useParams();
    const program = useSelector(state => state.programs.program);
    const dispatch = useDispatch();

    const countries = useSelector(state => state.countries.countries);
    const habitations = useSelector(state => state.habitations.habitations);
    const [cities, setCities] = useState([]);
    const transportations = [{ Id: 1, Name: 'Train' }, { Id: 2, Name: 'Bus' }, { Id: 3, Name: 'Plane' }];
    const navigate = useNavigate();

    const [newProgram, setnewProgram] = useState({
        programName: "", countryName: "", companyID: "", cities: [],
        transportationType: "", duration: "", budget: "", discount: 0, habitations: [], image: "", description: "", isPending: true, date: "",
        rate: 0, totalReservations: 0
    });
    const [errors, setErrors] = useState({
        programName: "", countryName: "", cities: "", transportationType: "", duration: "",
        budget: "", discount: "", habitations: "", image: "", description: "", date: ""
    });
    const obj = {
        programName: "", countryName: "", cities: "", transportationType: "", duration: "",
        budget: "", discount: "", habitations: "", image: "", description: "", date: ""
    }

    useEffect(() => {
        dispatch(countriesAction());
        dispatch(habitationsAction());
    }, [dispatch]);

    useEffect(() => {
        const country = countries.find(c => c.Name === program.countryName);
        setnewProgram(program);
        console.log(program);
        if (country) {
            console.log(country.Cities);
            setCities(country.Cities);
        }
    }, [dispatch, program, countries])

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "countryName") {
            setnewProgram({...newProgram, cities:[]})
            const country = countries.find(c => c.Name === value);
            if (country) {
                console.log(country.Cities);
                setCities(country.Cities);
            }
        }
        setnewProgram({ ...newProgram, [name]: value });
    }

    const handleClick = (event) => {
        event.preventDefault();
        if (!newProgram.programName)
            obj.programName = "Program Name is required";
        if (!newProgram.description)
            obj.description = "Description is required";
        if (!newProgram.countryName)
            obj.countryName = "Country Name is required";
        if (newProgram.cities.length === 0)
            obj.cities = "Cities is required";
        if (!newProgram.date)
            obj.date = "Date is required";
        if (!newProgram.transportationType)
            obj.transportationType = "Transportation Type is required";
        if (!newProgram.duration)
            obj.duration = "Duration is required";
        if (!newProgram.budget)
            obj.budget = "Budget is required";
        if (!newProgram.image)
            obj.image = "Image is required";
        if (!newProgram.discount && newProgram.discount !== 0)
            obj.discount = "Discount is required";
        if (newProgram.habitations.length === 0)
            obj.habitations = "Habitations is required";
        setErrors(obj);
        if (newProgram.programName && newProgram.description && newProgram.countryName && newProgram.cities.length > 0 
            && newProgram.date && newProgram.transportationType && newProgram.duration && newProgram.budget && newProgram.image
            && newProgram.discount && newProgram.habitations.length > 0
        ) {
            axios.put(`http://localhost:8000/programs/${id}`, newProgram).then(() => {
                navigate('/company/programs');
            })
        }
    }

    useEffect(() => {
        dispatch(programActionByID(id));
    }, [dispatch, id])
    if (program) {
        return (
            <div style={{paddingTop: "100px", width: "100%", margin: "auto"}}>
                <Box mx={20}>
                    <Stack direction={"row"} justifyContent={"space-between"} mt={2} mx={3}>
                        <Typography id="modal-modal-title" variant="h4" component="h2">
                            Update Program
                        </Typography>
                    </Stack>
                    <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} p={2} spacing={{ md: 5, xs: 1 }}>
                        <Grid container width={"80%"} justifyContent={"center"} spacing={{ xs: 1, md: 0 }}>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField variant='standard' name='programName' value={newProgram.programName} onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="Program Name" sx={{
                                        width: "100%",
                                        "& .MuiInput-root": {
                                            "&:before": { borderColor: "black" },
                                            "&:after": { borderColor: "black" }
                                        },
                                        "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" } }
                                    }}></TextField>
                                <Typography sx={{ color: "error.dark" }}>{errors.programName}</Typography>
                            </Grid>
                            <Grid item md={1} xs={12} width={"100%"}>
                            </Grid>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField variant='standard' name='description' value={newProgram.description} onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="Description" sx={{
                                        width: "100%",
                                        "& .MuiInput-root": {
                                            "&:before": { borderColor: "black" },
                                            "&:after": { borderColor: "black" }
                                        },
                                        "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" } }
                                    }}></TextField>
                                <Typography sx={{ color: "error.dark" }}>{errors.description}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container width={"80%"} justifyContent={"center"} spacing={{ xs: 1, md: 0 }}>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField
                                    id="standard-select-country"
                                    select
                                    label="Country Name"
                                    defaultValue=""
                                    variant="standard"
                                    name="countryName"
                                    value={newProgram.countryName??""}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    sx={{
                                        width: "100%",
                                        "& .MuiInput-root": {
                                            "&:before": { borderColor: "black" },
                                            "&:after": { borderColor: "black" }
                                        },
                                        "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" } }
                                    }}>
                                    {countries.map((option) => (
                                        <MenuItem key={option.id} value={option.Name}>
                                            {option.Name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <Typography sx={{ color: "error.dark" }}>{errors.countryName}</Typography>
                            </Grid>
                            <Grid item md={1} xs={12} width={"100%"}>
                            </Grid>
                            <Grid item md={5} xs={12}>
                                {newProgram.countryName ? <div className="card flex justify-content-center">
                                    <MultiSelect value={newProgram.cities} onChange={handleChange} options={cities} optionLabel="Name" name='cities' display="chip"
                                        placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
                                </div> :
                                    <MultiSelect width={"100%"} loading placeholder="Choose Country First" className="w-full md:w-20rem" />
                                }
                                <Typography sx={{ color: "error.dark" }}>{errors.cities}</Typography>
                            </Grid>

                        </Grid>
                        <Grid container width={"80%"} justifyContent={"center"} spacing={{ xs: 1, md: 0 }}>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField type='date' variant='standard' name='date' value={newProgram.date} onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="Date" sx={{
                                        width: "100%",
                                        "& .MuiInput-root": {
                                            "&:before": { borderColor: "black" },
                                            "&:after": { borderColor: "black" }
                                        },
                                        "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" } }
                                    }}></TextField>
                                <Typography sx={{ color: "error.dark" }}>{errors.date}</Typography>
                            </Grid>
                            <Grid item md={1} xs={12} width={"100%"}>
                            </Grid>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField
                                    id="standard-select-transportation"
                                    select
                                    label="Transportation Type"
                                    defaultValue=""
                                    variant="standard"
                                    name="transportationType"
                                    value={newProgram.transportationType??""}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    sx={{
                                        width: "100%",
                                        "& .MuiInput-root": {
                                            "&:before": { borderColor: "black" },
                                            "&:after": { borderColor: "black" }
                                        },
                                        "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" } }
                                    }}>
                                    {transportations.map((option) => (
                                        <MenuItem key={option.Id} value={option.Name}>
                                            {option.Name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <Typography sx={{ color: "error.dark" }}>{errors.transportationType}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container width={"80%"} justifyContent={"center"} spacing={{ xs: 1, md: 0 }}>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField variant='standard' type='number' name='duration' value={newProgram.duration} onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="Duration" sx={{
                                        width: "100%",
                                        "& .MuiInput-root": {
                                            "&:before": { borderColor: "black" },
                                            "&:after": { borderColor: "black" }
                                        },
                                        "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" } }
                                    }}></TextField>
                                <Typography sx={{ color: "error.dark" }}>{errors.duration}</Typography>
                            </Grid>
                            <Grid item md={1} xs={12} width={"100%"}>
                            </Grid>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField variant='standard' type='number' name='budget' value={newProgram.budget} onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="Budget" sx={{
                                        width: "100%",
                                        "& .MuiInput-root": {
                                            "&:before": { borderColor: "black" },
                                            "&:after": { borderColor: "black" }
                                        },
                                        "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" } }
                                    }}></TextField>
                                <Typography sx={{ color: "error.dark" }}>{errors.budget}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container width={"80%"} justifyContent={"center"} spacing={{ xs: 1, md: 0 }}>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField variant='standard' name='image' value={newProgram.image} onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="Image URL" sx={{
                                        width: "100%",
                                        "& .MuiInput-root": {
                                            "&:before": { borderColor: "black" },
                                            "&:after": { borderColor: "black" }
                                        },
                                        "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" } }
                                    }}></TextField>
                                <Typography sx={{ color: "error.dark" }}>{errors.image}</Typography>
                            </Grid>
                            <Grid item md={1} xs={12} width={"100%"}>
                            </Grid>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField variant='standard' type='number' name='discount' value={newProgram.discount} onChange={handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    label="Discount" sx={{
                                        width: "100%",
                                        "& .MuiInput-root": {
                                            "&:before": { borderColor: "black" },
                                            "&:after": { borderColor: "black" }
                                        },
                                        "& .MuiInputLabel-standard": { "&.Mui-focused": { color: "black" } }
                                    }}></TextField>
                                <Typography sx={{ color: "error.dark" }}>{errors.discount}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container width={"80%"} justifyContent={"center"} spacing={{ xs: 1, md: 0 }}>
                            <Grid item xs={12} width={"100%"} mx={10}>
                                <div className="card flex justify-content-center">
                                    <MultiSelect value={newProgram.habitations} onChange={handleChange} options={habitations} optionLabel="name" optionValue='id' name='habitations' display="chip"
                                        placeholder="Select Habitations" maxSelectedLabels={5} className="w-full md:w-20rem" />
                                </div>
                                <Typography sx={{ color: "error.dark" }}>{errors.habitations}</Typography>
                            </Grid>
                        </Grid>
                        <button className={classes.button} onClick={handleClick} style={{ marginTop: "30px", width: "30%", height: "10%", fontSize: "20px" }}>Add</button>
                    </Stack>
                </Box>
            </div>
        );
    }
}

export default UpdateProgram;
