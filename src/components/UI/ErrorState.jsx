import React from "react";

/**
 * ErrorState component.
 *
 * Displays a styled error message when something goes wrong.
 *
 * @param {string} message - The error message to display.
 */
export default function ErrorState({ message }) {
  return (
    <div className="error-state">
      <p>Error: {message}</p>
    </div>
  );
}