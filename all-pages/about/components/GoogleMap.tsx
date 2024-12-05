import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

interface ILocationBase {
  id: number;
  name: string;
  position: { lat: number; lng: number };
  image?: string;
  rating?: number;
  reviews?: number;
}

type ILocation = Partial<ILocationBase> | null;

const locations: ILocation[] = [
  {
    id: 1,
    name: "Soka University",
    position: { lat: 35.712193, lng: 139.402135 },
    image: "https://via.placeholder.com/150", // Replace with the actual image URL
    rating: 4.3,
    reviews: 422,
  },
  {
    id: 2,
    name: "MAKE NEW STANDARDS",
    position: { lat: 35.702193, lng: 139.512135 },
  },
  {
    id: 3,
    name: "National Institute of Natural Sciences",
    position: { lat: 35.722193, lng: 139.382135 },
  },
];

export default function MapComponent() {
  const [selectedLocation, setSelectedLocation] = useState<ILocation>(null); // Track the selected location

  return (
    <LoadScript googleMapsApiKey="AIzaSyAasl6wBYlGVsDxcsoLBD4RDPmpAOF0vuQ">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "460px" }}
        center={{ lat: 35.712193, lng: 139.402135 }}
        zoom={7}
        options={{
          disableDefaultUI: true,
          gestureHandling: "greedy",
        }}
      >
        {locations.map((location) => (
          <Marker
            key={location?.id}
            position={location?.position || { lat: 35.712193, lng: 139.402135 }}
            // Change marker icon color based on whether it's selected
            icon={{
              url:
                location?.id === selectedLocation?.id
                  ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png" // Red icon for selected
                  : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Blue icon for unselected
            }}
            onClick={() => setSelectedLocation(location)} // Handle marker click
          />
        ))}

        {/* Show InfoWindow if a location is selected */}
        {selectedLocation && (
          <div className="absolute left-0 top-0">
            <InfoWindow
              position={selectedLocation.position}
              onCloseClick={() => setSelectedLocation(null)} // Close the InfoWindow
            >
              <div
              // className="absolute top-0 left-0"
              >
                {selectedLocation.image && (
                  <img
                    src={selectedLocation.image}
                    alt={selectedLocation.name}
                    style={{ width: "100px", height: "60px" }}
                  />
                )}
                <h3>{selectedLocation.name}</h3>
                {selectedLocation.rating && (
                  <p>
                    Rating: {selectedLocation.rating} ⭐ (
                    {selectedLocation.reviews} reviews)
                  </p>
                )}
              </div>
            </InfoWindow>
          </div>
        )}
      </GoogleMap>
    </LoadScript>
  );
}
