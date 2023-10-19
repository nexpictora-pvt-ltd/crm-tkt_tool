/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import SupportAgentTwoToneIcon from "@mui/icons-material/SupportAgentTwoTone";
import DataUsageTwoToneIcon from "@mui/icons-material/DataUsageTwoTone";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import Header from "../Appbar/app-bar";
import ROUTES from "../../routes";
import { Fragment, useEffect, useState } from "react";
import { Grid, MenuItem, MenuList } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import "./LeftNav.scss";

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "#082C5E",
});
const iconStyles = {
  iconColor: {
    fill: "#082C5E", // Change this to the color you desire
  },
};

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("md")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  [theme.breakpoints.down("md")]: {
    width: `0`,
  },
  background: "#082C5E",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  color: "yellow",
  alignItems: "center",
  justifyContent: "flex-end",
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,

    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "Background",
  }),

  boxShadow: "3.5px 3.5px 3.5px rgba(0, 0, 0, 0.3)",
  background: "#082C5E",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function NavBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const listIcons1 = [
    {
      label: "Dashboard",
      icon: DashboardTwoToneIcon,
      path: "/secure/dashboard",
    },
    {
      label: "Orders",
      icon: LocalShippingTwoToneIcon,
      path: ROUTES.ORDERS,
    },
    {
      label: "Data",
      icon: DataUsageTwoToneIcon,
      path: ROUTES.DATA,
    },
    {
      label: "Customers",
      icon: SupportAgentTwoToneIcon,
      path: ROUTES.CUSTOMER,
    },
    {
      label: "Preview",
      icon: RemoveRedEyeIcon,
      path: ROUTES.PREVIEW,
    },
  ];
  const listIcons2 = [
    {
      label: "Profile",
      icon: PermIdentityTwoToneIcon,
      path: ROUTES.PROFILE,
    },
    {
      label: "Settings",
      icon: SettingsIcon,
      path: ROUTES.SETTINGS,
    },
    {
      label: "Logout",
      icon: LogoutIcon,
      path: ROUTES.SIGN_IN,
    },
  ];

  const navigate = useNavigate();

  return (
    <Fragment>
      <Grid container>
        <CssBaseline />
        <AppBar open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Header />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List className="menu-items">
  {listIcons1.map((item) => (
    <ListItem key={item.label} disablePadding sx={{ display: "block" }}>
      <ListItemButton onClick={() => navigate(item.path)}>
        <ListItemIcon>
          {React.createElement(item.icon)}
        </ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

<List className="menu-items2">
  {listIcons2.map((item) => (
    <ListItem key={item.label} disablePadding sx={{ display: "block" }}>
      <ListItemButton onClick={() => navigate(item.path)}>
        <ListItemIcon>
          {React.createElement(item.icon)}
        </ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

        </Drawer>
      </Grid>
    </Fragment>
  );
}
