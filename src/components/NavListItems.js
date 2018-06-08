import React from "react";
import { withRouter } from "react-router";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const NavListItems = props => {
  const { history } = props;
  return (
    <div>
      <ListItem button onClick={() => history.push("/fixtures")}>
        <ListItemText primary="Fixtures" />
      </ListItem>
      <ListItem button onClick={() => history.push("/teams")}>
        <ListItemText primary="Teams" />
      </ListItem>
      <ListItem button onClick={() => history.push("/stadiums")}>
        <ListItemText primary="Stadiums" />
      </ListItem>
      <ListItem button onClick={() => history.push("/statistics")}>
        <ListItemText primary="Statistics" />
      </ListItem>
    </div>
  );
};

export default withRouter(NavListItems);
