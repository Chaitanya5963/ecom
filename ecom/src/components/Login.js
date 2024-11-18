import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';

const Login = () => {

    const fieldStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin : '5px 0',
        gap : 0.2
    }

  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',

    }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '6px',
            boxShadow: '0 0 3px #000',
            width: '320px',
        }}>
            <Typography gutterBottom variant='h4' color='primary'>ECOM</Typography>
            <Typography gutterBottom variant='h6'>Login to your account</Typography>
            <Box component='form' sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <TextField variant="outlined" sx={fieldStyle} label='Username' size='small'/>
                <TextField variant="outlined" sx={fieldStyle} label='Password' size='small'/>
                <Button sx={{ my: 1 }} variant='contained'>Login</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Login;