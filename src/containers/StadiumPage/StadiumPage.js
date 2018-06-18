import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentStadium, setData } from "../../actions";
import Map from "../../components/map";
import { withRouter } from "react-router";
import Swal from "sweetalert2";
import "../../css/sweet-alert.css";

const mapStateToProps = state => ({
  stadiumId: state.changeStadium.id,
  stadiums: state.requestData.data.stadiums,
  isPending: state.requestData.isPending,
  error: state.requestData.error
});

const mapDispatchToProps = dispatch => ({
  onChangeStadium: id => {
    dispatch(setCurrentStadium(id));
  },
  onRequestData: () => dispatch(setData())
});

class StadiumPage extends Component {
  componentDidMount() {
    this.props.onRequestData();
  }

  stadiumModal() {
    const index = this.props.stadiums.findIndex(
      element => element.id === this.props.stadiumId
    );
    const stadium = this.props.stadiums[index];
    if (stadium) {
      Swal({
        title: stadium.name,
        imageUrl: stadium.image,
        imageWidth: 400,
        imageHeight: 200,
        text: "Stadium Description"
      });
    }
    return null;
  }

  render() {
    return (
      <div>
        <Map
          stadiums={this.props.stadiums}
          currentStadiumChangeHandler={this.props.onChangeStadium}
        />
        {this.stadiumModal()}
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
