// src/api/fetchData.js

/**
 * Map genre IDs to names
 */
const GENRE_MAP = {
  1: "Personal Growth",
  2: "Investigative Journalism",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Kids & Family"
};

/**
 * Fetch all podcasts from API and convert genre IDs to genre names.
 * Updates state via provided callbacks.
 *
 * @param {Function} setPodcasts - State setter for the podcast list.
 * @param {Function} setError - State setter for error state.
 * @param {Function} setLoading - State setter for loading state.
 */
export async function fetchPodcasts(setPodcasts, setError, setLoading) {
  setLoading(true);

  try {
    const response = await fetch("https://podcast-api.netlify.app/shows");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();

    // Map genre IDs to names
    const podcasts = data.map((podcast) => ({
      ...podcast,
      genreNames: podcast.genres.map((id) => GENRE_MAP[id] || "Unknown")
    }));

    setPodcasts(podcasts);
  } catch (err) {
    console.error("Failed to fetch podcasts:", err);
    setError(err.message || "Unknown error");
  } finally {
    setLoading(false);
  }
}

/**
 * Fetch a single podcast by ID and update state
 *
 * @param {number|string} id - Podcast ID
 * @param {Function} setPodcast - State setter for the single podcast
 * @param {Function} setError - State setter for error state
 * @param {Function} setLoading - State setter for loading state
 */
export async function fetchSinglePodcast(id, setPodcast, setError, setLoading) {
  setLoading(true);

  try {
    const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    // Map genre IDs to names
    const podcast = {
      ...data,
      genreNames: data.genres.map((g) => GENRE_MAP[g] || "Unknown")
    };

    setPodcast(podcast);
  } catch (err) {
    console.error("Failed to fetch single podcast:", err);
    setError(err.message || "Unknown error");
  } finally {
    setLoading(false);
  }
}