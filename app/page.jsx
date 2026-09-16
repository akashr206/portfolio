"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

import { motion, AnimatePresence } from "framer-motion";
import BrutalistLoader from "@/components/BrutalistLoader";

import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [showPage, setShowPage] = useState(false);

    const handleLoaderComplete = () => {
        setLoading(false);
        setTimeout(() => setShowPage(true), 300);
    };

    return (
        <div>
            <Toaster theme="dark" position="bottom-center" richColors />

            <AnimatePresence>
                {loading && (
                    <BrutalistLoader onComplete={handleLoaderComplete} />
                )}
            </AnimatePresence>

            {showPage && (
                <>
                    <InteractiveBackground />

                    <div className="relative z-10 pointer-events-none [&>*]:pointer-events-auto">
                        <Hero />
                        <Projects />
                        <Skills />
                        {/* <Education /> */}
                        <Contact />
                        <Footer />
                    </div>

                    <div className="fixed bottom-0 left-0 w-full h-24 pointer-events-none z-10">
                        <div className="h-full bg-gradient-to-t from-background/90 to-transparent" />
                    </div>
                </>
            )}
        </div>
    );
}
