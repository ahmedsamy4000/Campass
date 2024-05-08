import React from 'react';
import classes from '../../Styles/SearchButton.module.css';

const SearchButton = () => {
    return (
        <div className={classes.InputContainer}>
            <input
                placeholder="Search.."
                id="input"
                className={classes.input}
                name="text"
                type="text"
            />
        </div>


    );
}

export default SearchButton;
