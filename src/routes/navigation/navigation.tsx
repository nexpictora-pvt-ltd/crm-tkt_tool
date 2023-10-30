
import Grid from "@mui/material/Grid";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "./navigation.scss";
import NavBar from "../../components/LeftNav/LeftNav";

const Navigation = () => {
  return (
    <Fragment>

          <Grid item container direction="row"  >
            <Grid item container>
              <NavBar />
            </Grid>
            <Grid item container xs={12}  >

            <Grid  xs={12} className="main-content-grid " >
            <Outlet />

            </Grid>

            </Grid>
          </Grid>

    </Fragment>
  );
};

export default Navigation;
