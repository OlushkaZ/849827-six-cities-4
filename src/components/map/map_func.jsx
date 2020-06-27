import leaflet from "leaflet";
// import React from "react";


const Map = (props)=>{
  // return <div style={{height: `100%`}} id="map"></div>;

  const city = [52.38333, 4.9];
  const zoom = 12;
  const map = leaflet.map(props.mapRef, {
    center: city,
    zoom,
    zoomControl: false,
    marker: true
  });

  map.setView(city, zoom);

  leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

};
export default Map;
