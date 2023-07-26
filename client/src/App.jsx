import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SavedRecipe from "./pages/SavedRecipe";
import CreateRecipe from "./pages/CreateRecipe";
import Navbar from "./components/Navbar";
import AuthLogin from "./pages/AuthLogin";
import AuthSignup from "./pages/AuthSignup";
import NotImpletedFeatures from "./components/NotImpletedFeatures";

function App() {
  return (
    <main className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved-recipe" element={<SavedRecipe />} />
          <Route path="/auth/signup" element={<AuthSignup />} />
          <Route path="/auth/login" element={<AuthLogin />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
        </Routes>
        <NotImpletedFeatures />
      </Router>
    </main>
  );
}

export default App;
