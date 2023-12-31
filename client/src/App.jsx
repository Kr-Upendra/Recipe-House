import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import { CategoryContext } from "./context/categoryContext";
import About from "./pages/About";
import AuthPage from "./pages/AuthPage";

export default function App() {
  const [showCategory, setShowCategory] = useState(true);
  return (
    <>
      <CategoryContext.Provider value={{ showCategory, setShowCategory }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate replace to="all-recipes" />} />
              <Route path="all-recipes" element={<Home />} />
              <Route path="all-recipes/:slug" element={<Detail />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="signup" element={<AuthPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CategoryContext.Provider>
    </>
  );
}
