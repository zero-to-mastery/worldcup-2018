import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import indexStyle from "../../index.css";
// const bgImage = ( imgName) => `linear-gradient( rgba(255,255,255,0.6),rgba(0,0,0,0.6)),url(https://github.com/ursrudra/FifaTeamImages/blob/master/img/${imgName}.jpg)`;
const colors = {
  Russia: "rgba(34,29,110,0.5)"
}
const bgImage = ( imgName) => `linear-gradient( ${colors.Russia},rgba(0,0,0,0.6)),url(https://robohash.org/${imgName}?size=200x200)`;

const styles = {
  card: {
    width: 300,
    display: "inline-block",
    margin: 30,
    textAlign: "center",
    position:"relative",
    top:50,
    filter: "blur(.5px)",
    backgroundSize: "cover",
    backgroundPositon:"100% 100%",
    borderRadius: 10,
    boxshadow: "1px 1px 25px 1px #999"


    },
  media: {
    height: 100,
    width:100,
    borderRadius:50,
    position: "relative",
    top: -50,
    left: 100,
    opacity:1
    // paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    padding: 20
  },
  typographyH2: {
    fontSize: "2em",
    fontWeight: 900,
    color:"#FFF",
    position:"relative",
    top:-40
  }
};

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ teams: data.teams });
      });
  }

  renderTeams() {

    const { classes } = this.props;
    const { teams } = this.state;
    return teams.map((team, i) => (
      <div id="card" key={i} className={classes.card}  style={{"background": bgImage(i)}}>
        <CardMedia className={classes.media} image={team.flag} />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.typographyH2}
            gutterBottom
            variant="headline"
            component="h2"
          >
            {team.name}
          </Typography>
        </CardContent>
      </div>

    ));
  }

  render() {
    return (
      <div className={indexStyle.scroll_wrapper}>{this.renderTeams()}</div>
    );
  }
}

Teams.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Teams);
