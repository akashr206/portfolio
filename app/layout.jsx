import { Outfit, JetBrains_Mono, Anton } from "next/font/google";
import "./globals.css";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const anton = Anton({
    variable: "--font-anton",
    subsets: ["latin"],
    weight: "400",
});

export const metadata = {
    title: "Akash R | Portfolio",
    description:
        "I'm Akash! A tech enthusiast who loves coding, and creating cool projects. Check out my work and let’s connect!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${outfit.variable} ${jetbrainsMono.variable} ${anton.variable} font-sans min-h-screen bg-background overflow-x-hidden antialiased`}
            >
                <Navbar />
                <Main>{children}</Main>
            </body>
        </html>
    );
}
