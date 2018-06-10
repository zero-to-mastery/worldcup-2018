import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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
          goals: 5,
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
          assits: 3,
          team: "Portugal"
        },

        {
          id: 2,
          name: "Muller",
          assits: 2,
          team: "Germany"
        },

        {
          id: 3,
          name: "Isco",
          assits: 4,
          team: "Spain"
        }
      ]
    };
  }

  renderStatistics() {
    const sortTopScorrer = arr => {
      return []
        .concat(arr)
        .sort((a, b) => a.goals < b.goals)
        .map(player => {
          return (
            <TableRow key={player.id}>
              <TableCell component="th" scope="row">
                {player.name}
              </TableCell>
              <TableCell numeric>{player.goals}</TableCell>
              <TableCell>{player.team}</TableCell>
            </TableRow>
          );
        });
    };

    const sortTopAssits = arr => {
      return []
        .concat(arr)
        .sort((a, b) => a.assits < b.assits)
        .map(player => {
          return (
            <TableRow key={player.id}>
              <TableCell component="th" scope="row">
                {player.name}
              </TableCell>
              <TableCell numeric>{player.assits}</TableCell>
              <TableCell>{player.team}</TableCell>
            </TableRow>
          );
        });
    };

    return (
      <div className={styles.parentDiv}>
        <div className={styles.paperContainer}>
          <Paper className={styles.root}>
            <Table className={styles.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Player</TableCell>
                  <TableCell numeric>Goals</TableCell>
                  <TableCell>Team</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{sortTopScorrer(this.state.topScorers)}</TableBody>
            </Table>
          </Paper>

          <Paper className={styles.root}>
            <Table className={styles.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Player</TableCell>
                  <TableCell numeric>Assists</TableCell>
                  <TableCell>Team</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{sortTopAssits(this.state.topAssits)}</TableBody>
            </Table>
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
