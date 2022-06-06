import React from 'react'
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/system';
import { Card } from '@mui/material'
import { FormControl, TextField, Button } from '@mui/material';
import './Login.css';

const Login = () => {
    const theme = createTheme({});
  return (
    <div className='login-Container'>
        <Card style={{width: theme.spacing(70)}}>
            <div className="login">
            <h1>Login</h1>
                <FormControl style={{margin: theme.spacing(10)}}>
                    <TextField variant='outlined' label='UserName' style={{margin: theme.spacing(2)}}>

                    </TextField>
                    <TextField variant='outlined' label='Password' style={{margin: theme.spacing(2)}}>

                    </TextField>
                    <Button variant='contained' style={{margin: theme.spacing(2)}}>Login</Button>
                    <Link to='/signup'><Button variant='outlined' style={{margin: theme.spacing(2)}}>New User</Button></Link>
                </FormControl>
            </div>
        </Card>
    </div>
  )
}

export default Login;