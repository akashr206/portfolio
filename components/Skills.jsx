"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import Badge from "./ui/Badge";
import useMobile from "@/hooks/useMobile";

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
    { src: "/CPP.svg", name: "C++" },
];

const Skills = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const isMobile = useMobile();
    const radius = isMobile ? 140 : 230;
    const spacingX = isMobile ? 50 : 90;
    const spacingY = isMobile ? 60 : 100;
    const itemsPerRow = Math.ceil(skillSet.length / 2);

    const rotate = useTransform(scrollYProgress, [0.45, 1], ["0deg", "180deg"]);
    const rev = useTransform(scrollYProgress, [0.45, 1], ["360deg", "180deg"]);
    const curveFactor = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.4, 0.55], [0, 1])
    const opacity = useTransform(scrollYProgress, [0.4, 0.55], [0.5, 1])
    return (
        <section
            ref={ref}
            className="relative items-center flex min-h-screen flex-col max-md:py-16 p-4 md:p-8 h-[250vh] lg:p-16"
        >
            <motion.div className="sticky top-22 h-[500px] lg:h-[700px] w-full md:w-[700px] mx-auto flex items-center justify-center flex-col gap-16 lg:gap-16">
                <div className="text-center flex flex-col items-center gap-2">
                    <Badge text="Skills" />
                    <h2 className="text-2xl lg:text-3xl font-semibold">
                        Stack I{" "}
                        <span className="text-fuchsia-500">Work With</span>
                    </h2>
                    <p className="text-md max-w-xl mx-auto">
                        A collection of technologies I've worked with and feel
                        confident building real-world projects using.
                    </p>
                </div>

                <motion.div
                    style={{ rotate }}
                    className="h-full w-full flex items-center justify-center"
                >
                  <motion.div style={{opacity, scale, rotate : rev}} className="p-2 bg-foreground rounded-full">
                    <div className="md:w-32 md:h-32 h-28 w-28 flex font-semibold items-center justify-center text-lg text-white rounded-full bg-fuchsia-500">
                      <p>My Skills</p>
                    </div>
                  </motion.div>
                    {skillSet.map((skill, i) => {
                        const row = Math.floor(i / itemsPerRow);
                        const col = i % itemsPerRow;
                        const centerOffset = (itemsPerRow - 1) / 2;

                        const baseX = (col - centerOffset) * spacingX;
                        const baseY = (row - 0.5) * spacingY;

                        const angle = (i / skillSet.length) * 2 * Math.PI;
                        const circleX = Math.cos(angle) * radius;
                        const circleY = Math.sin(angle) * radius;

                        const x = useTransform(
                            curveFactor,
                            (v) => baseX * (1 - v) + circleX * v
                        );
                        const y = useTransform(
                            curveFactor,
                            (v) => baseY * (1 - v) + circleY * v
                        );

                        return (
                            <motion.div
                                key={i}
                                className="absolute group flex flex-col items-center"
                                style={{ x, y, rotate: rev }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img
                                    className="w-14 h-14 sm:p-2.5 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain cursor-pointer rounded-md p-2"
                                    src={skill.src}
                                    alt={skill.name}
                                />
                                <motion.span
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 0 }}
                                    whileHover={{ opacity: isMobile ? 0 : 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute pt-[76px] text-sm text-center px-2 py-1 bg-background/0  text-foreground z-10"
                                >
                                    {skill.name}
                                </motion.span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;
