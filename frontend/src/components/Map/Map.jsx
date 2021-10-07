import React from "react";
import mapImage from "../../images/map.jpg";
import PinkSmileCircle from "../PinkSmileCircle/PinkSmileCircle";
import YellowSmileCircle from "../YellowSmileCircle/YellowSmallCircle";

function Map() {
  return (
    <div className="map">
      <img className="map__image" src={mapImage} alt="Map" />
      <YellowSmileCircle className="map__yellow-smile" />
      <PinkSmileCircle className="map__pink-smile pink-smile_type_map" />
    </div>
  );
}

export default Map;
