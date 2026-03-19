import React from "react";

/**
 * LoadingState component.
 *
 * Displays a loading message while fetching data.
 *
 * @param {string} message - Message to show (default: "Loading podcasts...")
 */
export default function LoadingState({ message = "Loading podcasts..." }) {
  return (
    <div className="loading-state">
      <p>{message}</p>
    </div>
  );
}