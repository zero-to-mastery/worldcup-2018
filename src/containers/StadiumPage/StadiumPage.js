import React, { Component } from "react";
import Map from "../../components/map";
import Stadium from "../../components/stadium-description-card";
import { withRouter } from "react-router";

class StadiumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStadium: null,
      stadiums: []
    };
    this.currentStadiumChangeHandler = this.currentStadiumChangeHandler.bind(
      this
    );
  }
  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"
    )
      .then(res => res.json())
      .then(({ stadiums }) => {
        this.setState({ stadiums, currentStadium: stadiums[0] });
      });
  }

  renderStadium = () => {
    if (this.state.currentStadium) {
      return (
        <Stadium
          id={this.state.currentStadium.id}
          lat={this.state.currentStadium.lat}
          lng={this.state.currentStadium.lng}
          name={this.state.currentStadium.name}
          image={this.state.currentStadium.image}
        />
      );
    }
    return null;
  };

  currentStadiumChangeHandler = id => {
    const index = this.state.stadiums.findIndex(element => element.id === id);
    this.setState({ currentStadium: this.state.stadiums[index] });
  };

  render() {
    return (
      <div>
        <Map
          stadiums={this.state.stadiums}
          currentStadiumChangeHandler={this.currentStadiumChangeHandler}
        />
        {this.renderStadium()}
      </div>
    );
  }
}

export default withRouter(StadiumPage);
