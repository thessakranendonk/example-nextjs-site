import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export interface MapProps {
  company: string;
  location: string;
  lat: number;
  lon: number;
  description?: string;
}

export interface MapLocationDetails {
  mapLocationDetails: MapProps[];
  mapCenter: LatLngExpression;
  zoomNumber: number;
  mapClassName?: string;
  mapSize: string;
}

const Map: React.FC<MapLocationDetails> = ({
  mapLocationDetails,
  mapCenter,
  zoomNumber,
  mapClassName,
  mapSize,
}) => {
  const position: LatLngExpression = mapCenter;
  const zoom: number = zoomNumber;

  return (
    <div className={mapClassName}>
      <MapContainer
        center={position}
        zoom={zoom}
        scrollWheelZoom={false}
        className={mapSize}
      >
        <TileLayer
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapLocationDetails.map((item, index) => (
          <Marker
            key={index}
            position={[item.lat, item.lon]}
            title={`${item.company} at ${item.location}`}
          >
            <Popup>
              <strong>
                {item.company} at {item.location}
              </strong>
              <br />
              <p>{item.location}</p>
              {item.description && <em>{item.description}</em>}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
