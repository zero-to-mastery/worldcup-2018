import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
          {groupname.matches.map((match, key) => {
            let home_team = teams.filter(team => team.id === match.home_team);
            let away_team = teams.filter(team => team.id === match.away_team);

            return (
              <p key={key} id={key}>
                {home_team[0].name} - {away_team[0].name}
              </p>
            );
          })}
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
