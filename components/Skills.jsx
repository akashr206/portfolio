"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const skillSet = [
    { src: "/HTML.svg", name: "HTML" },
    { src: "/CSS.svg", name: "CSS" },
    { src: "/JavaScript.svg", name: "JavaScript" },
    { src: "/Python-Dark.svg", name: "Python" },
    { src: "/ExpressJS-Dark.svg", name: "Express.js" },
    { src: "/Github-Dark.svg", name: "GitHub" },
    { src: "/MongoDB.svg", name: "MongoDB" },
    { src: "/NextJS-Dark.svg", name: "Next.js" },
    { src: "/NodeJS-Dark.svg", name: "Node.js" },
    { src: "/React-Dark.svg", name: "React" },
    { src: "/Postman.svg", name: "Postman" },
    { src: "/Vite-Dark.svg", name: "Vite" },
    { src: "/VSCode-Dark.svg", name: "VS Code" },
];

const Skills = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    
    const rotate = useTransform(scrollYProgress, [0.5, 1], ["0deg", "180deg"]);
    const rev = useTransform(scrollYProgress, [0.5, 1], ["360deg", "180deg"]);
    const radius = 200; // Reduced radius for better visibility

    return (
        <section
            ref={ref}
            className="relative flex min-h-screen max-md:flex-col max-md:py-16 p-4 md:p-8 h-[250vh] lg:p-16"
        >
            <motion.div
                style={{ rotate }}
                className="sticky top-28 h-[500px] w-[500px] mx-auto flex items-center justify-center"
            >
                {skillSet.map((skill, i) => {
                    const angle = (i / skillSet.length) * 360;
                    const radians = (angle * Math.PI) / 180;
                    
                    return (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                x: Math.cos(radians) * radius,
                                y: Math.sin(radians) * radius,
                                rotate: rev, // Counter-rotate to keep icons upright
                            }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <img
                                className="w-16 h-16 md:w-20 md:h-20 object-contain cursor-pointer rounded-md shadow-md p-2 bg-white/10 backdrop-blur-sm"
                                src={skill.src}
                                alt={skill.name}
                                title={skill.name}
                            />
                        </motion.div>
                    );
                })}
                
                <div className="absolute w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <span  style={{rotate }} className="text-white font-bold text-xl">Skills</span>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;