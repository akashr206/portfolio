"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BrutalistLoader = ({ onComplete }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            current += Math.floor(Math.random() * 15) + 5;
            if (current >= 100) {
                current = 100;
                clearInterval(interval);
                setTimeout(() => {
                    if (onComplete) onComplete();
                }, 800);
            }
            setCount(current);
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950 overflow-hidden"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
            <motion.h1 
                className="text-[20vw] font-black text-white leading-none tracking-tighter"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {count}%
            </motion.h1>
            <div className="absolute bottom-10 left-10 text-white/50 font-mono text-sm uppercase tracking-widest">
                Loading Stuff
            </div>
        </motion.div>
    );
};

export default BrutalistLoader;
