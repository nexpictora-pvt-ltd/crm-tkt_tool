import { Grid, InputBase, alpha, styled } from "@mui/material";
import React, { Fragment } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import "./app-bar.scss";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),


    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30vw",
      "&:focus": {
        width: "40vw",
      },
    },
  },
}));

export default function Header() {
  return (
    <Fragment>
      <Grid
        container
        xs={12}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"start"}
      >
        <Grid
          container item
          xs={9}
          sm={7}
          alignItems={"center"}
          justifyContent={"start"}
        >
          <Search
            style={{ display: "flex", alignItems: "center", height: "4vh" }}
          >
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIcon
              style={{
                alignSelf: "center",
                marginLeft: "auto",
                marginRight: "1vh",
              }}
            />
          </Search>
        </Grid>
        <Grid container item xs={3} sm={5} justifyContent={"flex-end"}>
          <Grid
            xs={6}
            display={{ xs: "none", sm: "block" }}
            justifyContent={"flex-end"}
          >
            <NotificationsIcon />
            <AccountCircle sx={{ marginLeft: "5vh" }} />
          </Grid>
          <Grid
            justifyContent={"flex-end"}
            display={{ xs: "block", sm: "none" }}
          >
            <MoreIcon></MoreIcon>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
