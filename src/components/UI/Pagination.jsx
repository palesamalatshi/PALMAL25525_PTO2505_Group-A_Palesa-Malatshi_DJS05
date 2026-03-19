import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";

/**
 * Pagination component using styles.css
 */
export default function Pagination() {
  const { page, setPage, totalPages } = useContext(PodcastContext);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pages.map((p) => (
        <button
          key={p}
          className={p === page ? "active" : ""}
          onClick={() => setPage(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
}