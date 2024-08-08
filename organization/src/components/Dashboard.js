import React from 'react'
import { Box, Typography } from '@mui/material'

const Dashboard = () => {
  return (
    <Box sx={{
        height: `calc(100vh - 80px)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }}>
        <Box sx={{
            height: '50px',
            backgroundColor: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: '10px',
            borderRadius: '4px',
        }}>
            <Typography sx={{ fontSize: '18px' }}>Dashboard</Typography>
        </Box>
        <Box sx={{
            height: `calc(100vh - 135px)`,
            // overflowY: 'scroll',
            // '&::-webkit-scrollbar': {
            //     display: 'none',
            // },
            // '-ms-overflow-style': 'none',
            // 'scrollbar-width': 'none',
            padding: 1,
            backgroundColor: '#fff',
            borderRadius: '4px'
        }}>
            Dashboard Content
        </Box>
    </Box>
  )
}

export default Dashboard;
