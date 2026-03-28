import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

export default function PodcastDetail({ podcast }) {
  const navigate = useNavigate();
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(0);

  // ✅ Prevent crashes (VERY IMPORTANT)
  if (!podcast || !podcast.seasons) {
    return <p className="loading-state">Loading podcast...</p>;
  }

  const season = podcast.seasons[selectedSeasonIndex];
  if (!season) return null;

  return (
    <div className="app detail-container">
      {/* BACK BUTTON */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* HEADER */}
      <div className="detail-header">
        <img src={podcast.image} alt={podcast.title} />

        <div className="detail-info">
          <h1>{podcast.title}</h1>

          <p className="description">{podcast.description}</p>

          {/* META INFO (LIKE LECTURER) */}
          <div className="meta">
            <div>
              <p>Last Updated:</p>
              <strong>{formatDate(podcast.updated)}</strong>
            </div>

            <div>
              <p>Total Seasons:</p>
              <strong>{podcast.seasons.length} Seasons</strong>
            </div>

            <div>
              <p>Total Episodes:</p>
              <strong>
                {podcast.seasons.reduce(
                  (acc, s) => acc + s.episodes.length,
                  0
                )}{" "}
                Episodes
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* SEASON SELECT */}
      <div className="season-selector">
        <select
          value={selectedSeasonIndex}
          onChange={(e) => setSelectedSeasonIndex(Number(e.target.value))}
        >
          {podcast.seasons.map((s, i) => (
            <option key={i} value={i}>
              Season {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* SEASON DETAILS */}
      <div className="season-details">
        <div className="season-intro">
          <img src={season.image} alt="" />

          <div>
            <h3>
              Season {selectedSeasonIndex + 1}: {season.title}
            </h3>
            <p className="episode-count">
              {season.episodes.length} Episodes
            </p>
          </div>
        </div>

        {/* EPISODES */}
        <div className="episode-list">
          {season.episodes.map((ep, index) => (
            <div key={index} className="episode-card">
              <img src={season.image} alt="" />

              <div>
                <p>
                  <strong>
                    Episode {index + 1}: {ep.title}
                  </strong>
                </p>
                <p className="description">{ep.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}