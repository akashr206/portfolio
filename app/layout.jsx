import { Poppins, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Akash R | Portfolio",
    description: "I'm Akash! A tech enthusiast who loves coding, and creating cool projects. Check out my work and let’s connect!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} h-[100vw] bg-background overflow-x-hidden antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Navbar />
                    <Main>{children}</Main>
                </ThemeProvider>
            </body>
        </html>
    );
}
