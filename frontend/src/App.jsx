import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import NavBar from "./components/NavBar"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import AuthPage from "./pages/AuthPage"

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/register" element={<ProtectedRegister />}/>
          <Route path="/" element={< Home />} />
          <Route path="*" element={< NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
