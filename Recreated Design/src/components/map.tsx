// import { markerData } from '@/constants/map-data';
// import { MapMarker, MarkerPopup } from '@/components/map-marker';
import Map, { Marker } from 'react-map-gl';
// import { CustomerIcon } from '@assets/icons/index';

function MapComponent() {
  return (
    <div className="bg-white rounded-xl shadow-lg">
      <h1 className="text-xl font-semibold mb-4 border-b border-[#E6E8F0] p-5 pb-4">
        Customer Map
      </h1>

      <div className="h-96 w-full rounded-lg overflow-hidden p-5">
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
          {/* {markerData.map((marker) => (
          <Marker
            key={marker.id}
            longitude={marker.coordinates[0]}
            latitude={marker.coordinates[1]}
            className="absolute"
          >
            <img src={CustomerIcon} alt="" />
          </Marker>
        ))} */}
        </Map>
      </div>
    </div>
  );
}

export default MapComponent;

// Fix:-------------

// import { useState } from 'react';
// import Map, { Marker } from 'react-map-gl';
// import { markerData } from '@/constants/map-data';
// import { MapMarker, MarkerPopup } from '@/components/map-marker';

// function MapComponent() {
//   const [hoveredMarkerId, setHoveredMarkerId] = useState<number | null>(null);

//   return (
//     <div className="rounded-xl bg-white shadow-lg">
//       <h1 className="border-b border-[#E6E8F0] p-5 pb-4 text-xl font-semibold">
//         Customer Map
//       </h1>

//       <div className="h-96 w-full overflow-hidden p-5">
//         <Map
//           mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
//           mapStyle="mapbox://styles/mapbox/light-v10"
//           initialViewState={{
//             longitude: -122.24704,
//             latitude: 38.01155,
//             zoom: 9.3,
//             bounds: [
//               [-122.97733, 37.76095],
//               [-121.51674, 38.26129],
//             ],
//             pitch: 0,
//             bearing: 0,
//           }}
//         >
//           {markerData.map((marker) => (
//             <div key={marker.id} className='w-full h-full'>
//               <Marker
//                 longitude={marker.coordinates[0]}
//                 latitude={marker.coordinates[1]}
//                 anchor="center"
//               >
//                 <div
//                   onMouseEnter={() => setHoveredMarkerId(marker.id)}
//                   onMouseLeave={() => setHoveredMarkerId(null)}
//                 >
//                   <MapMarker />
//                 </div>
//               </Marker>
//               {hoveredMarkerId === marker.id && (
//                 <MarkerPopup
//                   label={marker.label}
//                   hoverInfo={marker.hoverInfo}
//                   longitude={marker.coordinates[0]}
//                   latitude={marker.coordinates[1]}
//                 />
//               )}
//             </div>
//           ))}
//         </Map>
//       </div>
//     </div>
//   );
// }

// export default MapComponent;
