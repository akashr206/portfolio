"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ThemeToggle from "./ui/ThemeToggle";
import Link from "next/link";

const Navbar = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    const width = useTransform(scrollYProgress, [0, 0.2], [1024, 600]);
    return (
        <header className="fixed top-0 left-0 right-0 mx-auto py-4 z-50 w-screen">
            <motion.nav style={{ width }} className="flex mx-auto items-center h-12 rounded-full justify-between w-full bg-card/70 backdrop-blur-sm p-4">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold">
                        AR
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    {["Home", "Projects", "Skills", "Contact"].map((nav)=>(
                        <span key={nav} className="text-sm font-light">
                            <Link href={`#${nav}`}>{nav}</Link>
                        </span>
                    ))}
                </div>
                <ThemeToggle />
            </motion.nav>
        </header>
    );
};

export default Navbar;
