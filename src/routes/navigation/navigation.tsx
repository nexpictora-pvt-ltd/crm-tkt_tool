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
          <Grid item container direction="row">
            <Grid item xs={0} sm={0} md={0.7} lg={0.5}>
              <NavBar />
            </Grid>
            <Grid item sm={12} md={11.3} lg={11.5} direction="column">
            <Grid item  sm={2}  className="empty-grid" style={{minHeight:'60px'}}> dfsdf</Grid>
            <Grid item xs={10} className="main-content-grid " >
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
