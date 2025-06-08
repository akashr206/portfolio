"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { useTheme } from "next-themes";
export default function Home() {
    const { theme } = useTheme();
    return (
        <div className="font-[family-name:var(--font-poppins)]">
            <Toaster theme={theme} position="bottom-center" richColors></Toaster>
            <Hero />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}
