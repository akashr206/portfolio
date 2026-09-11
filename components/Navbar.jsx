"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sections = ["home", "projects", "skills", "education", "contact"];
    const activeSection = useActiveSection(sections);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    const scrollToSection = (id) => {
        setIsMenuOpen(false);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 300);
    };

    const navLinks = ["Home", "Projects", "Skills", "Contact"];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 w-full p-4 md:p-8 pointer-events-none flex justify-between items-start">
                
                <div 
                    onClick={() => scrollToSection("home")}
                    className="pointer-events-auto bg-fuchsia-500 text-zinc-950 font-black text-2xl md:text-3xl px-4 py-2 uppercase tracking-tighter cursor-pointer hover:bg-white hover:scale-105 transition-all shadow-xl"
                >
                    AR
                </div>

                <button 
                    onClick={() => setIsMenuOpen(true)}
                    className="pointer-events-auto bg-zinc-950 text-white border-2 border-white/20 font-black text-xl md:text-2xl px-5 py-2 uppercase tracking-widest cursor-pointer hover:bg-white hover:text-zinc-950 transition-colors shadow-xl flex items-center gap-2"
                >
                    <Menu size={24} />
                </button>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                        animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                        exit={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-50 bg-fuchsia-500 flex flex-col justify-center px-10 md:px-24 overflow-hidden"
                    >
                        <div className="absolute inset-0 pointer-events-none overflow-hidden flex flex-col justify-center opacity-10">
                            {[...Array(3)].map((_, i) => (
                                <motion.h1 
                                    key={i}
                                    initial={{ x: i % 2 === 0 ? "0%" : "-50%" }}
                                    animate={{ x: i % 2 === 0 ? "-50%" : "0%" }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="text-[20vw] font-black uppercase whitespace-nowrap leading-none text-zinc-950"
                                >
                                    NAVIGATE • EXPLORE • CONNECT • 
                                </motion.h1>
                            ))}
                        </div>

                        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
                            <button 
                                onClick={() => setIsMenuOpen(false)}
                                className="bg-zinc-950 text-white font-black text-xl md:text-2xl px-5 py-2 uppercase tracking-widest cursor-pointer hover:bg-white hover:text-zinc-950 transition-colors shadow-xl flex items-center gap-2"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-2 md:gap-6 relative z-10">
                            {navLinks.map((nav, index) => {
                                const id = nav.toLowerCase();
                                const isActive = id === activeSection;

                                return (
                                    <div key={nav} className="overflow-hidden">
                                        <motion.button
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            exit={{ y: "100%" }}
                                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1), ease: [0.76, 0, 0.24, 1] }}
                                            onClick={() => scrollToSection(id)}
                                            className={cn(
                                                "text-6xl md:text-[8rem] font-black uppercase tracking-tighter text-left transition-colors duration-300 leading-none",
                                                isActive ? "text-white" : "text-zinc-950 hover:text-white"
                                            )}
                                        >
                                            {nav}
                                        </motion.button>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
