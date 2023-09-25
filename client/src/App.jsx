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
import RecipeDetailPage from "./pages/RecipeDetailPage";
import Career from "./pages/Career";
import ApplicationForm from "./components/forms/ApplicationForm";
import CareerLayout from "./components/layouts/CareerLayout";

function App() {
  return (
    <main className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="career" element={<CareerLayout />}>
              <Route index element={<Career />} />
              <Route path=":id" element={<ApplicationForm />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="auth/signup" element={<AuthSignup />} />
              <Route path="auth/login" element={<AuthLogin />} />
            </Route>
            <Route path="recipe" element={<RecipeLayout />}>
              <Route
                path="recipe-details/:slug"
                element={<RecipeDetailPage />}
              />
              <Route path="create-recipe" element={<CreateRecipe />} />
              <Route path="saved-recipes" element={<SavedRecipe />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
