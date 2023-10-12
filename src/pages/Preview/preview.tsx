import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import  { useState } from 'react';

const Preview = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      image: "product1.jpg",
    },
    // Add more products here
  ]);

  return (
    <div className="product-list">
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="200"
                image={product.image}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${product.price.toFixed(2)}
                </Typography>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Preview;
