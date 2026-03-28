# 🎙️ DJS05 – React Podcast App with Routing, Detail Pages, and Context State

A React-powered podcast explorer that builds on **DJS04** by introducing **multi-page routing**, **dynamic podcast detail views**, and improved **global state management using Context API**. The app provides a seamless experience for browsing, searching, filtering, and exploring podcasts.

---

## 📌 Project Overview

This application allows users to explore a curated list of podcasts with a modern, responsive interface. Users can:

- Search podcasts in real-time
- Filter by genre
- Sort results dynamically
- Navigate using pagination
- View detailed podcast information on a separate page

All features are synchronized using **React Context API**, ensuring a consistent state across the entire application.

---

## ⚡ Key Features

### 🔀 Routing (React Router DOM)
Navigation is handled using `react-router-dom`:

- `/` – Home page with all podcasts, search, filters, sorting, and pagination
- `/show/:id` – Detailed podcast view with full episode and metadata display

---

### 🌐 Podcast Context (Global State Management)
The `PodcastContext` manages application-wide state:

- Podcast dataset
- Search queries
- Sorting logic
- Genre filtering
- Pagination state

This ensures all components stay in sync without prop drilling.

---

### 🔎 Search Functionality
- Case-insensitive search by podcast title
- Updates results dynamically
- Works together with filters, sorting, and pagination

---

### 📊 Sorting Options
Users can sort podcasts by:

- Default order
- Newest updated
- Oldest updated
- Title A → Z
- Title Z → A

---

### 🎭 Genre Filtering
- Filter podcasts by genre
- Genre mapping handled via static `data.js`
- Works alongside search and sorting

---

### 📄 Pagination
- Dynamic pagination based on screen size
- Default: 10 items per page (smaller screens)
- Maintains state across filters, search, and sorting

---

### 🎧 Podcast Detail View
When a podcast is selected:

- Navigates to `/show/:id`
- Fetches full podcast details
- Displays:
  - Title
  - Cover image
  - Description
  - Genres
  - Seasons
  - Episodes list

---

## 🛠️ Technologies Used

- React (Functional Components & Hooks)
- React Router DOM
- Context API (Global State Management)
- JavaScript (ES6+)
- CSS Modules / Styling
- Vite (Build Tool)

---

## 📂 Project Structure

```text
src/
│
├── api/
│   └── fetchPata.js              # Fetch all podcasts & single podcast
│
├── components/
│   ├── Filters/
│   │   ├── SearchBar.jsx
│   │   ├── SortSelect.jsx
│   │   └── GenreFilter.jsx
│   │
│   ├── Podcasts/
│   │   ├── PodcastCard.jsx
│   │   ├── PodcastGrid.jsx
│   │   └── PodcastDetail.jsx
│   │
│   └── UI/
│       ├── Header.jsx
│       ├── Pagination.jsx
│       ├── Loading.jsx
│       ├── Error.jsx
│       └── GenreTags.jsx
│
├── context/
│   └── PodcastContext.jsx        # Global state provider
│
├── pages/
│   ├── Home.jsx                  # Main podcast listing page
│   └── ShowDetail.jsx           # Podcast detail page
│
├── styles/
│   └── *.module.css              # CSS Modules styling
│
├── data.js                       # Genre mapping data
├── App.jsx                       # App routing setup
└── main.jsx                      # React entry point

🚀 How It Works

On load, podcast data is fetched once via PodcastProvider

Search, filter, and sort update shared context state

Filtered results are paginated dynamically

PodcastGrid renders the final list

Clicking a podcast navigates to /show/:id

Detail page fetches and displays full podcast information

▶️ How to Run the Project

1. Clone the repository:
2. Install dependencies: npm install
3. Start development server: npm run dev
4. Open in browser: http://localhost:5173