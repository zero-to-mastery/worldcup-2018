import React from "react";
import PropTypes from "prop-types";
import styles from "./stadium-marker.css";

export default function StadiumMarker({ name }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.marker} />
      <div className={styles.label}>{name}</div>
    </div>
  );
}

StadiumMarker.propTypes = {
  id: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
