import { markerData } from '@/constants/map-data';
// import { MapMarker, MarkerPopup } from '@/components/map-marker';
import Map, { Marker } from 'react-map-gl';
import { CustomerIcon } from '@assets/icons/index';

function MapComponent() {
  return (
    <div>
      <h1>Customer Map</h1>

      <div className="h-80 relative">
        <Map
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/mapbox/light-v10"
          initialViewState={{
            longitude: -122.24704,
            latitude: 38.01155,
            zoom: 9.3,
            bounds: [
              [-122.97733, 37.76095],
              [-121.51674, 38.26129],
            ],
            pitch: 0,
            bearing: 0,
          }}
        >
          {markerData.map((marker) => (
            <Marker
              key={marker.id}
              longitude={marker.coordinates[0]}
              latitude={marker.coordinates[1]}
              className="absolute"
            >
              <img src={CustomerIcon} alt="" />
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
}

export default MapComponent;
