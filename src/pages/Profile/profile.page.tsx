
import React, { useState } from 'react';
import {
    Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showChangePasswordFields, setShowChangePasswordFields] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const toggleChangePasswordFields = () =>
    setShowChangePasswordFields((show) => !show);

  const handleMouseDownPassword = (event:any) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid container xs={12} >
        <Grid container xs={12}  justifyContent={'center'} p={2}>
          <AccountCircleIcon sx={{ width: '200px', height: '200px' ,color:"#CBEEF0"}} />
        </Grid>

        <Grid container xs={12} justifyContent={'center'}>
          <Typography variant='h5'color={'#082C5E'}>Isha Pathak</Typography>
        </Grid>
      </Grid>

      <Grid container xs={12} >
        <Grid container xs={12} >
          <Grid container xs={6}  p={2}>
            <TextField
              label='Email'
              id='filled-size-normal'
              defaultValue='isha@gmail.com'
              variant='filled'
              fullWidth
            />
          </Grid>
          <Grid container xs={6}  p={2}>
            <TextField
              label='Phone Number'
              id='filled-size-normal'
              defaultValue='+91 9322890365'
              variant='filled'
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container xs={12}  p={2}>
          <TextField
            label='Address'
            id='filled-size-normal'
            defaultValue='Kalyani Nagar, Pune'
            variant='filled'
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container xs={12} >
        <Grid container xs={12}  p={2}>
          <Typography
            variant='h5'
            style={{ cursor: 'pointer' ,color:'#D36A2F'}}
            onClick={toggleChangePasswordFields}
          >
            Change Password?
          </Typography>
        </Grid>

        {showChangePasswordFields && (
          <>
            <Grid container xs={12} sm={12} md={6}   p={2}>
              <FormControl fullWidth variant='outlined'>
                <InputLabel htmlFor='outlined-adornment-password'>
                  Old Password
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-password'
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Old pass'
                />
              </FormControl>
            </Grid>

            <Grid container xs={12} sm={12} md={6}  p={2}>
              <FormControl fullWidth variant='outlined'>
                <InputLabel htmlFor='outlined-adornment-password'>
                 New Password
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-password'
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='New pass'
                />
              </FormControl>
            </Grid>

            <Grid container xs={12} sm={12} md={6}  p={2}>
              <FormControl fullWidth variant='outlined'>
                <InputLabel htmlFor='outlined-adornment-password'>
                 Confirm Password
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-password'
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Confirm pass'
                />
              </FormControl>
            </Grid>

            <Grid container xs={12}  justifyContent={'right'}>
              <Button variant='contained'>Change Password</Button>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Profile;













