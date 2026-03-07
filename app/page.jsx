"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import LetterAAnimation from "@/components/LetterAAnimation";

export default function Home() {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(true);
    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setTimeout(() => setShowPage(true), 500); 
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="font-[family-name:var(--font-poppins)]">
            <Toaster theme={theme} position="bottom-center" richColors />

            <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 60, opacity: 0, y: -150 }}
                        transition={{ duration: 0.6, ease: "easeIn" }}
                        className="fixed inset-0 z-[51] flex items-center justify-center bg-background"
                    >
                        <LetterAAnimation />
                    </motion.div>
                )}
            </AnimatePresence>

            {showPage && (
                <>
                    <Hero />
                    <Projects />
                    <Skills />
                    {/* <Education /> */}
                    <Contact />
                    <Footer />

                    <div className="fixed bottom-0 left-0 w-full h-24 pointer-events-none z-10">
                        <div className="h-full bg-gradient-to-t from-background/90 to-transparent" />
                    </div>
                </>
            )}
        </div>
    );
}
