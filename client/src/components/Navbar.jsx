import React, { Component, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import history from "../routes/history";
import * as members from '../redux/members/actions/members';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { logout } from "../actions/system";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import { ProfileIcon, RegisterIcon, MemberIcon, SettingIcon, AccountIcon, HomeIcon } from '../components/Icons'
import Profile from "./Profile";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));


const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const user = useSelector(state =>

    (
      {
        authenticated: state.user.auth,
        userId: state.user.profile.id,
        profile: state.user.profile,
        approvalType: state.approval.approvalType
      }
    )
  );

  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  const changeRoute = (route) => {

    if (route === "users") {
      dispatch(members.getMembers(user.profile.userId));
    }

    if (route == "logout") {
      dispatch(logout());
      return
    }

    history.push(route);
  }

  return (
    <div class="navbar-fixed" style={{ marginBottom: "4rem" }}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          style={{ display: "flex", backgroundColor: "#26a69a" }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>

            <span> Logo </span>
            {
              !user.authenticated ?
                <Button onClick={() => changeRoute("login")}
                  style={{ marginLeft: "auto" }}
                  color="inherit">Login</Button>
                : null}

            {
              user.authenticated ?
                < Button onClick={() => changeRoute("logout")}
                  color="inherit"
                  style={{ marginLeft: "auto" }}
                >
                  Logout
                  </Button>
                : null}

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          {
            user.authenticated && user.approvalType == "ACCESS" ?
              < ListItem onClick={() => changeRoute("profile")} button key={"profile"} >
                <ProfileIcon />
                <ListItemText primary={"Profile"} />
              </ListItem>
              : null}
          <Divider />
          {
            user.authenticated && user.approvalType == "ACCESS" ?
              < ListItem onClick={() => changeRoute("users")} button key={"users"} >
                <MemberIcon />
                <ListItemText primary={"Member"} />
              </ListItem>
              : null}
          <Divider />
          {
            user.authenticated ?
              < ListItem onClick={() => changeRoute("setting")} button key={"setting"} >
                <SettingIcon />
                <ListItemText primary={"Setting"} />
              </ListItem>
              : null}
          <Divider />
          {
            !user.authenticated ?
              < ListItem onClick={() => changeRoute("register")} button key={"register"} >
                <RegisterIcon />
                <ListItemText primary={"Register"} />
              </ListItem>
              : null}
          <Divider />
          {
            !user.authenticated ?
              < ListItem onClick={() => changeRoute("")} button key={"home"} >
                <HomeIcon color="action" />
                <ListItemText primary={"Home"} />
              </ListItem>
              : null}
          <Divider />
          {
            user.authenticated ?
              < ListItem onClick={() => changeRoute("account")} button key={"account"} >
                <AccountIcon />
                <ListItemText primary={"Account"} />
              </ListItem>
              : null}
          <Divider />
        </Drawer>
      </div>
    </div >
  );
}



export default Navbar;

