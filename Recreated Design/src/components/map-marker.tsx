interface MarkerPopupProps {
  label: string;
  hoverInfo: string;
}

export function MarkerPopup({ label, hoverInfo }: MarkerPopupProps) {
  return (
    <div>
      <h3>{label}</h3>
      <p>{hoverInfo}</p>
    </div>
  );
}

export function MapMarker() {
  return (
    // <div className="w-8 h-8 rounded-full border-8 border-red-500 cursor-pointer">
    //   <div className="bg-logo-icon"></div>
    <p>lol</p>
    // </div>
  );
}

// import { Popup } from 'react-map-gl';

// interface MarkerPopupProps {
//   label: string;
//   hoverInfo: string;
//   longitude: number;
//   latitude: number;
// }

// export function MarkerPopup({
//   label,
//   hoverInfo,
//   longitude,
//   latitude,
// }: MarkerPopupProps) {
//   return (
//     <Popup
//       longitude={longitude}
//       latitude={latitude}
//       anchor="bottom"
//       offset={[0, -10]}
//       closeButton={false}
//       className="z-10"
//     >
//       <div className="rounded-lg bg-white p-2 shadow-lg">
//         <h3 className="font-semibold">{label}</h3>
//         <p className="text-sm text-gray-600">{hoverInfo}</p>
//       </div>
//     </Popup>
//   );
// }

// export function MapMarker() {
//   return (
//     <div className="relative flex h-6 w-6 items-center justify-center">
//       <div className="absolute h-3 w-3 rounded-full bg-[#7158e2]" />
//       <div className="absolute h-6 w-6 animate-ping rounded-full bg-[#7158e2] opacity-75" />
//       <p>LOLL</p>
//     </div>
//   );
// }
