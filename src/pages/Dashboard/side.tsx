// import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
// import Paper from '@mui/material/Paper';
import { LineChart } from "@mui/x-charts/LineChart";
import Card1 from "../../components/Cards/dashboard.card1";
import Card2 from "../../components/Cards/dashboard.card2";
import Pie from "./pie";
// import { lightBlue } from '@mui/material/colors';
import { Grid, useTheme } from "@mui/material";
// import DrawerRight from './right-nav';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];
export default function Side() {

  const theme = useTheme();
  const backgroundColor = theme.palette.mode === 'dark' ? '#2b2b2b' : '#EFEFEF';
  
  return (
    <>
      <Grid container>
        <Grid
          xs={12}
          container
          spacing={0}
          direction={{ xs: "row", sm: "row", md: "row" }}
        >
          <Grid item xs={12} sm={12} md={4} padding={1}>
            <Card1></Card1>
          </Grid>
          <Grid item xs={12} sm={12} md={4} padding={1}>
            <Card2></Card2>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={4}
            padding={1}
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "row", md: "column" },
            }}
          >
            <Grid xs={6} sm={6} md={12} padding={1}>
              <Box
                sx={{
                  height: "15vh",
                  backgroundColor,
                  borderRadius: "15px",
                }}
              >
                {" "}
              </Box>
            </Grid>
            <Grid xs={6} sm={6} md={12} padding={1}>
              <Box
                sx={{
                  height: "15vh",
                  backgroundColor,
                  borderRadius: "15px",
                }}
              >
                {" "}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid xs={12} sm={12} md={8} padding={1}>
            <Box
              sx={{
                height: "430px",
                backgroundColor,
                borderRadius: "15px",
              }}
            >
              <LineChart
                // width={600}
                // height={500}
                series={[
                  {
                    data: uData,
                    label: "uv",
                    area: true,
                    stack: "total",
                    color: "#A4BFF4",
                  },
                  {
                    data: pData,
                    label: "pv",
                    area: true,
                    stack: "total",
                    color: "#D36A2F",
                  },
                  {
                    data: amtData,
                    label: "amt",
                    area: true,
                    stack: "total",
                    color: "rgba(65,202,210,1.00)",
                  },
                ]}
                xAxis={[{ scaleType: "point", data: xLabels }]}
                sx={{
                  ".MuiLineElement-root, .MuiMarkElement-root": {
                    display: "none",
                    height: "100%",
                    width: "100%",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={4} padding={1}>
            <Pie></Pie>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

// #CBEEF0=lightBlue

{
  /* <Grid container spacing={2}>
      
      
      <Grid xs={12} container spacing={0} sx={{ bgcolor:"#CBEEF0",borderRadius:"15px" }}  direction={{sm:'column' ,md:'row'}}>
            <Grid xs={12} sm={12} md={8} container spacing={0}>
            <Grid  xs={12} sm={12} container direction={'row'} >
            <Grid item xs={12} sm={6}> <Card1></Card1></Grid>
            <Grid item xs={12}  sm={6}> <Card2></Card2></Grid>
            </Grid>
            <Grid xs={12}><Box sx={{height:'430px',backgroundColor:"#EFEFEF",borderRadius:"15px"}}>
            <LineChart
        // width={600}
        // height={500}
        series={[
          { data: uData, label: 'uv', area: true, stack: 'total' ,color:"#A4BFF4"},
          { data: pData, label: 'pv', area: true, stack: 'total',color:"#D36A2F" },
          {
            data: amtData,
            label: 'amt',
            area: true,
            stack: 'total',color:"rgba(65,202,210,1.00)"
          },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        sx={{
          '.MuiLineElement-root, .MuiMarkElement-root': {
            display: 'none',height:"100%",width:'100%'
          },
        }}
      />
              
              </Box></Grid></Grid>
  
  
          <Grid xs={0} sm={12} md={4} container spacing={0} sx={{bgcolor:"#CBEEF0",borderRadius:"15px"}} >
              <Grid container xs={12} sm={12} md={12}>
            <Grid xs={12}  sm={6} md={12}><Box sx={{height:'15vh',backgroundColor:"#A4BFF4",borderRadius:"15px"}}> </Box></Grid>
            <Grid xs={12} sm={6} md={12}><Box sx={{height:'15vh',backgroundColor:"#A4BFF4",borderRadius:"15px"}}> </Box></Grid>
            </Grid>
            <Grid xs={12}><Pie></Pie></Grid>
            {/* <DrawerRight></DrawerRight>cd */
}
//       </Grid>

// </Grid>

//   </Grid> */}
