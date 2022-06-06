import React, { useEffect, useState } from 'react';
import Header from '../../common/header/Header';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Formcontrol from '@mui/material/FormControl';
import { Typography, TextField } from '@mui/material';
import { createTheme } from '@mui/material';
import './BookShow.css';
import { red } from '@mui/material/colors';
import cities from '../../common/cities';
import { MenuItem } from '@mui/material';

const BookShow = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: red[500],
            }
        }
    });

    const [city, setCity] = useState('');
    const [numberOfTickets, setNumberOfTickets] = useState('');
    const [date, setDate] = useState(''); 
    const [amount, setAmount] = useState('');

    useEffect(() => {
        setAmount(numberOfTickets * 500);
    }, [numberOfTickets]);    

    const confirmBooking = () => {
        alert(`Thank You! Your ${numberOfTickets} Ticket's for the date ${date} and city ${city} are Booked! `);
    }
  return (
    <div className='bookshow'>
        <Header />
        <div className='back-btn'>
            <Link to='/'>
                <Formcontrol style={{color: theme.palette.primary.main}}>
                    <Button id='back-btn' variant='contained'>Back to Home</Button>
                </Formcontrol>
            </Link>
        </div>
        <div className="bookshowcontent">
            <Card className='cardStyle' sx={{width: 600}}>
                <div className="formElements">
                    <Formcontrol style={{color: theme.palette.primary.main, margin: theme.spacing(2)}}>
                        <Typography component={'span'} ><h3>:: Book Show ::</h3></Typography>
                    </Formcontrol>
                    <Formcontrol style={{width: theme.spacing(50), margin: theme.spacing(2)}}>
                        <TextField variant='outlined' label='Location' select onChange={(e) => setCity(e.target.value)} helperText='Please select your Location'>
                            {
                                cities.map((value) => {
                                    return <MenuItem height='300px' key={value.id} style={{margin: theme.spacing(2)}} value={`${value.name}`}>{`${value.name}`}</MenuItem>
                                })
                            }
                        </TextField>
                    </Formcontrol>
                    <Formcontrol style={{width: theme.spacing(50), margin: theme.spacing(1)}}>
                        <TextField variant='outlined' label='Date' InputLabelProps={{shrink: true}} type='date' onChange={(e) => setDate(e.target.value)} helperText='Please select Date of booking'>
                            
                        </TextField>
                    </Formcontrol>
                    <Formcontrol style={{width: theme.spacing(50), margin: theme.spacing(2)}}>
                        <TextField variant='outlined' label='Number of Tickets' select onChange={(e) => setNumberOfTickets(e.target.value)} helperText='Please select number of seats to be booked'>
                            {
                                [...Array(10)].map((v, i) => {
                                    const value = i + 1;
                                    return <MenuItem height='300px' style={{margin: theme.spacing(1)}} key={value} value={value} >{value}</MenuItem>
                                })
                            }
                        </TextField>
                    </Formcontrol>
                    <Formcontrol style={{width: theme.spacing(50), margin: theme.spacing(2)}} >
                        <TextField id='bookingAmount' placeholder='Amount' disabled value={amount} helperText='Amount to be Paid'></TextField>
                    </Formcontrol>
                    <Formcontrol style={{width: theme.spacing(50), margin: theme.spacing(1)}}>
                        <Link to='/'><Button variant='outlined'>CANCEL</Button></Link>
                    </Formcontrol>
                    <Formcontrol style={{width: theme.spacing(50), margin: theme.spacing(1)}}>
                        <Button variant='contained' onClick={() => confirmBooking}>BOOK SHOW</Button>
                    </Formcontrol>
                    
                </div>

            </Card>
        </div>
    </div>
  )
}

export default BookShow;