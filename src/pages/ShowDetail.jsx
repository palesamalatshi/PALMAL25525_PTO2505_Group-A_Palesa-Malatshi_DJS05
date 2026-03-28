import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchSinglePodcast } from "../api/fetchPodcast";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import PodcastDetail from "../components/PodcastDetail";

export default function ShowDetail() {

  const { id } = useParams();
  const location = useLocation();

  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // optional genre fallback (lecturer pattern)
  const { genres } = location.state || {};

  useEffect(() => {
    async function loadPodcast() {
      try {
        setLoading(true);
        const data = await fetchSinglePodcast(id);
        setPodcast(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadPodcast();
  }, [id]);

  if (loading) return <LoadingState message="Loading podcast..." />;
  if (error) return <ErrorState message={error} />;
  if (!podcast) return <p>No podcast found</p>;

  return (
    <PodcastDetail podcast={podcast} genres={genres} />
  );
}