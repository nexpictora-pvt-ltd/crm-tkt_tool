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
        <Grid xs={0.5} ></Grid>
        <Grid xs={11.5} >
          {/* <SearchBar></SearchBar> */}
          <Side></Side>
        </Grid>
       
      </Grid>
    </>
  );
}


//sales(number of oder)-month-first block
//profit- month -second block
//sales-profit-number of customers -month:line chart
// percentage of top 3 services for the month(max numbers of customers are for which services)-pie