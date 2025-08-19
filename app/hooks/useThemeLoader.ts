"use client";

import { useEffect, useState } from "react";

export function useThemeLoader() {
    const [isThemeLoaded, setIsThemeLoaded] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            document.documentElement.classList.add(savedTheme);
        }

        setIsThemeLoaded(true);
    }, []);

    return isThemeLoaded;
}
