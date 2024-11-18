import React, {useState, useEffect} from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Rating, Typography, IconButton } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NavBar from './NavBar';
import SwiperAnimation from './SwiperAnimation'
import Categories from './Categories';
import axios from 'axios';
// import Demo from './Demo'

const Home = () => {

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(error => {
        alert('Error at home');
        console.log(error);
        setLoading(false);
      });
  },[]);

  const searchCategory = (data) => {
    setProducts(data);
  }

  const viewProduct = (id) => {
    window.open(`/product/${id}`, '_blank');
  };

  return (
    <Box>
      <NavBar login={login} />
      <Categories getCategory={searchCategory} />
      <SwiperAnimation />

      <Box sx={{ flexGrow: 1, padding: 2}}>
        <Grid
          container
          spacing={1}
        >
          {(loading)?
          (<div>Loading...</div>):
          (
            (products.length === 0)?
            (<Typography variant='h4' sx={{width: '100%', textAlign: 'center'}}>Data Not Found!</Typography>):
            (products.map((product) => (
            <Grid item key={product.id} {...{ xs: 6, sm: 4, md: 3, lg: 2, xl: 1 }} sx={{
              display: 'flex', justifyContent: 'center'
            }} >
              <Box sx={{ m: 0, p: 0, position: 'relative' }}>
                <IconButton sx={{ position: 'absolute', top: '20px', right: '20px', p: '2px', zIndex: 1,
                  backgroundColor: '#fff',
                  '&:hover': {
                    backgroundColor: '#fff'
                  },
                  boxShadow: '0 0 1px #000'
                }}>
                  <FavoriteBorderOutlinedIcon/>
                </IconButton>
                <Card onClick={() => viewProduct(product.id)} sx={{
                  width: '170px',
                  pt: '10px'
                }}>
                  <Box sx={{
                    // width: { xs: '170px', sm: '170px' },
                    // width: '170px',
                    height: '170px',
                    m: '2px 5px',
                    backgroundColor: '#f1f2f6'
                  }}>
                    <CardMedia 
                      component="img"
                      image={product.image}
                      alt={product.category}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </Box>
                  <CardContent sx={{ height: '100%' }} >
                    <Typography  variant="p" fontWeight='bold' component="div" sx={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      lineHeight: '1.5em', /* Adjust the line-height as needed */
                      maxHeight: '3em', /* 2 lines * line-height */
                      fontFamily: 'Arial, sans-serif' /* Optional: for visual representation */
                    }}>
                      {product.title}
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="h6" sx={{fontSize: '16px'}} component="div">
                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.price)}
                      </Typography>
                      <Rating name="read-only" value={product.rating.rate} readOnly precision={0.2} />
                      <Typography variant="body2" sx={{fontSize: '14px'}} color="text.secondary">
                        {product.rating.count} reviews
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))))}
        </Grid>
      </Box>

      {/* <Demo/> */}
    </Box>
  )
}

export default Home;