"use client";
import { useState, useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";

const BrutalistLoader = ({ onComplete }) => {
    const [count, setCount] = useState(0);
    const progress = useMotionValue(0);
    const lineWidth = useTransform(progress, (v) => `${v}%`);

    useEffect(() => {
        const controls = animate(progress, 100, {
            duration: 3,
            ease: [0.76, 0, 0.24, 1],
            onUpdate: (value) => {
                setCount(Math.round(value));
            },
            onComplete: () => {
                setTimeout(() => {
                    if (onComplete) onComplete();
                }, 800);
            }
        });

        return () => controls.stop();
    }, [onComplete, progress]);

    return (
        <motion.div
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-zinc-950 overflow-hidden text-white p-6 md:p-12"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
            {/* Top Bar */}
            <div className="flex justify-between items-start relative z-20">
                <div className="font-bold text-xs md:text-sm uppercase tracking-widest text-zinc-400">
                    AKASH R &copy; {new Date().getFullYear()}
                </div>
                <div className="font-bold text-xs md:text-sm uppercase tracking-widest text-zinc-400 text-right">
                    <span>STATUS: </span>
                    <span className={count === 100 ? "text-fuchsia-500" : "text-white"}>
                        {count === 100 ? "READY" : "LOADING"}
                    </span>
                </div>
            </div>

            {/* Center Content */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
                {/* Background immense text */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 md:opacity-10 pointer-events-none overflow-hidden mix-blend-overlay">
                    <h1 className="text-[50vw] md:text-[40vw] font-black leading-none whitespace-nowrap text-transparent [-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:4px_white]">
                        {count}
                    </h1>
                </div>

                <div className="relative z-10 text-center flex flex-col items-center">
                    <motion.h1 
                        className="text-[35vw] md:text-[20vw] font-black leading-none tracking-tighter"
                    >
                        {count}<span className="text-fuchsia-500">.</span>
                    </motion.h1>
                    <div className="font-black text-xl md:text-3xl uppercase tracking-[0.2em] text-zinc-300 mt-4">
                        PORTFOLIO
                    </div>
                </div>
            </div>

            {/* Bottom Progress Bar */}
            <div className="w-full relative z-20">
                <div className="flex justify-between font-bold text-xs mb-2 text-zinc-500 tracking-widest">
                    <span>00</span>
                    <span>100</span>
                </div>
                <div className="w-full h-1 md:h-2 bg-zinc-800 relative overflow-hidden">
                    <motion.div 
                        className="absolute top-0 left-0 bottom-0 bg-white"
                        style={{ width: lineWidth }}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default BrutalistLoader;
