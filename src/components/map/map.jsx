import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {CITY_LOCATION_PROP, OFFERS_LOCATION_PROP} from '../../utils/validate';

import "leaflet/dist/leaflet.css";

const CITIES = {
  Amsterdam: [52.3833, 4.9044],
  Paris: [48.8589, 2.3469],
  Cologne: [50.9293, 6.9595],
  Brussels: [50.8552, 4.3453],
  Hamburg: [53.5503, 10.0006],
  Dusseldorf: [51.2287, 6.7743]
};

const Pin = {
  PinUrl: {
    NOT_ACTIVE: `./img/pin.svg`,
    ACTIVE: `./img/pin-active.svg`
  },
  PinSize: {
    WIDTH: 27,
    HEIGHT: 39
  }
};

const setMarkers = (points, map, activeOffer) => {
  points.forEach((point) => {
    const customIcon = leaflet.icon({
      iconUrl: `${activeOffer === point.id ? Pin.PinUrl.ACTIVE : Pin.PinUrl.NOT_ACTIVE}`,
      iconSize: [Pin.PinSize.WIDTH, Pin.PinSize.HEIGHT]
    });

    leaflet.marker({
      lat: point.location.latitude,
      lng: point.location.longitude
    },
    {
      icon: customIcon
    })
    .addTo(map)
    .bindPopup(point.title);
  });
};

const removeMarkers = (map) => {
  map.eachLayer(function (layer) {
    if (layer instanceof leaflet.Marker) {
      layer.remove();
    }
  });
};

const Map = ({city, points, activeOffer}) => {
  const mapRef = useRef();
  const currentCity = CITIES[city.name] || city;

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      zoom: city.location.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    setMarkers(points, mapRef.current, activeOffer);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    setMarkers(points, mapRef.current, activeOffer);
  }, [activeOffer]);

  useEffect(() => {
    mapRef.current.flyTo(new leaflet.LatLng(...currentCity), city.location.zoom);
    removeMarkers(mapRef.current);
    setMarkers(points, mapRef.current, activeOffer);
  }, [points]);

  return (
    <div id="map" ref={mapRef} style={{height: `100%`}}></div>
  );
};

Map.propTypes = {
  city: PropTypes.shape(CITY_LOCATION_PROP).isRequired,
  points: PropTypes.arrayOf(PropTypes.shape(OFFERS_LOCATION_PROP).isRequired).isRequired,
  activeOffer: PropTypes.number
};

export default Map;
