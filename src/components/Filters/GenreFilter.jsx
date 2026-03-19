import { useContext } from "react";
import { PodcastContext } from "../../context/PodcastContext";

/**
 * Dropdown to select podcast genre.
 *
 * @param {{genres: {id: number, title: string}[]}} props – list of genres
 */
export default function GenreFilter({ genres }) {
  const { genre, setGenre } = useContext(PodcastContext);

  return (
    <select
      className="controls-select" // use existing styles.css classes
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
    >
      <option value="all">All Genres</option>
      {genres.map((g) => (
        <option key={g.id} value={g.id}>
          {g.title}
        </option>
      ))}
    </select>
  );
}