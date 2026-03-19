import React from "react";
import { genres as genreMap } from "../data"; // adjust path to your data.js

/**
 * GenreTags component.
 *
 * Displays a list of genre tags for an array of genre IDs.
 *
 * @param {number[]} genres - Array of genre IDs
 */
export default function GenreTags({ genres }) {
  return (
    <div className="tags">
      {genres.map((id) => {
        const match = genreMap.find((g) => g.id === id);
        return (
          <span key={id} className="tag">
            {match ? match.title : `Unknown (${id})`}
          </span>
        );
      })}
    </div>
  );
}