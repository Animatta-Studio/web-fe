import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';

const Map = ({ location, zoomLevel }) => {
    return (
        <div className="map">        
            <div className="w-[600px] h-[450px]">
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'MAP_API_KEY' }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
                >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
                </GoogleMapReact>
        </div>
        </div>
    );
};

export default Map;