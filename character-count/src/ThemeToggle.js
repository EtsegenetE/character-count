import React, { useEffect, useState } from "react";
import darkmode  from "./image/darkmode.jpg"
import MOON from "./image/MOON.png"

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "darkmode";
    });

    useEffect (() => {
        document.body.classList.toggle("dark-mode", darkMode);
        document.body.classList.toggle("light-mode", !darkMode);
        localStorage.setItem("theme", darkMode ? "darkmode" : "MOON");
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };


    return(
        <div className="theme">

            <button className="theme-btn" 
                    onClick={toggleTheme}>
             <img 
             src={darkMode ? darkmode : MOON } 
             alt={darkMode ? "Dark Mode" : "Light Mode"}
             height="25px" 
             width="25px" /> 
            </button>

        </div>
    );

};

export default ThemeToggle;