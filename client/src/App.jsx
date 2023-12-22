import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="all-recipes" />} />
            <Route path="all-recipes" element={<Home />} />
            <Route path="category" element={<Home />} />
            <Route path="about" element={<Home />} />
            <Route path="contact" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
