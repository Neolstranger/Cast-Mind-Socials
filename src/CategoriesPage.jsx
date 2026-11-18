import { useState } from "react";
import Navbar from "./Navbar";
import BrowseCategories from "./BrowseCategories";

function CategoriesPage() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? "app dark" : "app light"}>
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <BrowseCategories />
        </div>
    );
}

export default CategoriesPage;