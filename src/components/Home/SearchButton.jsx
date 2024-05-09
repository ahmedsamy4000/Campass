import React, { useState } from 'react';
import classes from '../../Styles/SearchButton.module.css';
import { Stack } from '@mui/material';
import { Row } from 'react-bootstrap';

const SearchButton = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        if (searchText.trim() !== '') {
            window.location.href = `http://localhost:3000/search/${(searchText)}`;
        }
    };
    return (
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <div className={classes.InputContainer}>
            <input
                placeholder="Search.."
                className={classes.input}
                name="text"
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
        <button className={classes.button} onClick={handleSearch}>Search</button>

    </Stack>
    );
}

export default SearchButton;
