"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ThemeToggle from "./ui/ThemeToggle";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const ref = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sections = ["home", "projects", "skills", "contact"];
    const activeSection = useActiveSection(sections);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const width = useTransform(
        scrollYProgress,
        [0, 0.2],
        ["min(1024px, calc(100vw - 2rem))", "min(600px, calc(100vw - 2rem))"]
    );

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 mx-auto py-4 z-50 w-screen px-4">
            <motion.nav
                style={{ width }}
                className={cn(
                    "flex mx-auto items-center h-12 justify-between bg-card/70 backdrop-blur-sm p-4 relative",
                    isMenuOpen ? "rounded-t-xl" : "rounded-full"
                )}
            >
                <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold">AR</span>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    {["Home", "Projects", "Skills", "Contact"].map((nav) => {
                        const id = nav.toLowerCase();
                        const isActive = id == activeSection;
                        return (
                            <span
                                key={nav}
                                className={cn(
                                    "text-sm font-light hover:text-primary flex items-center gap-1 transition-colors",
                                    isActive ? "font-semibold" : ""
                                )}
                            >
                                {isActive && (
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-2 w-2 bg-fuchsia-500 rounded-full mt-[3px]"
                                    ></motion.span>
                                )}
                                <button
                                    className="cursor-pointer"
                                    onClick={() =>
                                        scrollToSection(id.toLowerCase())
                                    }
                                >
                                    {nav}
                                </button>
                            </span>
                        );
                    })}
                </div>

                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={toggleMenu}
                        className="p-1 hover:bg-muted rounded-md transition-colors"
                        aria-label="Toggle menu"
                    >
                        <motion.div
                            animate={{
                                alignItems: isMenuOpen ? "center" : "end",
                                gap: isMenuOpen ? "0" : "6px",
                            }}
                            className="flex flex-col justify-center"
                        >
                            <motion.div
                                animate={{
                                    rotateZ: isMenuOpen ? "45deg" : "0deg",
                                }}
                                className="w-6 h-[2px] rounded-full bg-foreground"
                            ></motion.div>
                            <motion.div
                                animate={{
                                    rotateZ: isMenuOpen ? "-45deg" : "0deg",
                                    width: isMenuOpen ? "24px" : "16px",
                                }}
                                className="w-4 h-[2px] rounded-full bg-foreground"
                            ></motion.div>
                        </motion.div>
                    </button>
                </div>

                <div className="hidden md:block">
                    <ThemeToggle />
                </div>
            </motion.nav>

            <motion.div
                initial={false}
                animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    y: isMenuOpen ? 0 : -10,
                    pointerEvents: isMenuOpen ? "auto" : "none",
                }}
                style={{ width }}
                transition={{ duration: 0.2 }}
                className="md:hidden absolute top-16 left-4 right-4 bg-card/90 backdrop-blur-sm mx-auto rounded-xl rounded-t-none shadow-lg overflow-hidden"
            >
                <div className="py-2">
                    {["Home", "Projects", "Skills", "Contact"].map(
                        (nav, index) => {
                            const id = nav.toLowerCase();
                            const isActive = id == activeSection;

                            return (
                                <motion.div
                                    key={nav}
                                    initial={false}
                                    animate={{
                                        opacity: isMenuOpen ? 1 : 0,
                                        x: isMenuOpen ? 0 : -20,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        delay: isMenuOpen ? index * 0.05 : 0,
                                    }}
                                >
                                    {isActive && (
                                        <motion.span
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="h-2 w-2 bg-fuchsia-500 rounded-full mt-[3px]"
                                        ></motion.span>
                                    )}
                                    <button
                                        className="cursor-pointer"
                                        onClick={() =>
                                            scrollToSection(id.toLowerCase())
                                        }
                                    >
                                        {nav}
                                    </button>
                                </motion.div>
                            );
                        }
                    )}
                </div>
            </motion.div>

            {isMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
                    onClick={closeMenu}
                />
            )}
        </header>
    );
};

export default Navbar;
