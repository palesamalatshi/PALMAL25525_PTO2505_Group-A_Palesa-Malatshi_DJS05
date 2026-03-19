import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

/**
 * Displays detailed info about a single podcast, including seasons and episodes.
 *
 * @param {Object} props
 * @param {Object} props.podcast - The podcast object
 * @param {Array} props.podcast.seasons - Array of seasons
 * @param {Array} props.genres - Array of genre names
 */
export default function PodcastDetail({ podcast, genres }) {
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(0);
  const season = podcast.seasons[selectedSeasonIndex];
  const navigate = useNavigate();

  return (
    <div className="podcast-detail-container">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Podcast Header */}
      <div className="podcast-header">
        <img src={podcast.image} alt="Podcast Cover" className="podcast-cover" />
        <div>
          <h1>{podcast.title}</h1>
          <p>{podcast.description}</p>

          <div className="meta-info">
            <div>
              <p>Genres:</p>
              <div className="tags">
                {genres.map((g, idx) => (
                  <span key={idx} className="tag">{g}</span>
                ))}
              </div>
            </div>

            <div>
              <p>Last Updated:</p>
              <strong>{formatDate(podcast.updated)}</strong>
            </div>

            <div>
              <p>Total Seasons:</p>
              <strong>{podcast.seasons.length}</strong>
            </div>

            <div>
              <p>Total Episodes:</p>
              <strong>
                {podcast.seasons.reduce((acc, s) => acc + s.episodes.length, 0)}
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Season Selection & Episodes */}
      <div className="season-details">
        <div className="season-intro">
          <div className="season-left">
            <img className="season-cover" src={season.image} alt="Season Cover" />
            <div>
              <h3>
                Season {selectedSeasonIndex + 1}: {season.title}
              </h3>
              <p>{season.description}</p>
              <p>{season.episodes.length} Episodes</p>
            </div>
          </div>
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

        <div className="episode-list">
          {season.episodes.map((ep, index) => (
            <div key={index} className="episode-card">
              <img className="episode-cover" src={season.image} alt="" />
              <div className="episode-info">
                <p className="episode-title">
                  Episode {index + 1}: {ep.title}
                </p>
                <p className="episode-desc">{ep.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}