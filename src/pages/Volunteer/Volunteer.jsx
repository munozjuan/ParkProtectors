import React from "react";
import UpcomingOpportunities from "../../components/UpcomingOpportunities";  // Correct path
import "../../components/UpcomingOpportunities.css"; // Ensure the styles are imported

export default function Volunteer() {
  return (
    <div className="volunteer-bg">
      <div className="volunteer-page">
        <UpcomingOpportunities />
      </div>
    </div>
  );
}