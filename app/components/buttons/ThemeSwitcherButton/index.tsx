"use client";

import { useState, useEffect } from "react";
import './style.scss';

export default function ThemeSwitcherButton() {
    const [theme, setTheme] = useState("");

    // Load option theme on localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "darkTheme" ? "" : "darkTheme";
        setTheme(newTheme);

        // Update className on <html>
        const html = document.documentElement;
        if (newTheme) {
            html.classList.add(newTheme);
        } else {
            html.classList.remove("darkTheme");
        }

        // Save option on LocalStorage
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button onClick={toggleTheme} className="themeSwitch" title="Theme Switch" />
    );
}