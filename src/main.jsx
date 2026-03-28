import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PodcastProvider } from "./context/PodcastContext";
import "./styles.css";
import { BrowserRouter } from "react-router-dom"; // ✅ IMPORTANT

import { fetchPodcasts } from "./api/fetchPodcast";

async function startApp() {
  const podcasts = await fetchPodcasts();

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter> {/* ✅ THIS FIXES YOUR ERROR */}
        <PodcastProvider podcasts={podcasts}>
          <App />
        </PodcastProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

startApp();