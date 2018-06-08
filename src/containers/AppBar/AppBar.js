import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import NavListItems from "../../components/NavListItems";
import logo from "../../images/nav-logo.png";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  logo: {
    width: "20%",
    cursor: "pointer"
  },
  logoMd: {
    width: "40%",
    cursor: "pointer"
  },
  navBtns: {
    textAlign: "right",
    flex: 1
  },
  smDown: {
    width: "100%"
  },
  menuIcon: {
    width: "100%",
    textAlign: "right"
  }
});

class NavAppBar extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme, history } = this.props;

    const drawer = (
      <div>
        <List>
          <NavListItems />
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Hidden smDown>
              <img
                className={classes.logo}
                src={logo}
                alt=""
                onClick={() => history.push(`/`)}
              />
            </Hidden>
            <Hidden mdUp>
              <img
                className={classes.logoMd}
                src={logo}
                alt=""
                onClick={() => history.push(`/`)}
              />
              <div className={classes.menuIcon}>
                <MenuIcon onClick={this.handleDrawerToggle} />
              </div>
            </Hidden>
            <Hidden className={classes.smDown} smDown implementation="css">
              <div className={classes.navBtns}>
                <Button
                  color="inherit"
                  onClick={() => history.push("/fixtures")}
                >
                  Fixtures
                </Button>
                <Button color="inherit" onClick={() => history.push("/teams")}>
                  Teams
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/stadiums")}
                >
                  Stadiums
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/statistics")}
                >
                  Statistics
                </Button>
              </div>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "left" : "right"}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

NavAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles, { withTheme: true })(NavAppBar));
