import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {

};

const GroupFixtures = ({matches, teams, stadiums, classes}) => {

  matches = matches.sort((a, b) => {return new Date(a.date) - new Date(b.date)});

  return matches.map((match, i) => {

    let homeTeam = teams.filter(team => team.id === match.home_team);
    let awayTeam = teams.filter(team => team.id === match.away_team);
    let matchDate = new Date(match.date);
    let stadium = stadiums.filter(stadium => (stadium.id === match.stadium));

    return (
    <Card key={i} className={classes.matchCard}>
      <div className={classes.upperCard}>
        <Typography>{match.groupName}</Typography>
        <Typography>{"."}</Typography>
        <Typography>{stadium[0].name}</Typography>
      </div>
      <div className={classes.lowerCard}>
        <Typography>{homeTeam[0].name}</Typography>
        <Typography>{awayTeam[0].name}</Typography>
        <Typography>
        {matchDate.getDate() +
        "/" +
        (matchDate.getMonth() + 1) +
        "/" +
        matchDate.getFullYear()}
        </Typography>
        <Typography>
        {matchDate.getHours() +
        ":" +
        matchDate.getMinutes() +
        "0"}
        </Typography>
      </div>
    </Card>
    )
  });

}



  /*groupnames.map((groupname, i) => (
  <Card key={i} className={classes.card}>
  <CardContent className={classes.cardContent}>
  <Typography
  className={classes.typographyH2}
  gutterBottom
  variant="headline"
  component="h2"
  >
  {groupname.groupname}
</Typography>
<Grid container spacing={8} className={classes.matchListCard}>
{groupname.matches.map((match, key) => {
let home_team = teams.filter(team => team.id === match.home_team);
let away_team = teams.filter(team => team.id === match.away_team);
let matchDate = new Date(match.date);

return (
<Grid item xs={12} key={key} className={classes.fixtureCard}>
<Grid container spacing={8}>
<Grid item xs={8} className={classes.fixtureTeams}>
<div className={classes.team}>
<img
className={classes.flag}
src={home_team[0].flag}
alt=""
/>
<Typography className={classes.teamName}>
{home_team[0].name}
</Typography>
</div>
<div className={classes.team}>
<img
className={classes.flag}
src={away_team[0].flag}
alt=""
/>
<Typography className={classes.teamName}>
{away_team[0].name}
</Typography>
</div>
</Grid>
<Grid item xs={4} className={classes.datetime}>
<Typography>
{matchDate.getDate() +
"/" +
(matchDate.getMonth() + 1) +
"/" +
matchDate.getFullYear()}
</Typography>
<Typography>
{matchDate.getHours() +
":" +
matchDate.getMinutes() +
"0"}
</Typography>
</Grid>
</Grid>
</Grid>
);
})}
</Grid>
</CardContent>
</Card>
))
}*/

GroupFixtures.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GroupFixtures);
