// src/components/Filters/SearchBar.jsx
import { useState, useEffect, useContext } from "react";
import { PodcastContext } from "../../context/PodcastContext";

/**
 * Search input with debounced update.
 */
export default function SearchBar() {
  const { search, setSearch } = useContext(PodcastContext);
  const [value, setValue] = useState(search || "");

  // Debounce input (300ms) to avoid rapid updates
  useEffect(() => {
    const id = setTimeout(() => setSearch(value), 300);
    return () => clearTimeout(id);
  }, [value]);

  return (
    <input
      type="search"
      placeholder="Search podcasts…"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="controls-select" // using existing styles.css styling
    />
  );
}