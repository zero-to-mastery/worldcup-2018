import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 300,
    display: "inline-block",
    margin: 40,
    textAlign: "center"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    padding: 20
  },
  typographyH2: {
    fontSize: "2em",
    fontWeight: 900
  }
};

class Teams extends React.Component {

  state = {
    teams: []
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json')
      .then(res => res.json())
      .then(data => {
        this.setState({teams: data.teams})
      })
  }

  render() {
    const { classes } = this.props;
    const { teams } = this.state;
    return (
      teams.map((team, i) => (
        <Card id='card' key={i} className={classes.card}>
          <CardMedia 
            className={classes.media}
            image={team.flag}
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.typographyH2} gutterBottom variant="headline" component="h2">
              {team.name}
            </Typography>
          </CardContent>
        </Card>
      ))
    );
  }
}
  
Teams.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Teams);
