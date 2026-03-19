import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/UI/Header";
import Home from "./pages/Home";
import ShowDetail from "./pages/ShowDetail";
import { PodcastProvider } from "./context/PodcastContext";

/**
 * Root component of the Podcast Explorer app.
 */
function App() {
  return (
    <BrowserRouter>
      <PodcastProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<ShowDetail />} />
        </Routes>
      </PodcastProvider>
    </BrowserRouter>
  );
}

export default App;