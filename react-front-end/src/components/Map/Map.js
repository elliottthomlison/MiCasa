import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
//import InfoWindow from 'google-map-react';
import axios from "axios";

 import LocationMarker from './LocationMarker'
 import Infobox from "./Infobox";

 import "./map.css";

const Map = ({ center, zoom }) => {

  const [properties, setProperties] = useState([]);
  
  useEffect(() => {
    Promise.all([
      axios.get("/api/properties"),
     ]).then((all) => {
       console.log('all', all);
       setProperties(all[0].data);
      // setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  },[]);

  

  const locationMarkers = properties.map((property) => {
    return (<LocationMarker lat={property.latitude} lng={property.longitude} info={property}/>)
  })

  const infoboxes = properties.map((property) => {
    return (<Infobox lat={property.latitude} lng={property.longitude}/>)
  })

 

  // Get data through useEffect promise request. 
  return (
    // Important! Always set the container height explicitly
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDxCqEWrgL6SHTrAJx22WSlr3Nl3owXo-c'}}
        defaultCenter={ center }
        defaultZoom={ zoom }
        onClick={(event) => {
          console.log(event);
        }}
      >
        {/* Map through the data, and render multiple <LocationMarker/> */}
        {/* <LocationMarker lat={45.33} lng={-122.33}/> */}
        {locationMarkers}
        {/* {infoboxes} */}
      </GoogleMapReact>

    </div>
  );
}
  Map.defaultProps = {
    center: {
      lat: 49.231084,
      lng: -123.133478
    },
    zoom: 16
  };



export default Map;