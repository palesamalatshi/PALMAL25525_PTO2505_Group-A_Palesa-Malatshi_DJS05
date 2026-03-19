import { useState, useEffect, useContext } from "react";
import { PodcastContext } from "../../context/PodcastContext";

export default function SearchBar({ value, onChange, className }) {
  const { search, setSearch } = useContext(PodcastContext);
  const [inputValue, setInputValue] = useState(search || value || "");

  // Debounce input (300ms) to avoid rapid updates
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearch(inputValue);
      if (onChange) onChange(inputValue);
    }, 300);

    return () => clearTimeout(timeout);
  }, [inputValue]);

  return (
    <input
      type="search"
      placeholder="Search podcasts..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className={className || "controls-input"} // uses your styles.css
    />
  );
}