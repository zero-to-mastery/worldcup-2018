import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import indexStyle from "../../index.css";
const colors = [
  {
    id: 1,
    color: "rgba(213,43,30,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/thcdpu3qkfxaebn9cyo6.jpg"
  },
  {
    id: 2,
    color: "rgba(0,108,53,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/s7fjpgxqfgpvz6fprls6.jpg"
  },
  {
    id: 3,
    color: "rgba(255,255,255,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/du8t5qifvxfmc5jnli1c.jpg"
  },
  {
    id: 4,
    color: "rgba(0,56,168,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/invhns2hjn6wijnj0g7d.jpg"
  },
  {
    id: 5,
    color: "rgba(255,0,0,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/usuo6rxs4gjhwj7ibylh.jpg"
  },
  {
    id: 6,
    color: "rgba(255,196,0,0.6)",
    teamimage:
      "https://img.fifa.com/image/upload/t_l5/gl3luzgn9u6aejtjpus1.jpg  "
  },
  {
    id: 7,
    color: "rgba(193,39,45,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/z890jnmv9zpxuog8dl1l.jpg"
  },
  {
    id: 8,
    color: "rgba(35,159,64,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/i1pl8q1joys4wqr8occt.jpg"
  },
  {
    id: 9,
    color: "rgba(255,255,255,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/wbwaskklhpygpn7bb1yx.jpg"
  },
  {
    id: 10,
    color: "rgba(1,33,105,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/fbqnbheoqwumro3evwm9.jpg"
  },
  {
    id: 11,
    color: "rgba(217,16,35,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/yy9foflwrjufmmpqby6p.jpg"
  },
  {
    id: 12,
    color: "rgba(198,12,48,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/shpi3egzr6n4xvyw2bq3.jpg"
  },
  {
    id: 13,
    color: "rgba(116,172,223,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/jysg6ohkbpbbizwnmwkb.jpg"
  },
  {
    id: 14,
    color: "rgba(2,82,156,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/ijzh8s6rs6qtjqmdkakb.jpg"
  },
  {
    id: 15,
    color: "rgba(23,23,150,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/cvxri3anivazjm7ukeex.jpg"
  },
  {
    id: 16,
    color: "rgba(0,135,81,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/wbnqdre6xchz62xwcgp6.jpg"
  },
  {
    id: 17,
    color: "rgba(254,223,0,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/apzbapzlyerna0wn0bcs.jpg"
  },
  {
    id: 18,
    color: "rgba(213,43,30,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/jukqrluzatbvdhif4doq.jpg"
  },
  {
    id: 19,
    color: "rgba(0,43,127,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/csl6sqnnjmtqf4khkha1.jpg"
  },
  {
    id: 20,
    color: "rgba(12,64,118,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/yk1jxwv03havxcmyksnz.jpg"
  },
  {
    id: 21,
    color: "rgba(221,0,0,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/zoylmyv6g7nxfzv5kw42.jpg"
  },
  {
    id: 22,
    color: "rgba(255,255,255,0)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/xruixelh6hd4rrmtvgz2.jpg"
  },
  {
    id: 23,
    color: "rgba(0,106,167,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/r6raj52oikjhpa5sazbw.jpg"
  },
  {
    id: 24,
    color: "rgba(205,46,58,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/i1nhc38usjw2z0oiyiyr.jpg"
  },
  {
    id: 25,
    color: "rgba(250,224,66,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/ad7csaltnmajbbvu3cp9.jpg"
  },
  {
    id: 26,
    color: "rgba(255,255,255,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/ijqx7zvazuji14aa5iwj.jpg"
  },
  {
    id: 27,
    color: "rgba(231,0,19,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/xo0ydv0fcgjrd69vcvbm.jpg"
  },
  {
    id: 28,
    color: "rgba(255,255,255,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/sakbuchz78nqc85u9awf.jpg"
  },
  {
    id: 29,
    color: "rgba(220,20,60,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/albl5jwixnojqnseratp.jpg"
  },
  {
    id: 30,
    color: "rgba(253,239,66,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/hj3qq9hp0barjvyeakqb.jpg"
  },
  {
    id: 31,
    color: "rgba(252,209,22,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/ta2uywijwxvprs8uajk0.jpg"
  },
  {
    id: 32,
    color: "rgba(188,0,45,0.6)",
    teamimage: "https://img.fifa.com/image/upload/t_l5/zyuft4plw4zldep8psz9.jpg"
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
    backgroundSize: "cover",
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
    return (
      <div className={indexStyle.scroll_wrapper}>{this.renderTeams()}</div>
    );
  }
}

Teams.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Teams);
