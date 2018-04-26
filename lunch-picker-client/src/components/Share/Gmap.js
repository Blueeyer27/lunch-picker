import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const styles = {
  loadingStyle: {
    height: '100%'
  },
  containerStyle: {
    height: '100%'
  },
  mapStyle: {
    height: '100%'
  }
};

export const Gmap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={styles.loadingStyle} />,
    containerElement: <div style={styles.containerStyle} />,
    mapElement: <div style={styles.mapStyle} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap
      defaultZoom={props.defaultZoom}
      defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
      {props.isMarkerShown && (
        <Marker
          position={{ lat: props.lat, lng: props.lng }}
          onClick={props.onMarkerClick}
        />
      )}
    </GoogleMap>
  );
});

Gmap.defaultProps = {
  lat: undefined,
  lng: undefined,
  defaultZoom: 14,
  style: {},
  onMarkerClick: () => {}
};
