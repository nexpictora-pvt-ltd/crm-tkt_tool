import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.scss";
import NavBar from "../../components/LeftNav/LeftNav";


const Navigation = () => {
  return (
    <Fragment>
      <Box>
        <Container maxWidth={false} disableGutters>

            <Grid item container direction="row" >
            <Grid item xs={0} sm={0.5} >
                  <NavBar />
                </Grid>
              <Grid item xs={12} sm={11.5} className="main-content-grid">
                <Outlet />
              </Grid>
            </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Navigation;
