import { useEffect, useRef, useState } from "react";
import React from "react";
import "./styles.css";
import "ol/ol.css";
import { Map } from "ol";
import { map } from "./mapLyres";
import { useContext } from "react";
import { addIcon } from "./mapLyres";
import axios from "axios";
import StoreIcon from "@mui/icons-material/Store";
import getToken from "../../utiles/getToken";

interface StoreLocations {
  name: string;
  coordinates: { x: number; y: number };
}
export function useMap() {
  const mapRef = useRef<Map>();
  if (!mapRef.current) {
    mapRef.current = map;
  }
  return mapRef.current;
}

export default function MapView() {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap();
  useEffect(() => {
    if (mapRef.current) {
      map.setTarget(mapRef.current);
      map.updateSize();
    }
  }, [map]);

  const [storeLocations, setStoreLocations] = useState<StoreLocations[] | null>(
    null
  );

  useEffect(() => {
    const getStoreData = async () => {
      try {
        const response = await axios.get(
          `https://api-service-store-projects.onrender.com/api/storeLocations`, { headers: { "authorization": getToken() }});
        setStoreLocations(response.data);
      } catch (error) {
        console.log("error to fetch data", error);
      }
    };
    getStoreData();
  }, []);
  const storeData = storeLocations;

  if (!storeData) return null;

  const icons =
    "https://play-lh.googleusercontent.com/R94TS80bs6dluM2dO06FXwRPwcFw_SFG3T264LCvpoQgLFV8hNzbauOykSz-0kT9aQ=w240-h480-rw";

  storeData.map((store) => {
    addIcon(store.name, [store.coordinates.x, store.coordinates.y], icons);
  });
  return (
    <div className="App">
      <h1>store location</h1>
      <div className="map-container">
        <div id="map" ref={mapRef}></div>
      </div>
    </div>
  );
}
