import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AppBar, Box, Typography, Button, IconButton, Paper, Divider, Rating } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './productView.css';

import { Pagination, Navigation } from 'swiper/modules';

const ProductView = () => {

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/'+id)
      .then(response => {
        setProduct(response.data);
        console.log(response.data);
        console.log(product);
        setLoading(false);
      })
      .catch(error => {
        alert('Error');
        console.log(error);
        setLoading(false);
      });
  },[id, product]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <h1 style={{"text-align": "center"}}>Data Not Found!</h1>;

  return (
    <Paper sx={{ minHeight: '100vh', maxWidth: '100vw' }}>
      <AppBar position="static">
        <Typography variant="h6" color="inherit" component="div" padding='10px 0 10px 25px'>
          Product Details:
        </Typography>
      </AppBar>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        // justifyContent: 'center',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px',
          position: 'relative'
        }}>
          <div className='swiper-outer-div' >
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <IconButton sx={{
                position: 'absolute', top: { xs: '20px', sm: '30px' }, right: { xs: '20px', sm: '30px' }, p: '2px', zIndex: 10,
                backgroundColor: '#fff',
                '&:hover': {
                  backgroundColor: '#fff'
                },
                boxShadow: '0 0 3px #000'
              }}>
                <FavoriteBorderOutlinedIcon />
              </IconButton>
              <SwiperSlide><img src={product.image} alt={product.category} /></SwiperSlide>
              {/* <SwiperSlide><img src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w300/2023/10/free-images.jpg' /></SwiperSlide> */}
            </Swiper>
          </div>
          <Box sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'space-evenly',
            width: '100%',
          }}>
            <Button variant="contained" size="large" sx={{ width: '45%', margin: '15px 10px', backgroundColor: '#FF9800', '&:hover': { backgroundColor: '#FF9800' } }}>
              ADD TO CART
            </Button>
            <Button variant="contained" size="large" sx={{ width: '45%', margin: '15px 10px', backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#4CAF50' } }}>
              BUY NOW
            </Button>
          </Box>
        </Box>
        {/* <hr style={{margin: '1% 10px'}} /> */}
        <Divider orientation="vertical" sx={{ m: '1% 5px' }} variant="middle" flexItem />
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant='h6' sx={{ fontSize: '18px' }}>Description:</Typography>
          <Typography variant="body2" sx={{ fontSize: '18px' }} color="text.secondary">
            {product.description}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ fontSize: '18px' }} component="div">
              {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.price)}
            </Typography>
            <Rating name="read-only" value={product.rating.rate} readOnly precision={0.2} />
            <Typography variant="body2" sx={{ fontSize: '16px' }} color="text.secondary">
              {product.rating.count} reviews
            </Typography>
          </Box>
        </Box>
      </Box>
      <Paper sx={{
        display: { xs: 'flex', sm: 'none' },
        justifyContent: 'space-evenly',
        width: '100%',
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0
      }}>
        <Button variant="contained" size="large" sx={{
          width: '50%', margin: '4px', backgroundColor: '#FF9800',
          '&:hover': { backgroundColor: '#FF9800' }
        }}>ADD TO CART</Button>
        <Button variant="contained" size="large" sx={{
          width: '50%', margin: '4px', backgroundColor: '#4CAF50',
          '&:hover': { backgroundColor: '#4CAF50' }
        }}>BUY NOW</Button>
      </Paper>
    </Paper>
  );
}

export default ProductView;
