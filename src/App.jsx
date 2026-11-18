
import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Herosection";
import "./index.css";
import FeaturedListings from "./Listing";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode ? "app dark" : "app light"}>
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <Hero />
            <FeaturedListings darkMode={darkMode}
                setDarkMode={setDarkMode}/>
        </div>
    );
}

export default App;
