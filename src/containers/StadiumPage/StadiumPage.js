import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentStadium } from "../../actions";
import Map from "../../components/map";
import { withRouter } from "react-router";
import Swal from "sweetalert2";
import "../../css/sweet-alert.css";

const mapStateToProps = state => {
  return {
    stadium: state.currentStadium
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeStadium: id => {
      const index = this.state.stadiums.findIndex(element => element.id === id);
      dispatch(setCurrentStadium(this.state.stadiums[index]));
    }
  };
};

class StadiumPage extends Component {
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

  render() {
    return (
      <div>
        <Map
          stadiums={this.state.stadiums}
          currentStadiumChangeHandler={this.props.onChangeStadium}
        />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StadiumPage)
);
