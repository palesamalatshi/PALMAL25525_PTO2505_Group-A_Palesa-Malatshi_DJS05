import { useContext } from "react";
import SearchBar from "../Filters/SearchBar";
import GenreFilter from "../Filters/GenreFilter";
import SortDropdown from "../Filters/SortDropdown"; // ✅ renamed
import { PodcastContext } from "../../context/PodcastContext";

function Header() {
  const {
    searchTerm,
    setSearchTerm,
    selectedGenre,
    setSelectedGenre,
    sortOption,
    setSortOption,
    allGenres,
  } = useContext(PodcastContext);

  return (
    <header className="app-header">
      <h1>🎙️ UNMUTED Podcast App</h1>

      <div className="controls">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <GenreFilter
          genres={allGenres}
          value={selectedGenre}
          onChange={setSelectedGenre}
          className="controls-select" // ✅ added
        />

        <SortDropdown
          value={sortOption}
          onChange={setSortOption}
          className="controls-select" // ✅ added
        />
      </div>
    </header>
  );
}

export default Header;