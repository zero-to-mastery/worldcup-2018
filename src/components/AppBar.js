import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../images/nav-logo.png'

const styles = {
  root: {
    flexGrow: 1,
  },
  logo: {
    width: '20%',
  },
  navBtns: {
    textAlign: 'right',
    flex: 1
  }
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <img className={classes.logo} src={logo} alt='' />
          <div className={classes.navBtns}>
            <Button color="inherit">Fixtures</Button>
            <Button color="inherit">Results</Button>
            <Button color="inherit">Standings</Button>
            <Button color="inherit">Teams</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
