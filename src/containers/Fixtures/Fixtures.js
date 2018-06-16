import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import GroupFixtures from "../../components/GroupFixtures";
import KnockoutFixtures from "../../components/KnockoutFixtures";
import fixtureStyles from "../../css_modules/fixtures.css";
import "typeface-roboto";

const styles = {
  makeScroll: {
    maxHeight: 515,
    overflowY: "scroll",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyItems: "center",
    padding: 20,
    fontFamily: "Roboto"
  },
  fixturesContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "stretch",
    margin: 0
  }
};

class Fixtures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: {},
      teams: [],
      statiums: [],
      knockoutMatches: {},
      tabSelector: 0
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          groups: data.groups,
          teams: data.teams,
          stadiums: data.stadiums,
          knockoutMatches: data.knockout
        });
      });
  }

  handleTabChange = (event, tabSelector) => {
    this.setState({ tabSelector });
  };

  renderFixtures() {
    const {
      groups,
      teams,
      stadiums,
      tabSelector,
      knockoutMatches
    } = this.state;
    const { classes } = this.props;
    let matches = [];
    let knockouts = [];

    for (let value of Object.values(groups)) {
      let groupName = value.name;
      value.matches.map(match => (match.groupName = groupName));
      matches = matches.concat(value.matches);
    }

    for (let value of Object.values(knockoutMatches)) {
      knockouts.push(value);
    }

    let groupProps = {
      matches: matches,
      teams: teams,
      stadiums: stadiums
    };

    let knockoutProps = {
      knockouts: knockouts,
      stadiums: stadiums
    };

    return (
      <div className={classes.fixturesContainer}>
        <AppBar position="static">
          <Tabs value={tabSelector} onChange={this.handleTabChange}>
            <Tab label="GROUP STAGE" />
            <Tab label="KNOCKOUT STAGE" />
          </Tabs>
        </AppBar>
        <div>
          <div className={fixtureStyles.displayGrid}>
            {tabSelector === 0 && <GroupFixtures {...groupProps} />}
          </div>
          <div className={fixtureStyles.displayKnockout}>
            {tabSelector === 1 && <KnockoutFixtures {...knockoutProps} />}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderFixtures()}</div>;
  }
}

Fixtures.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Fixtures);
