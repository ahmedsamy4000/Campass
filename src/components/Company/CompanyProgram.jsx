import React from 'react';
import classes from '../../Styles/companyCard.module.css'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const CompanyProgram = ({ programName, description, image, id }) => {
    return (
        <div>
            <div className={classes.card} style={{ backgroundImage: `url(${image})` }}>
                <div className={classes.cardContent}>
                    <h2 className={classes.cardTitle}>{programName}</h2>
                    <Stack direction={"column"} justifyContent={"space-between"} height={"70%"}>
                        <p className={classes.cardBody}>
                            {description}
                        </p>
                        <Stack direction={"row"} justifyContent={"space-between"}>
                        <Link to={'/reservations'} className={classes.button}>
                                Reservations
                            </Link>
                            <Link to={`/company/programs/${id}`} className={classes.button}>
                                Update
                            </Link>
                            <Link to={'/'} className={classes.button}>
                                Delete
                            </Link>
                        </Stack>
                    </Stack>
                </div>
            </div>
        </div>
    );
}

export default CompanyProgram;
