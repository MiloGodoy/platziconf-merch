import { useState, useEffect } from 'react';
import axios from 'axios';
import { map } from 'leaflet';

const useGoogleAddress = address => {
    const [map, setMap] = useState({}); 
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCQBBWmex0bRnn1Fpz9SQua4AGvIcO84Vc`;
  
    useEffect(async () => {
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location);
      }, []);
      return map;
  };
  
  export default useGoogleAddress;