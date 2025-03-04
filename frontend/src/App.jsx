import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import NavBar from "./components/NavBar"
import NotFound from "./components/NotFound"

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={< Home />} /> */}
          <Route path="*" element={< NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
