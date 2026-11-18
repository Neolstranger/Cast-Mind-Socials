
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import CategoriesPage from "./CategoriesPage.jsx";
import PlatformPage from "./PlatformPage.jsx";
import About from "./About.jsx";
import Contact from "./Contact-us.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route
          path="/platform/:platformName"
          element={<PlatformPage />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
