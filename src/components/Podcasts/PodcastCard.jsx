import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

/**
 * Renders a single podcast card with image, title, seasons, genres, and last updated date.
 *
 * @param {Object} props
 * @param {Object} props.podcast - Podcast data object.
 * @param {string} props.podcast.id - Unique podcast ID.
 * @param {string} props.podcast.title - Podcast title.
 * @param {string} props.podcast.image - URL of the podcast cover image.
 * @param {number} props.podcast.seasons - Number of seasons.
 * @param {Array<string>} props.podcast.genreNames - Array of genre names.
 * @param {string} props.podcast.updated - ISO date string.
 *
 * @returns {JSX.Element} Podcast card component.
 */
export default function PodcastCard({ podcast }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/show/${podcast.id}`);
  };

  return (
    <div className="card" onClick={handleNavigate}>
      <img src={podcast.image} alt={`${podcast.title} cover`} />

      <h3>{podcast.title}</h3>

      <div className="tags">
        {podcast.genreNames?.map((g, idx) => (
          <span key={idx} className="tag">
            {g}
          </span>
        ))}
      </div>

      <p>
        {podcast.seasons} season{podcast.seasons > 1 ? "s" : ""}
      </p>

      <p className="updated-text">
        Updated {formatDate(podcast.updated)}
      </p>
    </div>
  );
}