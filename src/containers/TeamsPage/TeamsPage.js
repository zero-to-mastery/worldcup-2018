import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setData } from "../../actions";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const IMG_DIR = "https://img.fifa.com/image/upload/t_l5/";
const ALPHA = 0.6;
const colors = [
  {
    id: 1,
    color: `rgba(213,43,30,${ALPHA})`,
    teamimage: `${IMG_DIR}thcdpu3qkfxaebn9cyo6.jpg`
  },
  {
    id: 2,
    color: `rgba(0,108,53,${ALPHA})`,
    teamimage: `${IMG_DIR}s7fjpgxqfgpvz6fprls6.jpg`
  },
  {
    id: 3,
    color: `rgba(255,255,255,${ALPHA})`,
    teamimage: `${IMG_DIR}du8t5qifvxfmc5jnli1c.jpg`
  },
  {
    id: 4,
    color: `rgba(0,56,168,${ALPHA})`,
    teamimage: `${IMG_DIR}invhns2hjn6wijnj0g7d.jpg`
  },
  {
    id: 5,
    color: `rgba(255,0,0,${ALPHA})`,
    teamimage: `${IMG_DIR}usuo6rxs4gjhwj7ibylh.jpg`
  },
  {
    id: 6,
    color: `rgba(255,196,0,${ALPHA})`,
    teamimage: `${IMG_DIR}gl3luzgn9u6aejtjpus1.jpg`
  },
  {
    id: 7,
    color: `rgba(193,39,45,${ALPHA})`,
    teamimage: `${IMG_DIR}z890jnmv9zpxuog8dl1l.jpg`
  },
  {
    id: 8,
    color: `rgba(35,159,64,${ALPHA})`,
    teamimage: `${IMG_DIR}i1pl8q1joys4wqr8occt.jpg`
  },
  {
    id: 9,
    color: `rgba(255,255,255,${ALPHA})`,
    teamimage: `${IMG_DIR}wbwaskklhpygpn7bb1yx.jpg`
  },
  {
    id: 10,
    color: `rgba(1,33,105,${ALPHA})`,
    teamimage: `${IMG_DIR}fbqnbheoqwumro3evwm9.jpg`
  },
  {
    id: 11,
    color: `rgba(217,16,35,${ALPHA})`,
    teamimage: `${IMG_DIR}yy9foflwrjufmmpqby6p.jpg`
  },
  {
    id: 12,
    color: `rgba(198,12,48,${ALPHA})`,
    teamimage: `${IMG_DIR}shpi3egzr6n4xvyw2bq3.jpg`
  },
  {
    id: 13,
    color: `rgba(116,172,223,${ALPHA})`,
    teamimage: `${IMG_DIR}jysg6ohkbpbbizwnmwkb.jpg`
  },
  {
    id: 14,
    color: `rgba(2,82,156,${ALPHA})`,
    teamimage: `${IMG_DIR}ijzh8s6rs6qtjqmdkakb.jpg`
  },
  {
    id: 15,
    color: `rgba(23,23,150,${ALPHA})`,
    teamimage: `${IMG_DIR}cvxri3anivazjm7ukeex.jpg`
  },
  {
    id: 16,
    color: `rgba(0,135,81,${ALPHA})`,
    teamimage: `${IMG_DIR}wbnqdre6xchz62xwcgp6.jpg`
  },
  {
    id: 17,
    color: `rgba(254,223,0,${ALPHA})`,
    teamimage: `${IMG_DIR}apzbapzlyerna0wn0bcs.jpg`
  },
  {
    id: 18,
    color: `rgba(213,43,30,${ALPHA})`,
    teamimage: `${IMG_DIR}jukqrluzatbvdhif4doq.jpg`
  },
  {
    id: 19,
    color: `rgba(0,43,127,${ALPHA})`,
    teamimage: `${IMG_DIR}csl6sqnnjmtqf4khkha1.jpg`
  },
  {
    id: 20,
    color: `rgba(12,64,118,${ALPHA})`,
    teamimage: `${IMG_DIR}yk1jxwv03havxcmyksnz.jpg`
  },
  {
    id: 21,
    color: `rgba(221,0,0,${ALPHA})`,
    teamimage: `${IMG_DIR}zoylmyv6g7nxfzv5kw42.jpg`
  },
  {
    id: 22,
    color: "rgba(255,255,255,0)",
    teamimage: `${IMG_DIR}xruixelh6hd4rrmtvgz2.jpg`
  },
  {
    id: 23,
    color: `rgba(0,106,167,${ALPHA})`,
    teamimage: `${IMG_DIR}r6raj52oikjhpa5sazbw.jpg`
  },
  {
    id: 24,
    color: `rgba(205,46,58,${ALPHA})`,
    teamimage: `${IMG_DIR}i1nhc38usjw2z0oiyiyr.jpg`
  },
  {
    id: 25,
    color: `rgba(250,224,66,${ALPHA})`,
    teamimage: `${IMG_DIR}ad7csaltnmajbbvu3cp9.jpg`
  },
  {
    id: 26,
    color: `rgba(255,255,255,${ALPHA})`,
    teamimage: `${IMG_DIR}ijqx7zvazuji14aa5iwj.jpg`
  },
  {
    id: 27,
    color: `rgba(231,0,19,${ALPHA})`,
    teamimage: `${IMG_DIR}xo0ydv0fcgjrd69vcvbm.jpg`
  },
  {
    id: 28,
    color: `rgba(255,255,255,${ALPHA})`,
    teamimage: `${IMG_DIR}sakbuchz78nqc85u9awf.jpg`
  },
  {
    id: 29,
    color: `rgba(220,20,60,${ALPHA})`,
    teamimage: `${IMG_DIR}albl5jwixnojqnseratp.jpg`
  },
  {
    id: 30,
    color: `rgba(253,239,66,${ALPHA})`,
    teamimage: `${IMG_DIR}hj3qq9hp0barjvyeakqb.jpg`
  },
  {
    id: 31,
    color: `rgba(252,209,22,${ALPHA})`,
    teamimage: `${IMG_DIR}ta2uywijwxvprs8uajk0.jpg`
  },
  {
    id: 32,
    color: `rgba(188,0,45,${ALPHA})`,
    teamimage: `${IMG_DIR}zyuft4plw4zldep8psz9.jpg`
  }
];
const bgImage = (colorName, imgName) =>
  `linear-gradient( ${colorName},rgba(0,0,0,0.6)),url(${imgName})`;

