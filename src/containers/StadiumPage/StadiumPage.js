import React from "react";
import Map from "../../components/map";
import { withRouter } from "react-router";

class StadiumPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stadiums: []
    };
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"
    )
      .then(res => res.json())
      .then(({ stadiums }) => {
        this.setState({ stadiums });
      });
  }

  render() {
    return <Map stadiums={this.state.stadiums} />;
  }
}

export default withRouter(StadiumPage);
