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
