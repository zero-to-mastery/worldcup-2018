import React, { Component } from "react";
import GoogleMap from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends Component {
  render() {
    const style = {
      width: "calc(100% - 80px)",
      height: "100vh",
      backgroundColor: "white",
      border: "2px solid red",
      boxSizing: "border-box",
      margin: "40px"
    };
    const center = {
      lat: 55.7496,
      lng: 37.6237
    };
    return (
      <div style={style}>
        <GoogleMap
          bootstrapURLKeys={{ key: "AIzaSyDU6zRc99Xn7cX07akiYg38-ozZiXAscfE" }}
          defaultCenter={center}
          defaultZoom={5}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={"Kreyser Avrora"}
          />
        </GoogleMap>
      </div>
    );
  }
}
