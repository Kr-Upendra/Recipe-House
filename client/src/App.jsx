import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SavedRecipe from "./pages/SavedRecipe";
import CreateRecipe from "./pages/CreateRecipe";
import AuthLogin from "./pages/AuthLogin";
import AuthSignup from "./pages/AuthSignup";
import Layout from "./components/layouts/Layout";
import AuthLayout from "./components/layouts/AuthLayout";
import RecipeLayout from "./components/layouts/RecipeLayout";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <main className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<AuthLayout />}>
              <Route path="auth/signup" element={<AuthSignup />} />
              <Route path="auth/login" element={<AuthLogin />} />
            </Route>
            <Route path="recipe" element={<RecipeLayout />}>
              <Route path="recipe-detail/:slug" element={<RecipeDetail />} />
              <Route path="create-recipe" element={<CreateRecipe />} />
              <Route path="saved-recipes" element={<SavedRecipe />}>
                <Route path=":slug" element={<RecipeDetail />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
