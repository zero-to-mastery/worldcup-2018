import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import StatisticTable from "./StatisticTable/StatisticTable";
import styles from "../../css_modules/statistic.css";
import { playerData } from "./data/team_players";

// Currently hard coded data
class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topScorers: [],
      topAssits: []
    };
  }

  componentDidMount() {
    let players = [];

    for (let obj of playerData) {
      obj.players.map(player => {
        player.team = obj.team;
        player.teamid = obj.teamid;
        return true;
      });
      players = players.concat(obj.players);
    }

    let topAssistPlayers = players
      .sort((a, b) => {
        return b.assists - a.assists;
      })
      .slice(0, 10);

    let topGoalPlayers = players
      .sort((a, b) => {
        return b.goals - a.goals;
      })
      .slice(0, 10);

    this.setState({ topScorers: topGoalPlayers, topAssits: topAssistPlayers });
  }

  renderStatistics() {
    return (
      <div className={styles.parentDiv}>
        <div className={styles.paperContainer}>
          <Paper className={styles.root}>
            <StatisticTable
              title="Goals"
              data={this.state.topScorers}
              className={styles.table}
            />
          </Paper>

          <Paper className={styles.root}>
            <StatisticTable
              title="Assists"
              data={this.state.topAssits}
              className={styles.table}
            />
          </Paper>
        </div>
      </div>
    );
  }

  render() {
    const { history } = this.props;
    const linkStyles = {
      color: "white",
      textDecoration: "none",
      fontSize: "20px",
      cursor: "pointer"
    };
    return (
      <div>
        <h2>
          <a
            style={linkStyles}
            onClick={() => history.push("/teams/statistics")}
          >
            Check out the teams statistics
          </a>
        </h2>
        {this.renderStatistics()}
      </div>
    );
  }
}

export default withStyles(styles)(Statistics);
