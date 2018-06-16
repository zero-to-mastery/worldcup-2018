import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import indexStyle from "../../index.css";
import { teamsData } from "./TeamsData.js";
const bgImage = ( colorName, imgName) => `linear-gradient( ${colorName},rgba(0,0,0,0.6)),url(${imgName}) 100% 100% no-repeat`;

const styles = {
  card: {
    width: 300,
    height:180,
    display: "inline-block",
    margin: 30,
    textAlign: "center",
    position:"relative",
    top:50,
    filter: "blur(.5px)",
    backgroundSize: "cover",
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
  },
   typographyH4: {
    fontSize: "1em",
    fontWeight: 400,
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
      <div id="card" key={i} className={classes.card}  style={{"background": bgImage(teamsData[i].color,teamsData[i].teamimage)}}>
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
          <Typography
            className={classes.typographyH4}
            gutterBottom
            variant="headline"
            component="h2"
          >
            {teamsData[i].history}
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
