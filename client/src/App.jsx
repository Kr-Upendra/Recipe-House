import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="all-recipes" />} />
            <Route path="all-recipes" element={<Home />} />
            <Route path="all-recipes/:slug" element={<Detail />} />
            <Route path="category" element={<Home />} />
            <Route path="about" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signup" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
