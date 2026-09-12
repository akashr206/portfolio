"use client";
import { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
} from "framer-motion";

const skillSet = [
    { src: "/HTML.svg", name: "HTML" },
    { src: "/CSS.svg", name: "CSS" },
    { src: "/JavaScript.svg", name: "JS" },
    { src: "/Python-Dark.svg", name: "Python" },
    { src: "/ExpressJS-Dark.svg", name: "Express" },
    { src: "/Github-Dark.svg", name: "GitHub" },
    { src: "/MongoDB.svg", name: "MongoDB" },
    { src: "/NextJS-Dark.svg", name: "Next.js" },
    { src: "/NodeJS-Dark.svg", name: "Node.js" },
    { src: "/React-Dark.svg", name: "React" },
    { src: "/Postman.svg", name: "Postman" },
    { src: "/Vite-Dark.svg", name: "Vite" },
    { src: "/Tailwind.svg", name: "Tailwind" },
    { src: "/CPP.svg", name: "C++" },
];

const SkillCard = ({ skill, skew }) => {
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
            style={{ skewX: skew }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="group flex flex-col items-center justify-center p-8 bg-zinc-900 border-2 border-white/10 hover:border-white transition-colors duration-300 shadow-none hover:shadow-[6px_6px_0px_white] cursor-default origin-bottom relative overflow-hidden z-10"
        >
            <motion.img
                src={skill.src}
                alt={skill.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4 filter relative z-10"
                animate={{
                    x: isHovered ? magnetPos.x : 0,
                    y: isHovered ? magnetPos.y : 0,
                    scale: isHovered ? 1.05 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.5,
                }}
            />
            <motion.span 
                className="font-mono text-sm md:text-base font-bold text-zinc-400 group-hover:text-zinc-200 uppercase tracking-widest transition-colors duration-300 relative z-10"
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
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });

    const skew = useTransform(smoothVelocity, [-2000, 2000], [20, -20]);

    return (
        <section
            id="skills"
            className="w-full bg-zinc-950 py-24 md:py-40 relative z-10 overflow-hidden"
        >
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[150%] bg-gradient-to-bl from-fuchsia-500/20 via-fuchsia-500/5 to-transparent pointer-events-none transform -skew-x-12 rotate-[15deg] blur-3xl z-0" />

            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">
                <div className="flex flex-col items-center mb-16 md:mb-24 w-full relative">
                    <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-white opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full text-center">
                        SKILLS
                    </h2>
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white relative z-10 text-center">
                        SKILLS
                    </h2>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {skillSet.map((skill, index) => (
                        <SkillCard key={index} skill={skill} skew={skew} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
