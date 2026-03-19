import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ShowDetail from "./pages/ShowDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/show/:id" element={<ShowDetail />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App