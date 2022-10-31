/*import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    
    const mapStyles = {
        height: "50vh",
        wodth: "100%"
    }

    const defaultCenter = {
        lat: -25.2819, Lng: -57.63525
    }

    return (
        <LoadScript googleMapsApikey= 'AIzaSyCQBBWmex0bRnn1Fpz9SQua4AGvIcO84Vc'>
            <GoogleMap
                MapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map; */

import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import '../styles/components/Map.css';


const Map = ({ data }) => {
  const defaultCenter = [data.lat, data.lng]

  return (
    <MapContainer center={defaultCenter} zoom={17} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={defaultCenter} />
    </MapContainer>
  );
}

export default Map; 