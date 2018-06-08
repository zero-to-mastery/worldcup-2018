import React from "react";
import PropTypes from "prop-types";
import styles from "./stadium-marker.css";

export default function StadiumMarker({ name }) {
  return (
    <div>
      <div style={styles.marker} />
      <div style={styles.label}>{name}</div>
    </div>
  );
}

StadiumMarker.propTypes = {
  key: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
