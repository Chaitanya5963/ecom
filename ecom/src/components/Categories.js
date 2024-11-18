import React from 'react'
import { Box, IconButton, Typography } from '@mui/material';
import axios from 'axios'

const Categories = ({getCategory}) => {

    const mainStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 8px',
        p: 0,
        '&:hover': {
          backgroundColor: 'transparent'
        }
    }

    const imageStyle = {
        maxHeight: '60px',
        maxWidth: '60px',
        objectFit: 'cover'
    }

    const categoryLabel = {
        fontWeight: 'bold',
        fontSize: '14px',
        maxWidth: '80px'
    }

    const searchCategory = (category) => {
        axios.get('https://fakestoreapi.com/products/category/'+category)
      .then(response => {
        console.log(response.data);
        getCategory(response.data);
      })
      .catch(error => {
        alert('Error at category'+category);
        console.log(error);
      });
    }

  return (
    <Box sx={{
        margin: '5px 0',
        padding: '10px 5px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff',
        overflow: 'scroll',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
    }}>
        <IconButton sx={mainStyle} onClick={() => searchCategory('clothing')}>
            <img src='http://172.17.2.49:8080/ecom/src/images/fashion.jpg' alt='Fashion' style={imageStyle} />
            <Typography variant='p' sx={categoryLabel} >Fashion</Typography>
        </IconButton>
        <IconButton sx={mainStyle} onClick={() => searchCategory('')}>
            <img src='http://172.17.2.49:8080/ecom/src/images/glocery.jpg' alt='Glocery' style={imageStyle} />
            <Typography variant='p' sx={categoryLabel} >Glocery</Typography>
        </IconButton>
        <IconButton sx={mainStyle} onClick={() => searchCategory('')}>
            <img src='http://172.17.2.49:8080/ecom/src/images/mobiles.jpg' alt='Mobiles' style={imageStyle} />
            <Typography variant='p' sx={categoryLabel} >Mobiles</Typography>
        </IconButton>
        <IconButton sx={mainStyle} onClick={() => searchCategory('electronics')}>
            <img src='http://172.17.2.49:8080/ecom/src/images/electronics.jpg' alt='Electronics' style={imageStyle} />
            <Typography variant='p' sx={categoryLabel} >Electronics</Typography>
        </IconButton>
        <IconButton sx={mainStyle} onClick={() => searchCategory('')}>
            <img src='http://172.17.2.49:8080/ecom/src/images/home.jpg' alt='Home & Kitchen' style={imageStyle} />
            <Typography variant='p' sx={categoryLabel} >Home & Kitchen</Typography>
        </IconButton>
        <IconButton sx={mainStyle} onClick={() => searchCategory('')}>
            <img src='http://172.17.2.49:8080/ecom/src/images/appliances.jpg' alt='TV & Appliances' style={imageStyle} />
            <Typography variant='p' sx={categoryLabel} >TV & Appliances</Typography>
        </IconButton>
        <IconButton sx={mainStyle} onClick={() => searchCategory('')}>
            <img src='http://172.17.2.49:8080/ecom/src/images/personal-care.jpg' alt='Personal Care' style={imageStyle} />
            <Typography variant='p' sx={categoryLabel} >Personal Care</Typography>
        </IconButton>
        <IconButton sx={mainStyle} onClick={() => searchCategory('')}>
            <img src='http://172.17.2.49:8080/ecom/src/images/food.jpg' alt='Food' style={imageStyle} />
            <Typography variant='p' sx={categoryLabel} >Food</Typography>
        </IconButton> 
        <IconButton sx={mainStyle} onClick={() => searchCategory('jewelery')}>
            <img src='http://172.17.2.49:8080/ecom/src/images/toys.jpg' alt='Toys and more' style={imageStyle} />
            <Typography variant='p' sx={categoryLabel} >Toys and more</Typography>
        </IconButton>
    </Box>
  )
}

export default Categories;