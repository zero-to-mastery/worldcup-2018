import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMap from "google-map-react";
import StadiumMarker from "./stadium-marker";
import styles from "./map.css";

export default class Map extends Component {
  renderStadiums() {
    return this.props.stadiums.map(({ lat, lng, name, city, image, id }) => (
      <StadiumMarker
        key={id}
        id={id}
        lat={lat}
        lng={lng}
        name={name}
        image={image}
      />
    ));
  }
  render() {
    const moscowGPS = {
      lat: 55.7496,
      lng: 37.6237
    };
    return (
      <div className={styles.wrapper}>
        <GoogleMap
          bootstrapURLKeys={{
            key: "AIzaSyDU6zRc99Xn7cX07akiYg38-ozZiXAscfE"
          }}
          defaultCenter={moscowGPS}
          defaultZoom={5}
        >
          {this.renderStadiums()}
        </GoogleMap>
      </div>
    );
  }
}

Map.propTypes = {
  stadiums: PropTypes.array.isRequired
};
