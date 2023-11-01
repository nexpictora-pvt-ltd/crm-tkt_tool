import { Box, Container, Grid, Hidden } from "@mui/material";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SigninBG from "../../assets/BGSignin.png";

import "./authLayout.scss";

const AuthLayout = () => {
  return (
    <Fragment>
      <Box>
        <Container maxWidth={false} disableGutters>
          <Grid container direction="column">
            <Grid item spacing={1} container direction="row" sx={{ overflow: "hidden" }}>
              <Hidden lgDown>
                <Grid item xs={12} sm={0} lg={5} className="image-grid" justifyContent={'start'}>
                  <img src={SigninBG} alt="Background" className="SigninBgimg" />
                </Grid>
              </Hidden>
              <Grid item xs={12} lg={7} className="auth-component-grid">
                <Outlet />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default AuthLayout;

