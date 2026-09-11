"use client";

import { useEffect, useRef } from "react";

export default function HeatMap() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const heatRef = useRef(null);

  useEffect(() => {
    let activo = true;

    async function cargarMapa() {

      if (!mapContainer.current || mapRef.current) {
        return;
      }

      const leaflet = await import("leaflet");
      const L = leaflet.default;

      await import("leaflet.heat");

      if (!activo || !mapContainer.current || mapRef.current) {
        return;
      }


      const map = L.map(mapContainer.current, {
        zoomControl: true,
        scrollWheelZoom: true,
      }).setView(
        [19.64, -99.11],
        12
      );


      mapRef.current = map;


      L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution:
            "&copy; OpenStreetMap contributors",
        }
      ).addTo(map);



      const puntos = [

        // Zona alta
        [19.6018, -99.0507, 1],
        [19.5950, -99.0450, 0.9],
        [19.6100, -99.0600, 0.8],
        [19.5850, -99.0550, 0.7],


        // Zona media
        [19.6476, -99.1671, 0.9],
        [19.6550, -99.1700, 0.8],
        [19.6400, -99.1600, 0.7],


        // Zona media baja
        [19.6292, -99.1063, 0.8],
        [19.6350, -99.1100, 0.7],
        [19.6200, -99.1000, 0.6],


        // Otros municipios
        [19.6726, -99.1809, 0.5],
        [19.6852, -99.1282, 0.6],

      ];



      const heat = L.heatLayer(
        puntos,
        {

          radius: 45,

          blur: 35,

          maxZoom: 13,

          minOpacity: 0.45,


          gradient: {

            // menor intensidad
            0.2: "#fff200",

            // intensidad media
            0.45: "#ff9800",

            // intensidad alta
            0.7: "#ff4d00",

            // concentración máxima
            1.0: "#d90000"

          }

        }
      );


      heat.addTo(map);

      heatRef.current = heat;



      setTimeout(() => {

        if(mapRef.current){

          mapRef.current.invalidateSize();

        }

      },500);


    }


    cargarMapa();


    return () => {

      activo = false;


      if(heatRef.current){

        heatRef.current.remove();

      }


      if(mapRef.current){

        mapRef.current.remove();

        mapRef.current = null;

      }

    };


  }, []);



  return (

    <div
      ref={mapContainer}
      className="heatMapContainer"
    />

  );
}