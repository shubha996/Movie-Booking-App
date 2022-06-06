import React from 'react'
import { createTheme } from '@mui/system';
import { Card } from '@mui/material'
import { FormControl, TextField, Button } from '@mui/material';
import './Signup.css';

const Signup = () => {
    const theme = createTheme({});
  return (
    <div className='signup-Container'>
        <Card style={{width: theme.spacing(70)}}>
            <div className="signup">
                <h1 style={{textAlign: 'center'}}>SignUp</h1>
                <FormControl style={{margin: theme.spacing(5)}}>
                    <TextField variant='outlined' label='Name' style={{margin: theme.spacing(2),width: theme.spacing(50)}}>

                    </TextField>
                    <TextField variant='outlined' label='Email' style={{margin: theme.spacing(2)}}>

                    </TextField>
                    <TextField variant='outlined' label='Mobile Number' style={{margin: theme.spacing(2)}}>

                    </TextField>
                    <TextField variant='outlined' label='UserName' style={{margin: theme.spacing(2)}}>

                    </TextField>
                    <TextField variant='outlined' label='Password' style={{margin: theme.spacing(2)}}>

                    </TextField>
                    <Button variant='contained' style={{margin: theme.spacing(2)}}>Login</Button>
                </FormControl>
            </div>
        </Card>
    </div>
  )
}

export default Signup;