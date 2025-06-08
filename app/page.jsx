"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
export default function Home() {
    return (
        <div className="font-[family-name:var(--font-poppins)]">
            <Toaster theme="" richColors></Toaster>
            <Hero />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}
