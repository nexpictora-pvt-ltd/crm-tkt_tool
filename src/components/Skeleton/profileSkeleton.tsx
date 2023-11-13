/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Grid, Typography } from '@mui/material';

export const ProfileSkeleton = () => {
  return (
    <>
      <Grid container xs={12}>
        <Grid container xs={12} justifyContent={'center'} p={2}>
          <Skeleton variant="circular" width={200} height={200} />
        </Grid>

        <Grid container xs={12} justifyContent={'center'}>
          <Skeleton variant="text" sx={{ width: '200px' }} />
        </Grid>
      </Grid>

      <Grid container xs={12}>
        <Skeleton variant="rectangular" width={500} height={120} />
        <Skeleton variant="rectangular" width={500} height={120} />
        <Skeleton variant="rectangular" width={500} height={120} />
      </Grid>

      <Grid container xs={12}>
        <Grid container xs={12} p={2}>
          <Typography
            variant='h5'
            style={{ cursor: 'pointer', color: '#D36A2F' }}
          >
            Change Password?
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
