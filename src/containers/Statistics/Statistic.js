import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import StatisticTable from './StatisticTable/StatisticTable';
import styles from './statistic.css';

// Currently hard coded data
class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topScorers: [
        {
          id: 1,
          name: "Ronaldo",
          goals: 10,
          team: "Portugal"
        },

        {
          id: 2,
          name: "Neymar",
          goals: 8,
          team: "Brazil"
        },

        {
          id: 3,
          name: "Costa",
          goals: 7,
          team: "Spain"
        }
      ],
      topAssits: [
        {
          id: 1,
          name: "Ronaldo",
          assists: 3,
          team: "Portugal"
        },

        {
          id: 2,
          name: "Muller",
          assists: 2,
          team: "Germany"
        },

        {
          id: 3,
          name: "Isco",
          assists: 4,
          team: "Spain"
        }
      ]
    };
  }

  renderStatistics() {

    return (
      <div className={styles.parentDiv}>
        <div className={styles.paperContainer}>
          <Paper className={styles.root}>
            <StatisticTable title="Goals" data={this.state.topScorers} className={styles.table} />
          </Paper>

          <Paper className={styles.root}>
          <StatisticTable title="Assists" data={this.state.topAssits} className={styles.table}  />
          </Paper>

        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderStatistics()}</div>;
  }
}

export default withStyles(styles)(Statistics);
