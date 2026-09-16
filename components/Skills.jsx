"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const categorizedSkills = [
    {
        category: "Languages",
        colorClass: "hover:border-red-500 hover:shadow-[6px_6px_0px_#ef4444]",
        textHoverClass: "group-hover:text-red-400",
        items: [
            { src: "/JavaScript.svg", name: "JavaScript" },
            { src: "/CPP.svg", name: "C++" },
            { src: "/Python-Dark.svg", name: "Python" },
            { src: null, name: "SQL", short: "SQL" },
        ],
    },
    {
        category: "Core CS",
        colorClass: "hover:border-blue-500 hover:shadow-[6px_6px_0px_#3b82f6]",
        textHoverClass: "group-hover:text-blue-400",
        items: [
            { src: null, name: "Data Structures & Algorithms", short: "DSA" },
            { src: null, name: "Operating Systems", short: "OS" },
            { src: null, name: "OOPs", short: "OOP" },
        ],
    },
    {
        category: "Backend",
        colorClass: "hover:border-cyan-500 hover:shadow-[6px_6px_0px_#06b6d4]",
        textHoverClass: "group-hover:text-cyan-400",
        items: [
            { src: "/NodeJS-Dark.svg", name: "Node.js" },
            { src: "/ExpressJS-Dark.svg", name: "Express.js" },
            {
                src: "https://skillicons.dev/icons?i=redis",
                name: "Redis",
                short: "RD",
            },
            {
                src: "https://skillicons.dev/icons?i=docker",
                name: "Docker",
                short: "DK",
            },
            {
                src: null,
                name: "REST APIs",
                short: "API",
            },
        ],
    },
    {
        category: "Frontend",
        colorClass:
            "hover:border-fuchsia-500 hover:shadow-[6px_6px_0px_#d946ef]",
        textHoverClass: "group-hover:text-fuchsia-400",
        items: [
            { src: "/React-Dark.svg", name: "React.js" },
            { src: "/NextJS-Dark.svg", name: "Next.js" },
            { src: "/Tailwind.svg", name: "Tailwind CSS" },
            {
                src: "/framer.png",
                name: "Framer Motion",
                short: "FM",
            },
        ],
    },
    {
        category: "Databases",
        colorClass:
            "hover:border-emerald-500 hover:shadow-[6px_6px_0px_#10b981]",
        textHoverClass: "group-hover:text-emerald-400",
        items: [
            {
                src: "https://skillicons.dev/icons?i=mysql",
                name: "MySQL",
                short: "SQL",
            },
            { src: "/MongoDB.svg", name: "MongoDB" },
            {
                src: "https://skillicons.dev/icons?i=firebase",
                name: "Firebase",
                short: "FB",
            },
        ],
    },
    {
        category: "Tools",
        colorClass:
            "hover:border-yellow-500 hover:shadow-[6px_6px_0px_#eab308]",
        textHoverClass: "group-hover:text-yellow-400",
        items: [
            { src: "/Github-Dark.svg", name: "Git/GitHub" },
            { src: "/Postman.svg", name: "Postman" },
        ],
    },
];

const SkillCard = ({ skill, colorClass, textHoverClass }) => {
    const cardRef = useRef(null);
    const [magnetPos, setMagnetPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
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
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className={`group flex flex-1 min-w-[140px] md:min-w-[200px] flex-col items-center justify-center p-6 md:p-8 bg-zinc-900 border-2 border-white/10 transition-colors duration-300 shadow-none hover:border-white hover:shadow-[6px_6px_0px_white] cursor-default origin-bottom relative overflow-hidden z-10`}
        >
            {skill.src ? (
                <motion.img
                    src={skill.src}
                    alt={skill.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4 filter relative z-10"
                    animate={{
                        x: isHovered ? magnetPos.x : 0,
                        y: isHovered ? magnetPos.y : 0,
                        scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 15,
                        mass: 0.5,
                    }}
                />
            ) : (
                <motion.div
                    className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center bg-zinc-800 rounded-lg border-2 border-white/10 relative z-10"
                    animate={{
                        x: isHovered ? magnetPos.x : 0,
                        y: isHovered ? magnetPos.y : 0,
                        scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 15,
                        mass: 0.5,
                    }}
                >
                    <span className="text-2xl md:text-3xl font-black text-zinc-400 group-hover:text-white transition-colors">
                        {skill.short}
                    </span>
                </motion.div>
            )}
            <motion.span
                className={`font-mono text-sm md:text-base font-bold text-zinc-400 uppercase tracking-widest text-center transition-colors duration-300 relative z-10 group-hover:text-white`}
                animate={{
                    x: isHovered ? magnetPos.x * 0.4 : 0,
                    y: isHovered ? magnetPos.y * 0.4 : 0,
                    scale: isHovered ? 1.05 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
            >
                {skill.name}
            </motion.span>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section
            id="skills"
            className="w-full bg-transparent py-24 relative z-10 overflow-clip"
        >
            <div className="w-full relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-32">
                <div className="flex flex-col items-center w-full relative">
                    <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-white opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full text-center">
                        SKILLS
                    </h2>
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white relative z-10 text-center">
                        SKILLS
                    </h2>
                </div>

                <div className="flex flex-col gap-24 md:gap-32 relative">
                    {categorizedSkills.map((categorySection, i) => (
                        <div
                            key={i}
                            className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative"
                        >
                            <div className="lg:w-1/3 relative">
                                <div className="sticky top-32 z-20">
                                    <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
                                        {categorySection.category}
                                    </h3>
                                    <div className="w-16 h-2 bg-white mt-6 opacity-20"></div>
                                </div>
                            </div>

                            <div className="lg:w-2/3 flex flex-wrap gap-4 md:gap-6">
                                {categorySection.items.map((skill, index) => (
                                    <SkillCard
                                        key={index}
                                        skill={skill}
                                        colorClass={categorySection.colorClass}
                                        textHoverClass={
                                            categorySection.textHoverClass
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
