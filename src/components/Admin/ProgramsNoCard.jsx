import CardTravelIcon from '@mui/icons-material/CardTravel';
import SellIcon from '@mui/icons-material/Sell';
import { Card } from 'react-bootstrap';

import React, { useEffect, useState } from 'react';

const ProgramsNoCard = ({data, text}) => {
    const [totalReserv, setTotalReserv] = useState(0);
    useEffect(() => {
        if(text === 'Total Reservations'){
            setTotalReserv(data.reduce((total, program) => {
                return total + program.totalReservations;
            }, 0))
        }
    }, [data, text])
    return (
        <Card
            style={text === 'Total Reservations'? { width: '300px', backgroundColor:"#AD88C6", color: "#FFCDEA"}: { width: '300px', backgroundColor:"#E78895", color: "#FFF7F1"}}
        >
            {text === 'Total Reservations' ? <Card.Header><SellIcon></SellIcon></Card.Header> : <Card.Header><CardTravelIcon></CardTravelIcon></Card.Header>}
            
            <Card.Body>
            {text === 'Total Reservations' ? <Card.Title>{totalReserv}</Card.Title> : <Card.Title>{data.length}</Card.Title>}
                {text === 'Total Reservations' ? <Card.Text style={{color:"#FFCDEA"}}>{text}</Card.Text>:<Card.Text style={{color:"#FFF7F1"}}>{text}</Card.Text>}
            </Card.Body>
        </Card>
    );
}

export default ProgramsNoCard;
