import { useContext } from "react";
import SearchBar from "../Filters/SearchBar";
import GenreFilter from "../Filters/GenreFilter";
import SortSelect from "../Filters/SortDropdown"; // ✅ FIXED
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
        />

        <SortSelect
          value={sortOption}
          onChange={setSortOption}
        />
      </div>
    </header>
  );
}

export default Header;