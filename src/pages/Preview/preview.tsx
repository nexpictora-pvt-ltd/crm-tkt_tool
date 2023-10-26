import { Grid, Card, CardContent, CardMedia, Typography, Button, CircularProgress } from '@mui/material';
import  { FC, Fragment, useEffect} from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { servicePreviewSelector } from '../../store/preview/servicePreview.selector';
import { getServicesAsync } from '../../store/preview/servicePreview.reducer';


const Preview:FC = () => {
  const { services, isLoading: servicesLoading} =
    useAppSelector(servicePreviewSelector);

  const accessToken = useAppSelector((state) => state.login.loginResponse.access_token);

  // console.log(accessToken)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getServicesAsync(accessToken));

  }, [dispatch]);
  return (
    <Fragment>
      {servicesLoading ? (
        <Grid container>
          <div className="overlay-container">
            <CircularProgress />
          </div>
        </Grid>
      ) : (
    <div className="product-list">
      <Grid container spacing={2}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.service_id}>
            <Card>
              <CardMedia
                component="img"
                alt={service.service_name}
                height="200"
                image={service.service_image}
               sx={{maskImage:"revert-layer"}} 
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {service.service_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${service.service_price.toFixed(2)}
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
    )}
    </Fragment>
  );
};

export default Preview;
