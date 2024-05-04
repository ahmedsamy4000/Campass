import { useEffect, useRef, useState } from 'react';
import classes from '../../Styles/login.module.css'
import { Box, FormControl, FormControlLabel, Grid, IconButton, Input, InputAdornment, InputLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { usersAction } from '../../redux/slices/usersSlice';


const Register = () => {
    const [user, setUser] = useState({ fName: "", lName: "", email: "", phone: "", password: "", type: "" });
    const [errors, setErrors] = useState({ fName: "", lName: "", email: "", phone: "", password: "", type: "", confirmPassword: "" });
    const [confirmPassword, setConfirmPassword] = useState("");

    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(usersAction());
    }, [dispatch])

    const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegx = /^[a-zA-z]+$/
    const phoneRegex = /^(010|011|012|015)[0-9]{8}$/

    const [placeholder, setPlaceholder] = useState('');
    const string = `Weelcome to Campass!
    let's take the adventure...`
    const index = useRef(0);

    const googleLogin = useGoogleLogin({
        onSuccess: (res) => {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${res.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            }).then((data) => {
                const userFound = users.find(u => u.email === data.data.email)
                if (userFound)
                    alert("email is already exist");
                else {
                    axios.post("http://localhost:8000/users",
                        { id: data.data.id, email: data.data.email, fName: data.data.given_name, lName: data.data.family_name, phone: "", password: "", type: "" })
                }
            })

        },
        onError: (err) => {
            console.log(err);
        }
    });

    useEffect(() => {
        function tick() {
            setPlaceholder(prev => prev + string[index.current]);
            index.current++;
        }
        if (index.current < string.length - 1) {
            let addChar = setInterval(tick, 100);
            return () => clearInterval(addChar);
        }
    }, [placeholder, string]);

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [showPasswordC, setShowPasswordC] = useState(false);

    const handleClickShowPasswordC = () => setShowPasswordC((show) => !show);

    const handleMouseDownPasswordC = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'confirmPassword')
            setConfirmPassword(value);
        else
            setUser({ ...user, [name]: value });
        switch (name) {
            case "fName":
                setErrors({ ...errors, fName: nameRegx.test(value) ? "" : "First Name must be only characters" });
                break;
            case "lName":
                setErrors({ ...errors, lName: nameRegx.test(value) ? "" : "Last Name must be only characters" });
                break;
            case "email":
                setErrors({ ...errors, email: emailRegx.test(value) ? "" : "Invalid Email" });
                break;
            case "phone":
                setErrors({ ...errors, phone: phoneRegex.test(value) ? "" : "Invalid Phone Number" });
                break;
            case "type":
                setErrors({ ...errors, type: value !== "" ? "" : "Type is required" });
                break;
            case "password":
                setErrors({ ...errors, password: value.length < 8 ? "Password must be at least 8 characters" : "" });
                break;
            case "confirmPassword":
                setErrors({ ...errors, confirmPassword: value !== user.password ? "Passwords don't match" : "" });
                break;
            default:
                break;
        }
    }

    const handleClick = async (event) => {
        event.preventDefault();
        if (user.fName === "")
            setErrors({ ...errors, fName: "First Name is required" });
        if (user.lName === "")
            setErrors({ ...errors, lName: "Last Name is required" });
        if (user.email === "")
            setErrors({ ...errors, email: "Email is required" });
        if (user.phone === "")
            setErrors({ ...errors, phone: "Phone is required" });
        if (user.type === "")
            setErrors({ ...errors, type: "Type is required" });
        if (user.password === "")
            setErrors({ ...errors, fName: "Password is required" });
        if (confirmPassword === "")
            setErrors({ ...errors, confirmPassword: "Password is required" });
        if (user.fName !== "" && user.lName !== "" && user.email !== "" && user.phone !== "" && user.type !== "" && user.password !== "" && confirmPassword !== "") {
            if (!errors.fName && !errors.lName && !errors.email && !errors.type && !errors.phone && !errors.password && !errors.confirmPassword) {
                const userFound = await users.find(u => u.email === user.email);
                if (!userFound) {
                    axios.post("http://localhost:8000/users", user);
                }
                else {
                    setErrors({ ...errors, email: "Email is already exist" });
                }
            }
        }
    }

    return (
        <div className={classes.form}>
            {/* <Typography className={classes.sentence} variant='h4' mx={50} mt={10} color={"white"} fontFamily={"Rubik, sans-serif"}>{placeholder}</Typography> */}
            <Box p={5} textAlign={"center"} color={"white"}>
                <div className={classes.signLarge}>
                    <Typography fontSize={"18px"} fontFamily={"Rubik, sans-serif"} fontWeight={"400"}>Sign up with</Typography>
                    <IconButton onClick={() => googleLogin()}>
                        <GoogleIcon sx={{ color: 'white' }}></GoogleIcon>
                    </IconButton>
                </div>
                <div className={classes.signSmall}>
                    <Typography fontSize={"18px"} fontFamily={"Rubik, sans-serif"} fontWeight={"400"}>Sign up with
                        <IconButton onClick={() => googleLogin()}>
                            <GoogleIcon sx={{ color: 'white' }}></GoogleIcon>
                        </IconButton></Typography>
                </div>
                <Typography my={1} fontSize={"18px"} fontFamily={"Rubik, sans-serif"} fontWeight={"400"}>Or</Typography>

                <Grid container justifyContent={"center"}>
                    <Grid item md={5} xs={12}>
                        <TextField variant='standard' type='text' label='First Name' name='fName' value={user.fName} onChange={handleChange}
                            sx={{
                                width: "90%", marginTop: "15px",
                                "& .MuiInput-root": {
                                    color: "white", "&:before": { borderColor: "white", borderWidth: "2px" },
                                    "&:after": { borderColor: "white", borderWidth: "3px" },
                                    ":hover:not(.Mui-focused)": { "&:before": { borderColor: "gray", borderWidth: "2px" } }
                                },
                                "& .MuiInputLabel-standard": { color: "white", fontWeight: "bold", "&.Mui-focused": { color: "white", fontSize: "18px" } }
                            }}></TextField>
                        <Typography alignItems={"start"} color={"error.main"}>{errors.fName}</Typography>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <TextField variant='standard' type='text' label='Last Name' name='lName' value={user.lName} onChange={handleChange}
                            sx={{
                                width: "90%", marginTop: "15px",
                                "& .MuiInput-root": {
                                    color: "white", "&:before": { borderColor: "white", borderWidth: "2px" },
                                    "&:after": { borderColor: "white", borderWidth: "3px" },
                                    ":hover:not(.Mui-focused)": { "&:before": { borderColor: "gray", borderWidth: "2px" } }
                                },
                                "& .MuiInputLabel-standard": { color: "white", fontWeight: "bold", "&.Mui-focused": { color: "white", fontSize: "18px" } }
                            }}></TextField>
                        <Typography color={"error.main"}>{errors.lName}</Typography>
                    </Grid>
                </Grid>

                <Grid container justifyContent={"center"}>
                    <Grid item md={5} xs={12}>
                        <TextField variant='standard' type='email' label='Email' name='email' value={user.email} onChange={handleChange}
                            sx={{
                                width: "90%", marginTop: "15px",
                                "& .MuiInput-root": {
                                    color: "white", "&:before": { borderColor: "white", borderWidth: "2px" },
                                    "&:after": { borderColor: "white", borderWidth: "3px" },
                                    ":hover:not(.Mui-focused)": { "&:before": { borderColor: "gray", borderWidth: "2px" } }
                                },
                                "& .MuiInputLabel-standard": { color: "white", fontWeight: "bold", "&.Mui-focused": { color: "white", fontSize: "18px" } }
                            }}></TextField>
                        <Typography color={"error.main"}>{errors.email}</Typography>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <TextField variant='standard' type='tel' label='Phone Number' name='phone' value={user.phone} onChange={handleChange}
                            sx={{
                                width: "90%", marginTop: "15px",
                                "& .MuiInput-root": {
                                    color: "white", "&:before": { borderColor: "white", borderWidth: "2px" },
                                    "&:after": { borderColor: "white", borderWidth: "3px" },
                                    ":hover:not(.Mui-focused)": { "&:before": { borderColor: "gray", borderWidth: "2px" } }
                                },
                                "& .MuiInputLabel-standard": { color: "white", fontWeight: "bold", "&.Mui-focused": { color: "white", fontSize: "18px" } }
                            }}></TextField>
                        <Typography color={"error.main"}>{errors.phone}</Typography>
                    </Grid>
                </Grid>

                <Grid container justifyContent={"center"}>
                    <Grid item md={5} xs={12}>
                        <FormControl
                            sx={{
                                width: "90%", marginTop: "15px",
                                "& .MuiInput-root": {
                                    color: "white", "&:before": { borderColor: "white", borderWidth: "2px" },
                                    "&:after": { borderColor: "white", borderWidth: "3px" },
                                    ":hover:not(.Mui-focused)": { "&:before": { borderColor: "gray", borderWidth: "2px" } }
                                },
                                "& .MuiInputLabel-standard": { color: "white", fontWeight: "bold", "&.Mui-focused": { color: "white", fontSize: "18px" } }
                            }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input value={user.password} onChange={handleChange} name='password'
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            sx={{ color: "white" }}
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Typography color={"error.main"}>{errors.password}</Typography>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <FormControl
                            sx={{
                                width: "90%", marginTop: "15px",
                                "& .MuiInput-root": {
                                    color: "white", "&:before": { borderColor: "white", borderWidth: "2px" },
                                    "&:after": { borderColor: "white", borderWidth: "3px" },
                                    ":hover:not(.Mui-focused)": { "&:before": { borderColor: "gray", borderWidth: "2px" } }
                                },
                                "& .MuiInputLabel-standard": { color: "white", fontWeight: "bold", "&.Mui-focused": { color: "white", fontSize: "18px" } }
                            }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-passwordc">Confirm Password</InputLabel>
                            <Input value={confirmPassword} onChange={handleChange} name='confirmPassword'
                                id="standard-adornment-passwordc"
                                type={showPasswordC ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            sx={{ color: "white" }}
                                            onClick={handleClickShowPasswordC}
                                            onMouseDown={handleMouseDownPasswordC}
                                        >
                                            {showPasswordC ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Typography color={"error.main"}>{errors.confirmPassword}</Typography>
                    </Grid>
                </Grid>
                <FormControl sx={{ marginTop: "5px" }}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="type"
                        value={user.type} onChange={handleChange}
                    >
                        <FormControlLabel control={<Radio value={"Traveller"} sx={{ color: "white", "&.Mui-checked": { color: "white" } }} />} label="Traveller" />
                        <FormControlLabel control={<Radio value={"Company"} sx={{ color: "white", "&.Mui-checked": { color: "white" } }} />} label="Company" />
                    </RadioGroup>
                    <Typography color={"error.main"}>{errors.type}</Typography>
                </FormControl>
                <div>
                    <button className={classes.btn} style={{ marginTop: "18px" }} onClick={handleClick}>Sign Up</button>
                    {/* <GoogleLogin onSuccess={(res)=>console.log(res)} onError={(res)=>console.log(res)}></GoogleLogin> */}
                </div>
                <Typography fontFamily={"Rubik, sans-serif"} fontWeight={"500"} fontSize={"18px"}>Already have an account? Login</Typography>
            </Box>
        </div>
    );
}

export default Register;
