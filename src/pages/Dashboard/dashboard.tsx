// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';

import Side from '../Dashboard/side';

// import SearchBar from '../../components/Appbar/app-bar.component';
import { Grid } from '@mui/material';
// import { useAppDispatch } from '../../hooks/useAppDispatch';



export default function Dashboard() {

  // const dispatch = useAppDispatch();
  return (
    <>
      <Grid container spacing={0} >
        <Grid xs={0.5} >cbvn</Grid>
        <Grid xs={11.5} >
          {/* <SearchBar></SearchBar> */}
          <Side></Side>
        </Grid>
       
      </Grid>
    </>
  );
}