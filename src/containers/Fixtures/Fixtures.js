import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: 300,
    display: "inline-block",
    margin: 40,
    textAlign: "center"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    padding: 20
  },
  typographyH2: {
    fontSize: "2em",
    fontWeight: 900
  },
  typographyH5: {
    fontSize: ".5em",
    fontWeight: 500
  }, fixtureCard: {
    border: "1px solid grey",
    margin: 5
  }, team: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center"
  },flag: {
    height:15,
    width:30,
    border: "1px solid black",
    marginRight: 10
  }, datetime: {
    borderLeft: "1px solid grey"
  }
};

class Fixtures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: {},
      teams: []
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

  renderFixtures() {
    const { groups, teams } = this.state;
    const { classes } = this.props;
    const groupnames = [];

    for (let value of Object.values(groups)) {
      groupnames.push({ groupname: value.name, matches: value.matches });
    }

    return groupnames.map((groupname, i) => (
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
                  /*<p key={key} id={key}>
                  {home_team[0].name} - {away_team[0].name}
                </p>*/
                <Grid item xs={12} key={key} className={classes.fixtureCard}>
                  <Grid container spacing={8}>
                    <Grid item xs={8} className={classes.fixtureTeams}>
                      <div className={classes.team}>
                        <img className={classes.flag} src={home_team[0].flag} alt=""/>
                        <Typography className={classes.teamName}>
                          {home_team[0].name}
                        </Typography>
                      </div>
                      <div className={classes.team}>
                        <img className={classes.flag} src={away_team[0].flag} alt=""/>
                        <Typography className={classes.teamName}>
                          {away_team[0].name}
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item xs={4} className={classes.datetime}>
                      <Typography>
                        {matchDate.getDate() + "/" +(matchDate.getMonth()+1) + "/" + matchDate.getFullYear()}
                      </Typography>
                      <Typography>
                        {matchDate.getHours() + ":" +matchDate.getMinutes()+"0"}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>
    ));
  }

  render() {
    return <div className="scroll_wrapper">{this.renderFixtures()}</div>;
  }
}

Fixtures.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Fixtures);
