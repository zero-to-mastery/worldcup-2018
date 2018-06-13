import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const styles = {
  round: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    marginBottom: "25px"
  },
  roundTitle: {
    color: "white",
    fontSize: "2em",
    fontWeight: "bold",
    fontFamily: "Roboto",
    backgroundColor: "silver",
    width: "70%",
    alignSelf: "center"
  },
  roundMatches: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
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
  }
};

const KnockoutFixtures = ({ knockouts, classes, stadiums }) => {
  return knockouts.map((knockoutRound, i) => (
    <div className={classes.round} key={i}>
      <Typography className={classes.roundTitle}>
        {knockoutRound.name}
      </Typography>
      <div className={classes.roundMatches}>
        {knockoutRound.matches.map((match, j) => {
          //let homeTeam = teams.filter(team => team.id === match.home_team);
          //let awayTeam = teams.filter(team => team.id === match.away_team);
          let matchDate = new Date(match.date);
          let stadium = stadiums.filter(
            stadium => stadium.id === match.stadium
          );
          return (
            <Card key={j} className={classes.matchCard}>
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
                  {stadium[0].name}
                </Typography>
              </div>
              <div className={classes.lowerCard}>
                <div className={classes.fixtureTeams}>
                  <div className={classes.team}>
                    <img
                      className={classes.flag}
                      src={
                        "https://vignette.wikia.nocookie.net/cybernations/images/d/d0/Placeholder_Flag.svg/revision/latest?cb=20100430021730"
                      }
                      alt=""
                    />
                    <Typography className={classes.teamName}>
                      {"TBD"}
                    </Typography>
                    <Typography>{"-"}</Typography>
                  </div>
                  <div className={classes.team}>
                    <img
                      className={classes.flag}
                      src={
                        "https://vignette.wikia.nocookie.net/cybernations/images/d/d0/Placeholder_Flag.svg/revision/latest?cb=20100430021730"
                      }
                      alt=""
                    />
                    <Typography className={classes.teamName}>
                      {"TBD"}
                    </Typography>
                    <Typography>{"-"}</Typography>
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
    </div>
  ));
};

KnockoutFixtures.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(KnockoutFixtures);
