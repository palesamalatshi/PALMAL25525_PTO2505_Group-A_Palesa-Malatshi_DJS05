// src/context/PodcastContext.jsx
import { createContext, useEffect, useState } from "react";
import { fetchPodcasts } from "../api/fetchData"; // make sure this path matches your file

// Named export for the context
export const PodcastContext = createContext();

// Sorting options for SortDropDown
export const SORT_OPTIONS = [
  { key: "latest", label: "Latest" },
  { key: "oldest", label: "Oldest" },
  { key: "az", label: "A → Z" },
  { key: "za", label: "Z → A" },
];

/**
 * PodcastProvider wraps the app and provides all global state:
 * - search (for SearchBar)
 * - genre (for GenreFilter)
 * - sortKey (for SortDropDown)
 * - paginated podcasts
 * - allGenres
 */
export function PodcastProvider({ children }) {
  const [allPodcasts, setAllPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [sortOption, setSortOption] = useState("latest");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [allGenres, setAllGenres] = useState([]);

  // Fetch podcasts on mount
  useEffect(() => {
    fetchPodcasts(setAllPodcasts, setError, setLoading);
  }, []);

  // Extract genres once podcasts load
  useEffect(() => {
    const genresSet = new Set();
    allPodcasts.forEach((p) => {
      if (p.genres) p.genres.forEach((g) => genresSet.add(g));
    });
    setAllGenres(["all", ...Array.from(genresSet)]);
  }, [allPodcasts]);

  // Reset page on filters
  useEffect(() => {
    setPage(1);
  }, [searchTerm, selectedGenre, sortOption]);

  // Apply filters, sort
  const filteredPodcasts = allPodcasts
    .filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((p) =>
      selectedGenre === "all" ? true : p.genres?.includes(selectedGenre)
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "latest":
          return new Date(b.updated) - new Date(a.updated);
        case "oldest":
          return new Date(a.updated) - new Date(b.updated);
        case "az":
          return a.title.localeCompare(b.title);
        case "za":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredPodcasts.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paginatedPodcasts = filteredPodcasts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const value = {
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedGenre,
    setSelectedGenre,
    sortOption,
    setSortOption,
    page: currentPage,
    setPage,
    pageSize,
    totalPages,
    podcasts: paginatedPodcasts,
    allPodcastsCount: filteredPodcasts.length,
    allGenres,
    allPodcasts, // useful for detail pages
  };

  return <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>;
}