import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="*" element={< NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
