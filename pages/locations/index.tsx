import { useEffect, useState } from "react";
import { MapMouseEvent } from "@vis.gl/react-google-maps";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { Icon } from "@iconify/react";
import Link from "next/link";

const places = [
  {
    name: "Veliani-ველიანი",
    address: "78 Sairme St, Tbilisi 0194",
    position: { lat: 41.722523, lng: 44.759849 },
    link: "https://maps.app.goo.gl/sUVxRqosLzn1sPYa6",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNKSCi9iH6MFAA6lO7_oR_og8A9r2nLW4fxEYo=w408-h544-k-no",
  },
  {
    name: "Veliani-ველიანი",
    address: "78 Sairme St, Tbilisi 0194",
    position: { lat: 41.822523, lng: 44.659849 },
    link: "https://maps.app.goo.gl/sUVxRqosLzn1sPYa6",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNKSCi9iH6MFAA6lO7_oR_og8A9r2nLW4fxEYo=w408-h544-k-no",
  },
  {
    name: "Veliani-ველიანი",
    address: "78 Sairme St, Tbilisi 0194",
    position: { lat: 41.622523, lng: 44.859849 },
    link: "https://maps.app.goo.gl/sUVxRqosLzn1sPYa6",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipNKSCi9iH6MFAA6lO7_oR_og8A9r2nLW4fxEYo=w408-h544-k-no",
  },
];

const place = places[0];

// AIzaSyAZYHFvxRL3hfyegeUk-NFj3KditbnDULg

export default function Locations() {
  const [center, setCenter] = useState<any>();
  const [open, setOpen] = useState<undefined | any>(undefined);

  const handleOpen = (e: any, index: number) => {
    e.domEvent?.stopPropagation();
    setOpen(places[index]);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setCenter({ lat: latitude, lng: longitude });
        },
        (error) => {
          setCenter({ lat: 41.7, lng: 44.2 });
        },
      );
    } else {
      setCenter({ lat: 41.7, lng: 44.2 });
    }
    document.addEventListener("click", () => {
      setOpen(undefined);
    });
  }, []);
  return (
    <div className="fixed pt-20 h-screen w-screen top-0 left-0">
      <APIProvider apiKey="AIzaSyAZYHFvxRL3hfyegeUk-NFj3KditbnDULg">
        <div className="w-screen h-screen">
          {center?.lat && (
            <Map
              mapId={"dea9efd93da45599"}
              defaultZoom={12}
              defaultCenter={center}
            >
              <AdvancedMarker position={center}>
                <Pin borderColor="blue" glyphColor="purple" background="blue" />
              </AdvancedMarker>
              {places.map((place, index) => (
                <AdvancedMarker
                  onClick={(e) => handleOpen(e, index)}
                  position={place.position}
                >
                  <Pin />
                </AdvancedMarker>
              ))}
              {open && (
                <InfoWindow
                  onCloseClick={() => setOpen(false)}
                  position={open.position}
                >
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-64"
                  >
                    <div
                      onClick={() => setOpen(undefined)}
                      className="cursor-pointer rounded-full flex items-center justify-center bg-white/60 w-8 h-8 absolute top-1 right-1"
                    >
                      <p className="text-black font-[900] text-xl font-[Roboto]">
                        X
                      </p>
                    </div>
                    <img
                      className="w-full h-52 object-cover"
                      src="https://lh5.googleusercontent.com/p/AF1QipNKSCi9iH6MFAA6lO7_oR_og8A9r2nLW4fxEYo=w408-h544-k-no"
                      alt="image"
                    />
                    <div className="p-2">
                      <p className="text-lg font-medium">{open.name}</p>
                      <p className="text-[15px] flex items-center gap-1">
                        <Icon icon="fluent:location-12-regular" />
                        {open.address}
                        <Link target="_blank" href={open.link}>
                          <Icon
                            className="w-5 h-5 text-blue-500"
                            icon="fluent:window-new-24-regular"
                          />
                        </Link>
                      </p>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </Map>
          )}
        </div>
      </APIProvider>
    </div>
  );
}
