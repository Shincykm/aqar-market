'use client'
import React, { useCallback, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { defaultMapContainerStyle, defaultMapOptions, defaultMapZoom } from '@/constants/mapConstants';

const center = {
  lat: 25.19162,
  lng: 55.27113
};

function MapComponent(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.VITE_APP_GOOGLE_API_KEY
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
        <div className="w-full">
            <GoogleMap 
                mapContainerStyle={defaultMapContainerStyle}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
            {props.isMarkerShown && <Marker position={center} />}
            </GoogleMap>
        </div>
    
  ) : <div className="w-full">Map Loading...</div>
}

export default React.memo(MapComponent)