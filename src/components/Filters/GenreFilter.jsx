import { useContext } from "react";
import { PodcastContext } from "../../context/PodcastContext";

export default function GenreFilter({ genres, className }) {
  const { genre, setGenre } = useContext(PodcastContext);

  return (
    <select
      className={className} // ✅ pick up CSS from Header
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