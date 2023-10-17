import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.scss";
import SearchBar from "../../components/Appbar/app-bar.component";

const Navigation = () => {
  return (
    <Fragment>
      <Box>
        <Container maxWidth={false} disableGutters>
          <Grid container direction="column">
            <SearchBar></SearchBar>
            <Grid item container direction="row">
              <Grid item xs={12} className="main-content-grid">
                <Outlet />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Navigation;
