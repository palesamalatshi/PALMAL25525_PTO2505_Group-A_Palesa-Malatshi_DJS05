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

export async function fetchPodcasts() {
  const res = await fetch("https://podcast-api.netlify.app/shows");
  if (!res.ok) throw new Error("Failed to fetch podcasts");

  const data = await res.json();

  return data.map((p) => ({
    ...p,
    genreNames: p.genres.map((id) => GENRE_MAP[id])
  }));
}

/**
 * 👇 MOVE THIS TO SAME FILE (OK FOR NOW)
 */
export async function fetchSinglePodcast(id) {
  const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);
  if (!res.ok) throw new Error("Failed to fetch podcast");

  return await res.json();
}