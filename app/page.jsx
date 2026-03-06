"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import LetterAAnimation from "@/components/LetterAAnimation";
export default function Home() {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2600);
        return () => clearTimeout(timer);
    }, []);
    if (loading) {
        return (
            <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 70, opacity: 0, y: -150 }}
                transition={{ delay: 1.8, duration: 0.5, ease: "easeIn" }}
                className="flex fixed top-0 w-screen h-screen z-[51] bg-background items-center justify-center"
            >
                <LetterAAnimation />
            </motion.div>
        );
    }
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
