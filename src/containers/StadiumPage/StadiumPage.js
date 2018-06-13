import React, { Component } from "react";
import Map from "../../components/map";
import Stadium from "../../components/stadium-description-card";
import { withRouter } from "react-router";
import Swal from "sweetalert2";
import "../../css/sweet-alert.css";

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

  stadiumModal = () => {
    if (this.state.currentStadium) {
      const stadModal = this.state.currentStadium;
      Swal({
        title: stadModal.name,
        imageUrl: stadModal.image,
        imageWidth: 400,
        imageHeight: 200,
        text: "Stadium Description"
      });
    }
  };

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
    this.setState({ show: true });
  };

  render() {
    return (
      <div>
        <Map
          stadiums={this.state.stadiums}
          currentStadiumChangeHandler={this.currentStadiumChangeHandler}
        />
        {this.renderStadium()}
        {this.stadiumModal()}
      </div>
    );
  }
}

export default withRouter(StadiumPage);
