import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import StatisticTable from "./StatisticTable/StatisticTable";
import styles from "../../css_modules/statistic.css";
import { scorerData } from "./data/top_scorer";
import { assistData } from "./data/top_assists";

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
    this.setState({ topScorers: scorerData, topAssits: assistData });
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
