// src/components/UI/Header.jsx
import { useContext } from "react";
import SearchBar from "../Filters/SearchBar";
import GenreFilter from "../Filters/GenreFilter";
import SortDropDown from "../Filters/SortDropDown";
import { PodcastContext } from "../../context/PodcastContext";

/**
 * Header component with search, genre filter, and sort dropdown.
 */
export default function Header() {
  const { allGenres } = useContext(PodcastContext);

  return (
    <header className="app-header">
      <h1>🎙️ UNMUTED Podcast App</h1>

      <div className="controls">
        <SearchBar />

        <GenreFilter genres={allGenres} />

        <SortDropDown />
      </div>
    </header>
  );
}