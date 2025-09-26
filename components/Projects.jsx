"use client";
import Badge from "./ui/Badge";
import { motion } from "framer-motion";
import Project from "./Project";

const projectsData = [
    {
        id: 1,
        title: "Yukthi - AI Course Generator",
        description:
            "An AI-powered course generator that can generate a structured, chapter-wise course on any topic.",
        tags: ["Next.js", "Firebase", "Gemini", "Shadcn UI"],
        imageUrl: "/yukthi.png",
        githubUrl: "https://github.com/akashr206/yukthi",
        liveUrl: "https://yukthiii.vercel.app",
    },
    {
        id: 2,
        title: "Mahira Fashions",
        description:
            "An e-commerce platform focused on women's fashion, accessories, and more.",
        tags: ["React", "MongoDB", "Express.js", "Tailwind CSS"],
        imageUrl: "/mahira.png",
        githubUrl: "https://github.com/akashr206/yukthi",
        liveUrl: "https://mahira.vercel.app",
    },
    {
        id: 6,
        title: "Arise (CodeFury)",
        description:
            "A platform to preserve traditional Indian art forms by giving local artists exposure and connecting them with art lovers and buyers.",
        tags: ["Next.js", "MongoDB", "Cloudinary", "Gemini API"],
        imageUrl: "/codefury.png",
        githubUrl: "https://github.com/akashr206/Arise-Codefury",
        liveUrl: "https://arise-codefury.vercel.app",
    },
    {
        id: 5,
        title: "Bug Hunters",
        description:
            "A modern business website with smooth animations, professional UI, and clear call-to-actions for customers.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Type Script"],
        imageUrl: "/bug-hunters.png",
        githubUrl: "https://github.com/akashr206/Bussiness-Pro",
        liveUrl: "https://businessproo.vercel.app",
    },
    {
        id: 3,
        title: "Peek Sort",
        description:
            "A sorting algorithm visualizer with an intuitive design, making learning interactive and engaging.",
        tags: ["React", "Frontend", "Tailwind CSS", "Vite"],
        imageUrl: "/peek.png",
        githubUrl: "https://github.com/akashr206/PeekSort",
        liveUrl: "https://peek-sort.vercel.app",
    },
    {
        id: 4,
        title: "UVCE Confessions",
        description:
            "A confessions website where uvce students can anonymously share their thoughts and secrets.",
        tags: ["React.js", "MongoDB", "Captcha", "Express.js"],
        imageUrl: "/confession.png",
        githubUrl: "https://github.com/akashr206/ConfessionsFrontend",
        liveUrl: "https://uvce-confessions.vercel.app",
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="flex min-h-screen max-md:flex-col max-md:py-16 p-4 md:p-8 lg:p-16"
        >
            <div className="md:sticky top-16 h-fit flex flex-col max-md:items-center max-md:mx-auto max-md:text-center max-w-md gap-1">
                <Badge text={"Projects"} />
                <h2 className="lg:text-3xl text-2xl font-semibold max-w-sm">
                    Explore my{" "}
                    <span className="text-fuchsia-500"> recent works</span>
                </h2>
                <p>
                    A collection of my personal and collaborative projects -
                    exploring ideas, solving problems, and building things that
                    matter.
                </p>
            </div>
            <div className="p-4 flex w-full">
                <motion.div
                    initial="hidden"
                    className="grid ml-auto max-[1200px]:grid-cols-1  place-items-center grid-cols-2 gap-4 justify-center"
                >
                    {projectsData.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
