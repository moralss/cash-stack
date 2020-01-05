import React, { Component, useEffect } from "react";
import { useSelector, connect, useDispatch } from 'react-redux';
import history from "../routes/history";
import * as members from '../redux/members/actions/members';
import Img from "../assets/cash-stack.svg";
import Logo from "../assets/cash-stack.svg";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { logout } from "../actions/system";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import SvgIcon from '@material-ui/core/SvgIcon';


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



function HomeIcon(props) {
  return (
    <SvgIcon style={{ margin: "0rem 1.5rem" }} {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

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
    <div class="navbar-fixed">
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
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
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
                <ListItemIcon />
                <ListItemText primary={"Profile"} />
              </ListItem>
              : null}
          <Divider />
          {
            user.authenticated && user.approvalType == "ACCESS" ?
              < ListItem onClick={() => changeRoute("users")} button key={"users"} >
                <ListItemIcon />
                <ListItemText primary={"Member"} />
              </ListItem>
              : null}
          <Divider />
          {
            user.authenticated ?
              < ListItem onClick={() => changeRoute("setting")} button key={"setting"} >
                <ListItemIcon />
                <ListItemText primary={"Setting"} />
              </ListItem>
              : null}
          <Divider />
          {
            !user.authenticated ?
              < ListItem onClick={() => changeRoute("register")} button key={"register"} >
                <ListItemIcon />
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

        </Drawer>
      </div>

    </div >
  );
}



export default Navbar;

