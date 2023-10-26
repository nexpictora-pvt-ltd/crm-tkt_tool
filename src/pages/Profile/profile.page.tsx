/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { useDispatch,  } from 'react-redux';
import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { getProfileAsync } from '../../store/profile/profile.reducer';
import { useAppSelector } from '../../hooks/useAppSelector';

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showChangePasswordFields, setShowChangePasswordFields] = useState(false);

  const dispatch = useDispatch();
  const profile = useAppSelector((state) => state.profile);
  const isLoading = useAppSelector((state) => state.profile.isLoading);
  

  const accessToken = useAppSelector((state) => state.login.loginResponse.access_token);

  // console.log(profile.profile.address)
  useEffect(() => {

    dispatch(getProfileAsync(accessToken) as any); 
  }, [dispatch]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const toggleChangePasswordFields = () => setShowChangePasswordFields((show) => !show);

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid container xs={12}>
        <Grid container xs={12} justifyContent={'center'} p={2}>
          <AccountCircleIcon sx={{ width: '200px', height: '200px', color: "#CBEEF0" }} />
        </Grid>

        {isLoading ? (
          <Typography>Loading...</Typography>
        ) : (
          <Grid container xs={12} justifyContent={'center'}>
            <Typography variant='h5' color={'#082C5E'}>
              {profile.profile.name}
            </Typography>
          </Grid>
        )}
      </Grid>

      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Grid container xs={12}>
          <Grid container xs={12}>
            <Grid container xs={6} p={2}>
              <TextField
                label='Email'
                id="filled-read-only-input"
                defaultValue={profile.profile.email}
                variant='filled'
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid container xs={6} p={2}>
              <TextField
                label='Phone Number'
                id='filled-size-normal'
                defaultValue={profile.profile.phone}
                variant='filled'
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container xs={12} p={2}>
            <TextField
              label='Address'
              id='filled-size-normal'
              defaultValue={profile.profile.address}
              variant='filled'
              InputProps={{
                readOnly: true,
              }}
              fullWidth
            />
          </Grid>
        </Grid>
      )}


      <Grid container xs={12}>
        <Grid container xs={12} p={2}>
          <Typography
            variant='h5'
            style={{ cursor: 'pointer', color: '#D36A2F' }}
            onClick={toggleChangePasswordFields}
          >
            Change Password?
          </Typography>
        </Grid>

        {showChangePasswordFields && (
          <>
            <Grid container xs={12} sm={12} md={6} p={2}>
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

            <Grid container xs={12} sm={12} md={6} p={2}>
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

            <Grid container xs={12} sm={12} md={6} p={2}>
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

            <Grid container xs={12} justifyContent={'right'}>
              <Button variant='contained'>Change Password</Button>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default Profile;
