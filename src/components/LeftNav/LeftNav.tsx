/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, useEffect, useState, useRef } from "react";
import {
  styled,
  useTheme,
  Theme,
  CSSObject,
} from "@mui/material/styles";
// import LogoName from '../../assets/NEXnex.svg';
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
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
import Header from "../Appbar/app-bar";
import ROUTES from "../../routes";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './LeftNav.scss';
import { removeCookies } from '../../../scripts/removeCookie'; 

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
  const drawerRef = useRef(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleLoginClick = () => {
    removeCookies();
    navigate(ROUTES.SIGN_IN)
  
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetNode = event.target as Node;
      if (drawerRef.current && targetNode && !drawerRef.current.contains(targetNode)) {
        setOpen(false);
      }
    };
     
    

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <Drawer ref={drawerRef} variant="permanent" open={open}>
          <DrawerHeader>
            {/* <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton> */}
            {/* <img src={LogoName} className="logo-img"></img> */}
          </DrawerHeader>
          {/* <Divider /> */}
          <List className="menu-items">
            {listIcons1.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ display: "block" }}>
                <ListItemButton onClick={() => navigate(item.path)}>
                  <ListItemIcon>
                    {React.createElement(item.icon)}
                  </ListItemIcon>
                  <ListItemText primary={<Typography variant="body2">{item.label}</Typography>} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <List className="menu-items2">
            {listIcons2.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ display: "block" }}>
                <ListItemButton  onClick={item.label === 'Logout' ? handleLoginClick : () => navigate(item.path)}>
                  <ListItemIcon >
                    {React.createElement(item.icon)}
                  </ListItemIcon >
                  <ListItemText primary={
                    item.label === "Logout" ? (
                      <Typography variant="h4" color="error">{item.label}</Typography>
                    ) : (
                      <Typography variant="body2" color="textPrimary">{item.label}</Typography>
                    )
                  } />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Grid>

    </Fragment>
  );
}
