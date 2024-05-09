import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import LockPersonTwoToneIcon from '@mui/icons-material/LockPersonTwoTone';
import LoginButton from './LoginButton';
import SearchButton from './SearchButton';
import { useDispatch, useSelector } from 'react-redux';
import { changeAuth } from '../../redux/slices/authSlice';
import { Grid } from '@mui/material';
import ClassNames from '../../Styles/Header.module.css'

const Header = () => {
    const [value, setValue] = React.useState(0);
    const isAuth =useSelector(state=>state.isAuth.isAuth)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const dispatch=useDispatch()
    const type=localStorage.getItem("type")
    const handleClick=()=>{
        localStorage.removeItem("email")
        localStorage.removeItem("type")
        dispatch(changeAuth())
    }
    return (
        <Box sx={{ width: '100%', position: 'absolute' ,zIndex:'2000'}}>
            <Grid container sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px', padding: '10px'}}>
                <Grid item md={4} display={"flex"} marginTop={"10px"}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <img src="Compass.gif" alt="Logo" style={{ width: '50px', height: 'auto', marginRight: '3px', borderRadius: '50%' }} />
                        <span className={ClassNames.txt}>CAMPASS</span>
                    </Link>
                    <SearchButton></SearchButton>
                </Grid>
                <Grid item md={8} display={"flex"} justifyContent={"end"}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{"& .MuiTabs-indicator": { backgroundColor: '#DFD0B8' } }} >
                    {(isAuth&&type==="Company")?<Tab label="Programs" component={Link} to="/company/programs" sx={{ color: "white", '&.Mui-selected': { color: '#DFD0B8' }}} />
                    :<Tab label="Programs" component={Link} to="/programs" sx={{ color: "white", '&.Mui-selected': { color: '#DFD0B8' }}} />
                    }
                    {isAuth&&type==="Admin"&&<Tab label="Analysis" component={Link} to="/analysis" sx={{ color: "white", '&.Mui-selected': { color: '#DFD0B8' }}} />
                    }
                    {(!isAuth||type==="Company"||type==="Traveller")&&
                    <Tab label="Countries" component={Link} to="/countries" sx={{ color: 'white', '&.Mui-selected': { color: '#DFD0B8' } }} />
                    }
                    {(!isAuth||type==="Company"||type==="Traveller")&&
                    <Tab label="Habitations" component={Link} to="/habitations" sx={{ color: 'white', '&.Mui-selected': { color: '#DFD0B8' } }} />
                    }
                    {(isAuth&&(type==="Company"||type==="Traveller"))&&<Tab label="Contact Us" component={Link} to="/contact" sx={{ color: 'white', '&.Mui-selected': { color: '#DFD0B8' } }} />
                    }
                    <Tab label="About" component={Link} to="/about" sx={{ color: 'white', '&.Mui-selected': { color: '#DFD0B8' }}} />
                    {isAuth&&type==="Admin"&&<Tab label="FeedBacks" component={Link} to="/feedbacks" sx={{ color: 'white', '&.Mui-selected': { color: '#DFD0B8' } }} />
                    }
                    {isAuth&&type==="Traveller"&&<Tab label="Reservations" component={Link} to="/userReservations" sx={{ color: 'white', '&.Mui-selected': { color: '#DFD0B8' }}} />
                    }
                    {isAuth&&type==="Company"&&<Tab label="Reservations" component={Link} to="/reservations" sx={{ color: 'white', '&.Mui-selected': { color: '#DFD0B8' } }} />
                    }
                    {!isAuth&&
                    <Link to="/signin" ><LoginButton txt="Login" label={<LockPersonTwoToneIcon />}/></Link>}
                    {isAuth&&
                    <div onClick={handleClick}>
                        <Link to="/"><LoginButton txt="Logout" label={<LockPersonTwoToneIcon />}/></Link>
                    </div>
                    }
                </Tabs>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;
