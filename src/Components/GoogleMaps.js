import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'

class Map extends React.Component {
  render = () => {
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 42.391169, lng:-72.526180 }}
        >
          <Marker position={{
            lat: 42.391169,
            lng: -72.526180
          }} />
      </GoogleMap>
    )
  }
}

const MapComponent = withScriptjs(withGoogleMap(Map))

export default () => (
  <MapComponent
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px`, width: '500px' }} />}
  mapElement={<div style={{ height: `100%` }} />}
  />
)