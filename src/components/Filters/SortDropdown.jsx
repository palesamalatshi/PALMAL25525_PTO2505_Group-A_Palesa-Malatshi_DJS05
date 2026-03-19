import { useContext } from "react";
import { SORT_OPTIONS, PodcastContext } from "../../context/PodcastContext";

export default function SortDropdown({ className }) {
  const { sortKey, setSortKey } = useContext(PodcastContext);

  return (
    <select
      className={className} // ✅ pick up CSS from Header
      value={sortKey}
      onChange={(e) => setSortKey(e.target.value)}
    >
      {SORT_OPTIONS.map((o) => (
        <option key={o.key} value={o.key}>
          {o.label}
        </option>
      ))}
    </select>
  );
}