import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import OrderTable from '../../components/Table/order.table'

const Order = () => {
  return (
    <>
    <Grid container xs={12} sm={12}>
    <Grid xs={12} sm={6}  padding={4} >
      <Paper sx={{backgroundColor:'#CBEEF0', height:"20vh" , borderRadius:'30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
      <Typography variant='h5' fontWeight={'600'}>Total Orders: 100</Typography>
      </Paper>
      </Grid>

      <Grid xs={12}  sm={6} padding={4}>
      <Paper sx={{backgroundColor:'#A4BFF4', height:"20vh" , borderRadius:'30px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Typography variant='h5' fontWeight={'600'}>Total amount: 6000</Typography>
      </Paper>
      </Grid>
      


      </Grid>
      <Grid xs={12} >
      <OrderTable></OrderTable>
      </Grid>
    </>
  )
}

export default Order
