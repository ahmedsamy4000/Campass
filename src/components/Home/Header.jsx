import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import LockPersonTwoToneIcon from '@mui/icons-material/LockPersonTwoTone';
import LoginButton from './LoginButton';
import SearchButton from './SearchButton';

const Header = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', position: 'absolute'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px', padding: '10px', }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img src="Compass.gif" alt="Logo" style={{ width: '50px', height: 'auto', marginRight: '10px', borderRadius: '50%' }} />
                    <span style={{fontFamily: "Sedan SC", fontSize: '30px', color: 'white' }}>Campass</span>
                </Link>
                {/* <SearchButton/> */}
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ marginLeft: "300px", "& .MuiTabs-indicator": { backgroundColor: '#DFD0B8' } }} >
                    <Tab label="Programs" component={Link} to="/programs" sx={{ color: "white", '&.Mui-selected': { color: '#DFD0B8' }, marginRight: "5px" }} />
                    <Tab label="Countries" component={Link} to="/countries" sx={{ color: 'white', '&.Mui-selected': { color: '#DFD0B8' }, marginRight: '5px' }} />
                    <Tab label="Habitations" component={Link} to="/habitations" sx={{ color: 'white', '&.Mui-selected': { color: '#DFD0B8' }, marginRight: '5px' }} />
                    <Tab label="Contact Us" component={Link} to="/contact" sx={{ color: 'white', '&.Mui-selected': { color: '#DFD0B8' }, marginRight: '5px' }} />
                    <Tab label="About" component={Link} to="/about" sx={{ color: 'white', '&.Mui-selected': { color: '#DFD0B8' }, marginRight: '10px' }} />
                    {/* <Link to="/signin" ><LoginButton label={<LockPersonTwoToneIcon />}/></Link> */}
                </Tabs>
            </Box>
        </Box>
    );
}

export default Header;
