import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

const PodcastCard = ({ podcast }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/show/${podcast.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
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
        {formatDate(podcast.updated)}
      </p>
    </div>
  );
};

export default PodcastCard;