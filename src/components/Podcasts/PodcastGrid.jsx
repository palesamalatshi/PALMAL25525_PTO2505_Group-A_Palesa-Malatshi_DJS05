import { useContext } from "react";
import PodcastCard from "./PodcastCard";
import LoadingState from "../UI/Loading";
import ErrorState from "../UI/Error";
import EmptyState from "../UI/EmptyState";
import { PodcastContext } from "../../context/PodcastContext";

/**
 * Renders a responsive grid of podcasts using filtered and paginated data from context.
 * Shows loading, error, or empty states when appropriate.
 */
export default function PodcastGrid() {
  const { podcasts, loading, error } = useContext(PodcastContext);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} />;
  if (!podcasts || podcasts.length === 0) return <EmptyState />;

  return (
    <div className="grid-container">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </div>
  );
}