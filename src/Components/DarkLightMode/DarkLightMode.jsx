
import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa6";
const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // Apply theme to the document element
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Handle toggle change
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className="flex justify-end p-4 bg-gray-500 mr-6">
            <label className="swap swap-rotate">
                {/* This hidden checkbox controls the state */}
                <input
                    type="checkbox"
                    onChange={toggleTheme}
                    checked={theme === "dark"}
                />

                {/* Sun Icon */}

                <FaMoon className="text-2xl" />

                {/* Moon Icon */}

                <FaRegMoon className="text-2xl" />
            </label>
        </div>
    );
};

export default ThemeToggle;
