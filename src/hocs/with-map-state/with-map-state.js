import React, {PureComponent} from 'react';
import leaflet from "leaflet";
// import Map from "../../components/map/map.jsx";

const withMapState = (Component) => {
  class WithMapState extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isContainerExist: false,
        map: {},
        cityCoordinates: [52.38333, 4.9],
        zoom: 12,
        icon: leaflet.icon({
          iconUrl: `./img/pin.svg`,
          iconSize: [30, 30],
        }),
        iconActive: leaflet.icon({
          iconUrl: `./img/pin-active.svg`,
          iconSize: [30, 30]
        }),
        tileLayer: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
        markers: [],
      };
    }

    render() {
      return this.state.isContainerExist ?
        <Component
          map = {this.state.map}
          city = {this.state.cityCoordinates}
          icon = {this.state.icon}
          {...this.props}
        />
        : <div style={{height: `100%`}} id="map"></div>;

    }
    componentDidMount() {
      const {tileLayer, attribution, cityCoordinates, zoom} = this.state;

      const newMap = leaflet.map(`map`, {
        center: cityCoordinates,
        zoom,
        zoomControl: true,
        marker: true
      });
      leaflet
        .tileLayer(tileLayer, {
          attribution
        })
        .addTo(newMap);
      this.setState({map: newMap, isContainerExist: true});
    }
  }

  WithMapState.propTypes = {};

  return WithMapState;
};

export default withMapState;
