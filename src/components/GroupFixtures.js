import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import fixtureStyles from "../css_modules/fixtures.css";
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
  matchCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    width: 315,
    margin: 5,
    padding: 3,
    borderRadius: 5,
    backgroundColor: "#FAFAFA",
    border: "5px solid silver"
  },
  upperCard: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    color: "#7B7B7B"
  },
  upperCardPadding: {
    paddingRight: 3,
    color: "#7B7B7B",
    fontWeight: "bold"
  },
  lowerCard: {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "4fr 1fr"
  },
  fixtureTeams: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr"
  },
  team: {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "2fr 4fr 1fr"
  },
  flag: {
    height: 15,
    width: 30,
    border: "2px solid silver",
    borderRadius: 10,
    marginRight: 10
  },
  teamName: {
    justifySelf: "start"
  },
  datetime: {
    borderLeft: "1px solid silver",
    color: "silver",
    padding: 5
  },
  textStyle: {
    fontSize: "1.25em",
    color: "white"
  }
};

const GroupFixtures = ({ groupMatches, teams, stadiums, checkedFixtures, checkedResults, onMatchCategoryChange, classes }) => {
  groupMatches = groupMatches.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  return (<div>
    <span className={classes.textStyle}>Show: </span>
    <label className={classes.textStyle}>
    <Checkbox
        checked={checkedFixtures}
        onChange={onMatchCategoryChange('checkedFixtures')}
        value="fixtures"
        color="primary"
   />Fixtures</label>
   <label className={classes.textStyle}><Checkbox
       checked={checkedResults}
       onChange={onMatchCategoryChange('checkedResults')}
       value="results"
       color="primary"
  />Results</label>
   <div className={fixtureStyles.displayGrid}>
  { groupMatches.filter(match => {
      if(checkedFixtures && checkedResults){
        return match;
      }else if(checkedResults){
        return new Date(match.date) <= new Date();
      }else if(checkedFixtures){
        return new Date(match.date) > new Date();
      }
      return [];
  }).map((match, i) => {
    let homeTeam = teams.filter(team => team.id === match.home_team);
    let awayTeam = teams.filter(team => team.id === match.away_team);
    let matchDate = new Date(match.date);
    let stadium = stadiums.filter(stadium => stadium.id === match.stadium);

    return (
      <Card key={i} className={classes.matchCard}>
        <div className={classes.upperCard}>
          <Typography className={classes.upperCardPadding}>
            {"Matchday " + match.matchday}
          </Typography>
          <Typography
            style={{ fontWeight: "bold" }}
            className={classes.upperCardPadding}
          >
            {"."}
          </Typography>
          <Typography className={classes.upperCardPadding}>
            {match.groupName}
          </Typography>
          <Typography
            style={{ fontWeight: "bold" }}
            className={classes.upperCardPadding}
          >
            {"."}
          </Typography>
          <Typography className={classes.upperCardPadding}>
            {stadium[0].name}
          </Typography>
        </div>
        <div className={classes.lowerCard}>
          <div className={classes.fixtureTeams}>
            <div className={classes.team}>
              <img className={classes.flag} src={homeTeam[0].flag} alt="" />
              <Typography className={classes.teamName}>
                {homeTeam[0].name}
              </Typography>
              <Typography>
                {match.home_result >= 0 ? match.home_result : "-"}
              </Typography>
            </div>
            <div className={classes.team}>
              <img className={classes.flag} src={awayTeam[0].flag} alt="" />
              <Typography className={classes.teamName}>
                {awayTeam[0].name}
              </Typography>
              <Typography>
                {match.away_result >= 0 ? match.away_result : "-"}
              </Typography>
            </div>
          </div>
          <div className={classes.datetime}>
            <Typography>
              {matchDate.getDate() +
                "/" +
                (matchDate.getMonth() + 1) +
                "/" +
                matchDate.getFullYear()}
            </Typography>
            <Typography>
              {matchDate.getHours() + ":" + matchDate.getMinutes() + "0"}
            </Typography>
          </div>
        </div>
      </Card>
    );
  })}
  </div>
  </div>)
};

GroupFixtures.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GroupFixtures);
