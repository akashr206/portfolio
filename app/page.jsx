"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { useTheme } from "next-themes";
import Education from "@/components/Education";
export default function Home() {
    const { theme } = useTheme();
    return (
        <div className="font-[family-name:var(--font-poppins)] ">
            <Toaster
                theme={theme}
                position="bottom-center"
                richColors
            ></Toaster>
            <Hero />
            <Projects />
            <Skills />
            {/* <Education /> */}
            <Contact />
            <Footer />
            <div className="fixed bottom-0 left-0 w-full h-24 pointer-events-none z-10">
                <div className="h-full bg-gradient-to-t from-background/90 to-transparent" />
            </div>
        </div>
    );
}
