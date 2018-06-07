import React from "react";
import Map from "../../components/map";
import { withRouter } from "react-router";

class StadiumPage extends React.Component {
  render() {
    return (
      <div>
        Hello world
        <Map />
      </div>
    );
  }
}

export default withRouter(StadiumPage);
