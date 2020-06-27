import leaflet from "leaflet";
const Map = (props) => {
  const {map, city, icon} = props;
  map.setView(city);
  const coordinates = [52.3709553943508, 4.89309666406198];
  const marker = leaflet.marker(coordinates, {icon});
  map.addLayer(marker);
  // leaflet.marker(offerCords, {icon}).addTo(map);
};
export default Map;
