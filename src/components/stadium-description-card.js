import React from "react";
import PropTypes from "prop-types";
import styles from "./stadium-description-card.css";

export default function StadiumDescriptionCard({ name, image }) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={image} alt="" />
      <div className={styles.label}>{name}</div>
    </div>
  );
}

StadiumDescriptionCard.propTypes = {
  id: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