const styles = {
  card: {
    width: 300,
    display: "inline-block",
    margin: 30,
    textAlign: "center",
    position: "relative",
    top: 50,
    filter: "blur(.5px)",
    backgroundSize: "cover !important",
    backgroundPositon: "100% 100%",
    borderRadius: 10,
    boxshadow: "1px 1px 25px 1px #999"
  },
  media: {
    height: 100,
    width: 100,
    borderRadius: 50,
    position: "relative",
    top: -50,
    left: 100,
    opacity: 1
    // paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    padding: 20
  },
  typographyH2: {
    fontSize: "2em",
    fontWeight: 900,
    color: "#FFF",
    position: "relative",
    top: -40
  }
};

const mapStateToProps = ({ requestData }) => ({
  teams: requestData.data.teams
});

const mapDispatchToProps = dispatch => ({
  onRequestData: () => dispatch(setData())
});

class Teams extends React.Component {
  componentDidMount() {
    this.props.onRequestData();
  }

  renderTeams() {
    const { teams, classes } = this.props;
    return teams.map((team, i) => (
      <div
        id="card"
        key={i}
        className={classes.card}
        style={{ background: bgImage(colors[i].color, colors[i].teamimage) }}
      >
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
    return <div>{this.renderTeams()}</div>;
  }
}

Teams.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Teams)
);
