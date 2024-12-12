interface MarkerDataObject {
  id: number;
  coordinates: [number, number];
  label: string;
  hoverInfo: string;
}

type MarkerDataType = MarkerDataObject[];

export const markerData: MarkerDataType = [
  {
    id: 1,
    coordinates: [-122.43547, 37.79893],
    label: 'Paradise Cay',
    hoverInfo: '201 Customer',
  },
];
