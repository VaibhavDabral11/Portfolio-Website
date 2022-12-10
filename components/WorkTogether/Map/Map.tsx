import { useState, useMemo, useRef } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import HomeIcon from "@mui/icons-material/Home";

const Map = () => {
  const center = useMemo(() => ({ lat: 20.8, lng: 85 }), []);
  const options = useMemo(
    () => ({
      mapId: "ee9802b9a12c783d", //a23bb36fdeadb18d dark bg
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  return (
    <div className="map-section left-0 h-96 w-full">
      <GoogleMap
        zoom={3.8}
        center={center}
        options={options}
        mapContainerClassName="map-container"
      >
        <Marker position={{ lat: 8.5, lng: 80.5 }} />
      </GoogleMap>
      <h4 className="mt-16 italic font-semibold text-sm name-text sm:mt-5 sm:text-xs">
        (I work Full-Time Remote & flexible for US/UK working hours)
      </h4>
    </div>
  );
};

export default Map;
