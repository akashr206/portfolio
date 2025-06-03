"use client";
import Badge from "./ui/Badge";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Github, ChevronRight } from "lucide-react";
import { ExternalLink } from "lucide-react";

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
        <section className="flex min-h-screen p-16">
            <div className="sticky top-16 h-fit flex flex-col max-w-md gap-1">
                <Badge text={"Projects"} />
                <h2 className="text-3xl font-semibold max-w-sm">
                    Explore my{" "}
                    <span className="text-fuchsia-500"> recent works</span>
                </h2>
                <p>
                    A collection of my personal and collaborative projects —
                    exploring ideas, solving problems, and building things that
                    matter.
                </p>
            </div>
            <div className="ml-4 p-4 flex w-full">
                <motion.div
                    initial="hidden"
                    className="flex gap-4 justify-center flex-wrap"
                >
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="rounded-lg overflow-hidden cursor-pointer flex flex-col max-w-[360px] bg-zinc-50 dark:bg-card/90 "
                        >
                            <div className="h-[220px] relative">
                                <span className="absolute inset-0 bg-linear-to-b from-transparent to-black/50"></span>
                                <img
                                    src={project.imageUrl}
                                    alt=""
                                    className="h-full w-auto object-cover"
                                />
                            </div>
                            <div className="flex p-6 flex-col gap-2">
                                <h3 className="text-xl font-semibold">
                                    {project.title}
                                </h3>
                                <p className="text-foreground/80">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 transition-all duration-200 hover:text-fuchsia-500 bg-background text-foreground cursor-default border hover:border-fuchsia-500 text-xs font-medium rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
