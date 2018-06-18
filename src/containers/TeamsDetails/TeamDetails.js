import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "../../css_modules/team-details.css";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

function createData(teams, trophies, participations, wins, loses) {
  return { teams, trophies, participations, wins, loses };
}

const data = [
  createData("Brazil", 5, 20, 70, 17),
  createData("Germany", 4, 18, 66, 20),
  createData("Italy", 4, 18, 45, 21),
  createData("Argentina", 2, 16, 42, 14),
  createData("Uruguay", 2, 12, 20, 19),
  createData("Spain", 1, 14, 29, 18),
  createData("England", 1, 14, 26, 16),
  createData("France", 1, 14, 28, 19)
];

function CustomizedTable(props) {
  return (
    <div className={styles.parentDiv}>
      <Paper className={styles.root}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Teams</CustomTableCell>
              <CustomTableCell numeric>Trophies</CustomTableCell>
              <CustomTableCell numeric>Participations</CustomTableCell>
              <CustomTableCell numeric>Wins</CustomTableCell>
              <CustomTableCell numeric>Loses</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((n, i) => {
              return (
                <TableRow className={styles.row} key={i}>
                  <CustomTableCell component="th" scope="row">
                    {n.teams}
                  </CustomTableCell>
                  <CustomTableCell numeric>{n.trophies}</CustomTableCell>
                  <CustomTableCell numeric>{n.participations}</CustomTableCell>
                  <CustomTableCell numeric>{n.wins}</CustomTableCell>
                  <CustomTableCell numeric>{n.loses}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
