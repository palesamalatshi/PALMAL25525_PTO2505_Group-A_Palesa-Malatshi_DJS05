import Header from "../components/Header";
import PodcastGrid from "../components/PodcastGrid";
import Pagination from "../components/Pagination";

export default function Home() {
  return (
    <div className="app">
      <Header />
      <PodcastGrid />
      <Pagination />
    </div>
  );
}