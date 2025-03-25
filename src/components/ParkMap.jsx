import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";
import "./ParkMap.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const API_KEY = "9Iv3vmk7eHVd36eCvvUbIYeMOCjZre7GYYckCsfZ";

// Fix default icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ParkMap = () => {
  const [parks, setParks] = useState([]);
  const [filteredParks, setFilteredParks] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    const fetchParks = async () => {
      try {
        const res = await fetch(
          `https://developer.nps.gov/api/v1/parks?limit=500&api_key=${API_KEY}`
        );
        const data = await res.json();
        const parksWithCoords = data.data.filter(
          (park) => park.latitude && park.longitude
        );
        setParks(parksWithCoords);
        setFilteredParks(parksWithCoords);
      } catch (error) {
        console.error("Error fetching parks:", error);
      }
    };

    fetchParks();
  }, []);

  useEffect(() => {
    let filtered = parks;

    if (search) {
      filtered = filtered.filter((park) =>
        park.fullName.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedState) {
      filtered = filtered.filter((park) =>
        park.states.includes(selectedState)
      );
    }

    setFilteredParks(filtered);
  }, [search, selectedState, parks]);

  const uniqueStates = [
    ...new Set(parks.flatMap((p) => p.states.split(","))),
  ].sort();

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-primary-700 mb-6">
          Find A National Park
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
          <input
            type="text"
            placeholder="Search for a park..."
            className="px-4 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 w-full md:w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="px-4 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 w-full md:w-1/3 text-gray-200"
          >
            <option value="">Select a State</option>
            {uniqueStates.map((stateCode) => (
              <option key={stateCode} value={stateCode}>
                {stateCode}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      <motion.div
        className="map-wrapper shadow-lg rounded-xl overflow-hidden max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <MapContainer
          center={[39.5, -98.35]}
          zoom={4}
          scrollWheelZoom={false}
          className="rounded-xl w-full h-[600px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredParks.map((park) => (
            <Marker
              key={park.id}
              position={[
                parseFloat(park.latitude),
                parseFloat(park.longitude),
              ]}
            >
              <Popup>
                <strong>{park.fullName}</strong>
                <br />
                {park.addresses?.[0]?.city || ""},{" "}
                {park.addresses?.[0]?.stateCode || ""}
                <br />
                <a
                  href={park.url}
                  className="text-primary-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </motion.div>
    </section>
  );
};

export default ParkMap;
