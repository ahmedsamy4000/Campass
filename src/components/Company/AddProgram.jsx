import { Box, Grid, MenuItem, Stack, TextField, Typography, duration } from '@mui/material';
import React, { useEffect, useState } from 'react';
import classes from '../../Styles/companyCard.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { countriesAction } from '../../redux/slices/ContriesSlice';
import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { userActionByEmail } from '../../redux/slices/usersSlice';
import { habitationsAction } from '../../redux/slices/habitationsSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddProgram = () => {
    const countries = useSelector(state => state.countries.countries);
    const user = useSelector(state => state.users.user);
    const habitations = useSelector(state => state.habitations.habitations);
    const [cities, setCities] = useState([]);
    const transportations = [{ Id: 1, Name: 'Train' }, { Id: 2, Name: 'Bus' }, { Id: 3, Name: 'Plane' }];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [program, setProgram] = useState({
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

    let arr = [];

    useEffect(() => {
        dispatch(countriesAction());
        dispatch(habitationsAction());
    }, [dispatch]);

    useEffect(() => {
        dispatch(userActionByEmail(localStorage.getItem('email')));
        if (user) {
            setProgram({ ...program, companyID: user.id });
        }
    }, [dispatch, user, program])

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "countryName") {
            const country = countries.find(c => c.Name === value);
            if (country) {
                console.log(country.Cities);
                setCities(country.Cities);
            }
            setProgram({ ...program, [name]: value });
        }
        else if (name === 'duration') {
            let d = value;
            console.log(+d);
            setProgram({ ...program, duration: +d });
        }
        else if (name === 'budget') {
            let b = value;
            console.log(typeof +b);
            setProgram({ ...program, budget: +b });
        }
        else {
            setProgram({ ...program, [name]: value });
        }
        setErrors({ ...errors, [name]: '' });
    }

    const handleClick = (event) => {
        event.preventDefault();
        if (!program.programName)
            obj.programName = "Program Name is required";
        if (!program.description)
            obj.description = "Description is required";
        if (!program.countryName)
            obj.countryName = "Country Name is required";
        if (program.cities.length === 0)
            obj.cities = "Cities is required";
        if (!program.date)
            obj.date = "Date is required";
        if (!program.transportationType)
            obj.transportationType = "Transportation Type is required";
        if (!program.duration)
            obj.duration = "Duration is required";
        if (!program.budget)
            obj.budget = "Budget is required";
        if (!program.image)
            obj.image = "Image is required";
        if (!program.discount && program.discount !== 0)
            obj.discount = "Discount is required";
        if (program.habitations.length === 0)
            obj.habitations = "Habitations is required";
        setErrors(obj);
        if (program.programName && program.description && program.countryName && program.cities.length > 0 && program.date
            && program.transportationType && program.duration && program.budget && program.image
            && program.discount >= 0 && program.habitations.length > 0
        ) {
            axios.post("http://localhost:8000/programs", program).then(() => {
                navigate('/company/programs');
            })
        }
    }
    return (
        <div>
            <div className={classes.background}>
            </div>
            <div style={{ paddingTop: "50px", width: "100%", margin: "auto" }}>
                <Box mx={20} className={classes.con}>
                    <Stack direction={"row"} justifyContent={"space-between"} mt={2} mx={3}>
                        <Typography id="modal-modal-title" variant="h4" component="h2">
                            Add New Program
                        </Typography>
                    </Stack>
                    <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} p={2} spacing={{ md: 5, xs: 1 }}>
                        <Grid container width={"80%"} justifyContent={"center"} spacing={{ xs: 1, md: 0 }}>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField variant='standard' name='programName' value={program.programName} onChange={handleChange}
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
                                <TextField variant='standard' name='description' value={program.description} onChange={handleChange}
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
                                    value={program.countryName}
                                    onChange={handleChange}
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
                                {program.countryName ? <div className="card flex justify-content-center">
                                    <MultiSelect value={program.cities} onChange={handleChange} options={cities} optionLabel="Name" name='cities' display="chip"
                                        placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" style={{ backgroundColor: "#F6F4E8" }} />
                                </div> :
                                    <MultiSelect style={{ backgroundColor: "#F6F4E8" }} width={"100%"} loading placeholder="Choose Country First" className="w-full md:w-20rem" />
                                }
                                <Typography sx={{ color: "error.dark" }}>{errors.cities}</Typography>
                            </Grid>

                        </Grid>
                        <Grid container width={"80%"} justifyContent={"center"} spacing={{ xs: 1, md: 0 }}>
                            <Grid item md={5} xs={12} width={"100%"}>
                                <TextField type='date' variant='standard' name='date' value={program.date} onChange={handleChange}
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
                                    value={program.transportationType}
                                    onChange={handleChange}
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
                                <TextField variant='standard' type='number' name='duration' value={program.duration} onChange={handleChange}
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
                                <TextField variant='standard' type='number' name='budget' value={program.budget} onChange={handleChange}
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
                                <TextField variant='standard' name='image' value={program.image} onChange={handleChange}
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
                                <TextField variant='standard' type='number' name='discount' value={program.discount} onChange={handleChange}
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
                            <Grid item xs={12} width={"100%"} mx={20}>
                                <div className="card flex justify-content-center">
                                    <MultiSelect value={program.habitations} onChange={handleChange} options={habitations} optionLabel="name" optionValue='id' name='habitations' display="chip"
                                        style={{ backgroundColor: "#F6F4E8" }}
                                        placeholder="Select Habitations" maxSelectedLabels={5} className="w-full md:w-20rem" />
                                </div>
                                <Typography sx={{ color: "error.dark" }}>{errors.habitations}</Typography>
                            </Grid>
                        </Grid>
                        <button className={classes.button} onClick={handleClick} style={{ marginTop: "30px", width: "30%", height: "10%", fontSize: "20px" }}>Add</button>
                    </Stack>
                </Box>
            </div>
        </div>
    );
}

export default AddProgram;
