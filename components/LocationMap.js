"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap
} from "react-leaflet";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const rietiIcon = L.divIcon({
  className: "rietiMarker",
  html: `
    <div class="rietiMarkerPin">
      <div class="rietiMarkerDot"></div>
    </div>
  `,
  iconSize: [40, 48],
  iconAnchor: [20, 48]
});

function MapCenter({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 16);
    }
  }, [position, map]);

  return null;
}

function LocationMarker({ position, setPosition }) {
  useMapEvents({
    click(event) {
      setPosition([
        event.latlng.lat,
        event.latlng.lng
      ]);
    }
  });

  return position ? (
    <Marker
      position={position}
      icon={rietiIcon}
      draggable
      eventHandlers={{
        dragend: (event) => {
          const marker = event.target;
          const location = marker.getLatLng();

          setPosition([
            location.lat,
            location.lng
          ]);
        }
      }}
    />
  ) : null;
}

export default function LocationMap({
  position,
  setPosition
}) {
  return (
    <MapContainer
      center={[19.4326, -99.1332]}
      zoom={12}
      className="locationMap"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapCenter position={position} />

      <LocationMarker
        position={position}
        setPosition={setPosition}
      />
    </MapContainer>
  );
}