import React from 'react'
import { Box, Button, Typography } from '@mui/material';
const Project = () => {
  return (
    <div>
      <Box sx={{
        height: '50px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: '10px',
        borderRadius: '4px',
      }}>
        <Typography sx={{ fontSize: '18px' }}>Add new Project Details</Typography>
        <Button variant='contained' >Back to Details</Button>
      </Box>
      <Box>

      </Box>
    </div>
  )
}

export default Project;
