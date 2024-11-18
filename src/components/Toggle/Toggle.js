import React, { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

function Toggle() {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";

    // Set initial state based on localStorage value
    const [isDarkMode, setIsDarkMode] = useState(savedDarkMode);

    // Toggle dark mode function
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    // Update the body class and localStorage whenever dark mode is toggled
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }

        // Save the dark mode preference in localStorage
        localStorage.setItem("darkMode", isDarkMode);
    }, [isDarkMode]);

    return (
        <button className="transition ease-in-out duration-100" onClick={toggleDarkMode}> {isDarkMode ? <Sun /> : <Moon />} </button>
    );
}

export default Toggle;
