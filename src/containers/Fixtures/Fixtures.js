import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setData } from "../../actions";
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

const mapStateToProps = ({ requestData }) => {
  const {
    groups,
    teams,
    stadiums,
    knockout: knockoutMatches
  } = requestData.data;
  return { groups, teams, stadiums, knockoutMatches };
};

const mapDispatchToProps = dispatch => ({
  onRequestData: () => dispatch(setData())
});

class Fixtures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelector: 0,
      checkedResults: true,
      checkedFixtures: true,
      groupMatches: []
    };
  }

  componentDidMount() {
    this.props.onRequestData();
  }

  onMatchCategoryChange = name => event => {
    this.setState({[name]: event.target.checked});
  }

  handleTabChange = (event, tabSelector) => {
    this.setState({ tabSelector });
  };

  renderFixtures() {
    const { groups, teams, stadiums, knockoutMatches, classes } = this.props;
    const { tabSelector, checkedResults, checkedFixtures } = this.state;
    const {onMatchCategoryChange} = this;

    let groupMatches = [];
    let knockouts = [];

    for (let value of Object.values(groups)) {
      let groupName = value.name;
      value.matches.map(match => (match.groupName = groupName));
      groupMatches = groupMatches.concat(value.matches);
    }

    for (let value of Object.values(knockoutMatches)) {
      knockouts.push(value);
    }

    let groupProps = { groupMatches, teams, stadiums, checkedResults, checkedFixtures, onMatchCategoryChange };
    let knockoutProps = { knockouts, stadiums };

    return (
      <div className={classes.fixturesContainer}>
        <AppBar position="static">
          <Tabs value={tabSelector} onChange={this.handleTabChange}>
            <Tab label="GROUP STAGE" />
            <Tab label="KNOCKOUT STAGE" />
          </Tabs>
        </AppBar>
        <div>
          <div>
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

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Fixtures)
);
