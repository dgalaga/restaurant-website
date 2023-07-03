import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";


export default function Home() {
  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    googleMapsApiKey: "AIzaSyBolHrL-N2oBRbjFJAVP2-VEtV6GpA3aC0"
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 45.519441, lng: -122.653294 }), []);
  // const center = useMemo(() => ({ lat: 45.51947544798783, lng: -122.65342486811711 }), []);

  return (
    <GoogleMap zoom={16} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}

