"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
    const boxRef = useRef(null);
    const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!boxRef.current) return;
        const rect = boxRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        setMagnetPos({ x: distanceX * 0.2, y: distanceY * 0.2 });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setMagnetPos({ x: 0, y: 0 });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen bg-zinc-950 flex flex-col justify-center overflow-hidden font-sans"
        >
            <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none select-none overflow-hidden py-10">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="whitespace-nowrap"
                        animate={{
                            x: i % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <h1
                            className="text-[15vw] font-black text-transparent bg-clip-text stroke-white leading-none tracking-normal"
                            style={{ WebkitTextStroke: "2px white" }}
                        >
                            AKASH R • DEVELOPER • DESIGNER • CREATOR •
                        </h1>
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 pt-20">
                <motion.div
                    className="md:col-span-12 lg:col-span-8 bg-zinc-900 border-2 border-white p-10 md:p-16 flex flex-col justify-center relative overflow-hidden group"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <h2 className="text-xl md:text-3xl font-bold text-fuchsia-500 mb-2 uppercase tracking-widest">
                        Hello, Visitor
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                        I am Akash R
                    </h1>
                    <p className="text-xl text-zinc-400 font-mono max-w-xl">
                        A passionate developer building smooth, creative, and
                        meaningful experiences on the web.
                    </p>

                    <div
                        className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 group-hover:bg-white/10 transition-colors"
                        style={{
                            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                        }}
                    />
                </motion.div>

                <motion.div
                    ref={boxRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    className="md:col-span-6 lg:col-span-4 bg-fuchsia-500 text-zinc-950 p-10 border-2 border-fuchsia-500 flex items-center justify-center relative overflow-hidden cursor-pointer group"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <motion.div
                        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_#000_3px,_transparent_3px)] bg-[size:24px_24px]"
                        animate={{
                            opacity: isHovered ? 0.4 : 0.15,
                            scale: isHovered ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    />

                    <motion.a
                        href="#contact"
                        className="relative z-10 w-44 h-44 bg-zinc-950 rounded-full flex flex-col items-center justify-center text-white overflow-hidden shadow-2xl hover:bg-zinc-800 transition-colors duration-300"
                        animate={{
                            x: isHovered ? magnetPos.x : 0,
                            y: isHovered ? magnetPos.y : 0,
                            scale: isHovered ? 1.1 : 1,
                        }}
                        whileHover={{ scale: 1.15 }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 15,
                            mass: 0.5,
                        }}
                    >
                        <motion.span
                            className="font-black text-2xl uppercase tracking-widest text-center leading-none z-10"
                            animate={{
                                x: isHovered ? magnetPos.x * 0.4 : 0,
                                y: isHovered ? magnetPos.y * 0.4 : 0,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 150,
                                damping: 15,
                                mass: 0.1,
                            }}
                        >
                            Let's <br /> Talk
                        </motion.span>

                        {/* Rotating ring around the button */}
                        <motion.div
                            className="absolute inset-2 border border-white/20 rounded-full border-dashed pointer-events-none"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    </motion.a>
                </motion.div>

                {/* Action buttons block */}
                <motion.div
                    className="md:col-span-6 lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <a
                        target="_blank"
                        href="https://drive.google.com/drive/folders/1HzTsm0LCTq9skZ-0y5gILBqj52vgSn4Q"
                        className="col-span-1 md:col-span-2 bg-white text-zinc-950 p-6 md:p-8 border-2 border-white flex items-center justify-between hover:bg-zinc-200 transition-colors group"
                    >
                        <span className="text-3xl font-black uppercase tracking-tight">
                            View Resume
                        </span>
                        <ArrowUpRight className="w-12 h-12 group-hover:rotate-45 transition-transform" />
                    </a>
                    <div className="grid grid-cols-2 gap-6">
                        <a
                            target="_blank"
                            href="https://github.com/akashr206"
                            className="bg-zinc-900 text-white border-2 border-white flex items-center justify-center p-6 hover:bg-white hover:text-zinc-950 transition-colors"
                        >
                            <Github className="w-10 h-10" />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/akash-r-55496631b/"
                            className="bg-zinc-900 text-white border-2 border-white flex items-center justify-center p-6 hover:bg-fuchsia-500 hover:border-fuchsia-500 hover:text-zinc-950 transition-colors"
                        >
                            <Linkedin className="w-10 h-10" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
