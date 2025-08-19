"use client";

import { useThemeLoader } from "../hooks/useThemeLoader";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const isThemeLoaded = useThemeLoader();

    if (!isThemeLoaded) return null;

    return <>{children}</>;
}
