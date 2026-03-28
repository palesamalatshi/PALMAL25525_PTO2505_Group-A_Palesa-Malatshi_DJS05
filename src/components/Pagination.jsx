import React, { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";

export default function Pagination() {

  const { currentPage, setCurrentPage, totalPages } = useContext(PodcastContext);

  return (
    <div className="pagination">

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>

      <span>{currentPage} / {totalPages}</span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>

    </div>
  );
}