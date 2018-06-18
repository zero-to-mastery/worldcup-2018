import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const StatisticTable = ({ title, data, className }) => {
  const statisticParameter = title.toLowerCase();

  const sortData = (arr, parameter) => {
    return []
      .concat(arr)
      .sort((a, b) => a[parameter] < b[parameter])
      .map(player => {
        return (
          <TableRow key={player.teamid + "" + player.id}>
            <TableCell component="th" scope="row">
              {player.name}
            </TableCell>
            <TableCell numeric>{player[parameter]}</TableCell>
            <TableCell>{player.team}</TableCell>
          </TableRow>
        );
      });
  };

  return (
    <Table className={className}>
      <TableHead>
        <TableRow style={{ backgroundColor: "#a9a9a9" }}>
          <TableCell style={{ color: "white" }}>Player</TableCell>
          <TableCell style={{ color: "white" }} numeric>
            {title}
          </TableCell>
          <TableCell style={{ color: "white" }}>Team</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{sortData(data, statisticParameter)}</TableBody>
    </Table>
  );
};

export default StatisticTable;
