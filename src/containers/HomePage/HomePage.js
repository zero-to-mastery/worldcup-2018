import _ from "lodash";
import React from "react";
import { withRouter } from "react-router";
import styles from "./homepage.css";

class HomePage extends React.Component {
  state = {
    groups: {},
    teams: [],
    knockout: {}
  };

  /**
   * @param  {object} groups
   * @returns {object} match details
   */
  getUpcomingMatchDetails(groups) {
    let groupnames = [];
    let matchDates = [];
    let upcomingMatchDate = "";
    let upcomingMatchGroup = {};
    let knockoutMatches = [];

    for (let value of Object.values(groups)) {
      groupnames.push({ groupname: value.name, matches: value.matches });
    }

    // get all groups match dates
    if (groupnames.length) {
      groupnames.map(group => {
        return group.matches.map(match => {
          return matchDates.push(match.date);
        });
      });
    }

    // get knockout match dates
    if (!_.isEmpty(this.state.knockout)) {
      for (let value of Object.values(this.state.knockout)) {
        knockoutMatches.push(value.matches);
      }
      knockoutMatches.map(knockoutMatch => {
        return knockoutMatch.map(match => {
          return matchDates.push(match.date);
        });
      });
    }

    // get upcoming match date
    if (matchDates.length) {
      matchDates.sort(function(a, b) {
        return new Date(a) - new Date(b);
      });
      matchDates.some(date => {
        if (new Date() < new Date(date)) {
          upcomingMatchDate = date;
          return true;
        }
        return false;
      });
    }

    // get upcoming match group
    if (groupnames.length) {
      groupnames.map(group => {
        return group.matches.map(match => {
          if (match.date === upcomingMatchDate) {
            upcomingMatchGroup = match;
          }
          return upcomingMatchGroup;
        });
      });
    }
    return _.isEmpty(upcomingMatchGroup) ? null : upcomingMatchGroup;
  }
  /**
   * @param  {string} type 'home_team' or 'away_team'
   * @param  {object} matchDetails
   * @returns {object} team details
   */

  getTeam(type, matchDetails) {
    let { teams, knockout } = this.state;
    let myTeam;

    if (!_.isEmpty(matchDetails) && matchDetails.type !== "winner") {
      myTeam = teams.filter(team => team.id === matchDetails[type]);
    } else {
      _.values(knockout).some(knockout => {
        if (knockout.name === "Semi-finals") {
          type === "home_team"
            ? (myTeam = knockout.matches[0])
            : (myTeam = knockout.matches[1]);
        }
        return myTeam;
      });
      myTeam = teams.filter(team => team.id === myTeam.winner);
    }
    return myTeam;
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
          knockout: data.knockout
        });
      });
  }
  render() {
    const { groups, knockout } = this.state;
    let matchDetails = this.getUpcomingMatchDetails(groups);
    let nextMatchDate = "";

    if (!_.isEmpty(matchDetails)) {
      nextMatchDate = new Date(matchDetails.date).toString();
    } else {
      _.values(knockout).map(knockout => {
        if (knockout.name === "Final") matchDetails = knockout.matches[0];
        return matchDetails;
      });
    }

    const home_team = this.getTeam("home_team", matchDetails);
    const away_team = this.getTeam("away_team", matchDetails);

    return (
      <div>
        {!_.isEmpty(matchDetails) && matchDetails.type !== "winner" ? (
          <div className={styles.match_details}>
            <div className={styles.next_match}>
              <span> Next Match - {nextMatchDate} </span>
            </div>
            <div className={styles.team_details}>
              <div className={styles.homepage_flag}>
                <img
                  className={styles.flag_img_sm}
                  src={home_team[0].flag}
                  alt=""
                />
              </div>
              <div className={styles.title}>
                <span>{home_team[0].name} </span>
              </div>
              <div className={styles.vs}>
                <span> VS </span>
              </div>
              <div className={styles.title}>
                <span> {away_team[0].name} </span>
              </div>
              <div className={styles.homepage_flag}>
                <img
                  className={styles.flag_img_sm}
                  src={away_team[0].flag}
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : !_.isEmpty(matchDetails) ? (
          <div className={styles.match_details}>
            <div className={styles.next_match}>
              <span> FIFA World Cup 2018 Winner - {matchDetails.winner} </span>
            </div>
            <div className={styles.team_details}>
              <div className={styles.homepage_flag}>
                <img
                  className={styles.flag_img_sm}
                  src={home_team[0].flag}
                  alt=""
                />
              </div>
              <div className={styles.title}>
                <span>{home_team[0].name} </span>
              </div>
              <div className={styles.vs}>
                <span> VS </span>
              </div>
              <div className={styles.title}>
                <span> {away_team[0].name} </span>
              </div>
              <div className={styles.homepage_flag}>
                <img
                  className={styles.flag_img_sm}
                  src={away_team[0].flag}
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(HomePage);
