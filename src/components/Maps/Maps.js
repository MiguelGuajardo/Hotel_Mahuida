import React from "react";
import "./Maps.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="maps_container">
      <h2>Donde nos ubicamos</h2>
      <GoogleMap
        zoom={15}
        center={{ lat: -32.95385, lng: -69.19694 }}
        mapContainerClassName="map_container"
      >
        <Marker position={{ lat: -32.95385, lng: -69.19694 }} />
      </GoogleMap>
    </div>
  );
};
