import type { Metadata } from "next";
import ThemeProvider from "./components/ThemeProvider";
import "./globals.scss";

export const metadata: Metadata = {
    title: "João Araya",
    description: "I'm a software developer in Brazil and I make websites, webapps and mobile games since 2012.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-us" id="root-app">
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
