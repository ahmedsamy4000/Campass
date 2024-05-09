import { useEffect, useState } from 'react';
import classes from '../../Styles/loginRegister.module.css'
import { Box, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { usersAction } from '../../redux/slices/usersSlice';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { changeAuth } from '../../redux/slices/authSlice';


const Login = () => {
    const users = useSelector(state => state.users.users);
    const [user, setUser] = useState({ email: "", password: "" });
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // const [placeholder, setPlaceholder] = useState('');
    // const string = 'Weelcome Back ...'
    // const index = useRef(0);

    // useEffect(() => {
    //     function tick() {
    //         setPlaceholder(prev => prev + string[index.current]);
    //         index.current++;
    //     }
    //     if (index.current < string.length - 1) {
    //         let addChar = setInterval(tick, 100);
    //         return () => clearInterval(addChar);
    //     }
    // }, [placeholder]);

    useEffect(() => {
        dispatch(usersAction());
    }, [dispatch]);

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const handleClick = (event) => {
        event.preventDefault();
        const userFound = users.find(u => u.email === user.email)
        if (!userFound)
            setError("Invalid Email/Password");
        else {
            if (userFound.password !== user.password)
                setError("Invalid Email/Password");
            else {
                localStorage.setItem('email', userFound.email);
                localStorage.setItem('type', userFound.type);
                dispatch(changeAuth(true));
                navigate('/')
                setError("");
            }
        }
    }

    const googleLogin = useGoogleLogin({
        onSuccess: (res) => {
            try {
                axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${res.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                }).then((data) => {
                    const userFound = users.find(u => u.email === data.data.email)
                    if (userFound) {
                        setError("");
                        localStorage.setItem('email', userFound.email);
                        localStorage.setItem('type', userFound.type);
                        dispatch(changeAuth(true));
                        navigate('/')
                    }
                    else {
                        toast.error("Email not found, please sign up");
                    }
                })
            } catch (err) {
                toast.error('Login Faild');
            }
        },
        onError: (err) => {
            console.log(err);
        }
    })

    return (
        <div className={classes.form}>
            {/* <Typography variant='h4' mx={3} mt={3} color={"white"} fontFamily={"Rubik, sans-serif"}>{placeholder}</Typography> */}
            <Box p={5} textAlign={"center"} color={"white"}>
                <Typography mb={2} fontSize={"18px"} fontFamily={"Rubik, sans-serif"} fontWeight={"400"}>Sign in with</Typography>
                <IconButton onClick={() => googleLogin()}>
                    <GoogleIcon sx={{ color: 'white' }}></GoogleIcon>
                </IconButton>
                <Typography my={2} fontSize={"18px"} fontFamily={"Rubik, sans-serif"} fontWeight={"400"}>Or</Typography>
                <TextField autoComplete='off' className={classes.textField} variant='standard' type='email' label='Email' name='email' value={user.email} onChange={handleChange}
                    sx={{
                        "& .MuiInput-root": {
                            color: "white", "&:before": { borderColor: "white", borderWidth: "2px" },
                            "&:after": { borderColor: "white", borderWidth: "3px" },
                            ":hover:not(.Mui-focused)": { "&:before": { borderColor: "gray", borderWidth: "2px" } }
                        },
                        "& .MuiInputLabel-standard": { color: "white", fontWeight: "bold", "&.Mui-focused": { color: "white" } }
                    }}></TextField>
                <FormControl className={classes.textField}
                    sx={{
                        "& .MuiInput-root": {
                            color: "white", "&:before": { borderColor: "white", borderWidth: "2px" },
                            "&:after": { borderColor: "white", borderWidth: "3px" },
                            ":hover:not(.Mui-focused)": { "&:before": { borderColor: "gray", borderWidth: "2px" } }
                        },
                        "& .MuiInputLabel-standard": { color: "white", fontWeight: "bold", "&.Mui-focused": { color: "white" } }
                    }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input name='password' value={user.password} onChange={handleChange}
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
                <Typography color={"error.main"}>{error}</Typography>
                <div>
                    <button className={classes.btn} onClick={handleClick}>Sign in</button>
                </div>
                <Typography fontFamily={"Rubik, sans-serif"} fontWeight={"500"} fontSize={"18px"}>Not a Member? <Link style={{ color: "white" }} to={'/signup'}>Register</Link></Typography>
            </Box>
            <Toaster position='top-center' />
        </div>
    );
}

export default Login;
