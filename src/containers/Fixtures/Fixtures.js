import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GroupFixtures from "../../components/GroupFixtures";
import KnockoutFixtures from "../../components/KnockoutFixtures";

const styles = {
  makeScroll: {
    maxHeight: 515,
    overflowY: 'scroll'
  }, fixturesContainer: {
    display: "flex",
    flexDirection:  "column",
    alignItems: "stretch",
    justifyContent: "stretch",
    margin: 0
  }
}

class Fixtures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: {},
      teams: [],
      statiums: [],
      tabSelector: 0
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"
    )
    .then(res => res.json())
    .then(data => {
      this.setState({ groups: data.groups, teams: data.teams });
    });
  }

  handleTabChange = (event, tabSelector) => {
    this.setState({ tabSelector });
  }

  renderFixtures() {
    const { groups, teams, tabSelector } = this.state;
    const { classes } = this.props;
    const groupnames = [];

    for (let value of Object.values(groups)) {
      groupnames.push({ groupname: value.name, matches: value.matches });
    }

    let props = {
      groupnames:groupnames,
      teams:teams
    }

    return (
      <div className={classes.fixturesContainer}>
        <AppBar  position="static">
          <Tabs value={tabSelector} onChange={this.handleTabChange}>
            <Tab label="GROUP STAGE" />
            <Tab label="KNOCKOUT STAGE" />
          </Tabs>
        </AppBar>
        <div className={classes.makeScroll}>
          {tabSelector === 0 && <GroupFixtures {...props} />}
          {tabSelector === 1 && <KnockoutFixtures />}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>{this.renderFixtures()}</div>
    );
  }
}

Fixtures.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Fixtures);
