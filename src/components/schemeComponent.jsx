import React, { Component } from "react";
import { YMaps, Map, GeoObject } from "react-yandex-maps";

const mapState = {
  center: [56.263929, 54.22275],
  zoom: 16
};

const mapStyles = {
  width: "98%",
  height: "360px",
  margin: "auto",
  marginTop: "10px",
  maxWidth: "1280px"
};

class Scheme extends Component {
  render() {
    return (
      <div id="scheme" className="scheme">
        <h2 className="scheme__subheader subheader">Схема проезда</h2>
        <YMaps>
          <Map state={mapState} style={mapStyles}>
            <GeoObject
              // The geometry description.
              geometry={{
                type: "Point",
                coordinates: [56.263929, 54.22275]
              }}
              properties={{
                // The placemark content.
                iconContent: "Камбаркинский кирпичный завод"
              }}
              options={{
                preset: "islands#redStretchyIcon"
              }}
            />
          </Map>
        </YMaps>
      </div>
    );
  }
}

export default Scheme;
