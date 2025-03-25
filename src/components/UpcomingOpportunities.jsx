import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UpcomingOpportunities.css";
import { motion } from 'framer-motion';


export default function Volunteer() {
  const [searchState, setSearchState] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();

  const states = ["California", "Arizona", "Florida", "Montana", "Colorado", "Wyoming", "Maine", "Utah"];

  const events = [
    {
      name: "Trail Restoration Day",
      date: "Saturday, April 20 | 10 AM - 3 PM",
      location: "Yosemite National Park",
      description: "Help restore trails, remove invasive plants, and maintain paths for hikers.",
      state: "California"
    },
    {
      name: "Tree Planting Event",
      date: "Sunday, April 28 | 1 PM - 5 PM",
      location: "Yellowstone National Park",
      description: "Join a reforestation effort to plant native trees and support wildlife.",
      state: "Wyoming"
    },
    {
      name: "Wildlife Habitat Cleanup",
      date: "Saturday, May 4 | 9 AM - 12 PM",
      location: "Rocky Mountain National Park",
      description: "Help remove litter, restore habitats, and ensure a clean environment for wildlife.",
      state: "Colorado"
    },
    {
      name: "Park Guide Training",
      date: "Saturday, May 11 | 10 AM - 1 PM",
      location: "Grand Canyon National Park",
      description: "Learn guiding skills to educate visitors and enhance their park experience.",
      state: "Arizona"
    },
    {
      name: "Beach Cleanup Day",
      date: "Sunday, May 19 | 8 AM - 12 PM",
      location: "Acadia National Park",
      description: "Join us in cleaning up coastal areas to protect marine wildlife and keep our beaches beautiful.",
      state: "Maine"
    },
    {
      name: "Nature Photography Workshop",
      date: "Saturday, May 25 | 2 PM - 6 PM",
      location: "Zion National Park",
      description: "Learn wildlife and landscape photography techniques while exploring the beauty of Zion.",
      state: "Utah"
    },
    {
      name: "Forest Trail Mapping",
      date: "Saturday, June 8 | 9 AM - 2 PM",
      location: "Glacier National Park",
      description: "Assist in mapping hiking trails and documenting trail conditions for park updates.",
      state: "Montana"
    }
  ];

  const filteredEvents = events.filter(event =>
    (
      event.name.toLowerCase().includes(searchState.toLowerCase()) ||
      event.location.toLowerCase().includes(searchState.toLowerCase()) ||
      searchState === ''
    ) &&
    (
      event.state.toLowerCase().includes(selectedState.toLowerCase()) || selectedState === ''
    )
  );

  return (
    <div className="volunteer-page">
      <motion.h1
  className="text-4xl font-bold text-center text-primary-900 mb-4"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Volunteer Page
</motion.h1>

      <div className="search-row">
        <input
          type="text"
          placeholder="Search by park name or event..."
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
          className="search-input"
        />
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="dropdown-select"
        >
          <option value="">All States</option>
          {states.map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))}
        </select>
      </div>

      <div className="opportunities-header">
  <h2>Upcoming Volunteer Opportunities</h2>
  <p>Join us for our upcoming volunteer events!</p>
</div>


      <div className="events-container">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div key={index} className="event-card">
              <h3>{event.name}</h3>
              <p className="event-date"><strong>{event.date}</strong></p>
              <p className="event-location">{event.location}</p>
              <p className="event-description">{event.description}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1 / -1", color: "#444" }}>
            No volunteer events match your search.
          </p>
        )}
      </div>
    </div>
  );
}
