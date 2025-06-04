"use client";
import Badge from "./ui/Badge";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Github, ChevronRight, ExternalLink } from "lucide-react";

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
        <section className="flex min-h-screen max-md:flex-col max-md:py-16 p-4 md:p-8 lg:p-16">
            <div className="md:sticky top-16 h-fit flex flex-col max-md:items-center max-md:mx-auto max-md:text-center max-w-md gap-1">
                <Badge text={"Projects"} />
                <h2 className="lg:text-3xl text-2xl font-semibold max-w-sm">
                    Explore my{" "}
                    <span className="text-fuchsia-500"> recent works</span>
                </h2>
                <p className="">
                    A collection of my personal and collaborative projects —
                    exploring ideas, solving problems, and building things that
                    matter.
                </p>
            </div>
            <div className="p-4 flex w-full">
                <motion.div
                    initial="hidden"
                    className="grid max-[1200px]:grid-cols-1 grid-cols-2 gap-4 justify-center"
                >
                    {projectsData.map((project) => (
                        
                        <div
                            key={project.id}
                            className="rounded-lg overflow-hidden border flex flex-col w-full lg: lg:max-w-[ 360px] bg-zinc-50 dark:bg-card/90 "
                        >
                            <div className="h-[220px] relative">
                                <span className="absolute transition-all duration-200 opacity-0 flex items-end hover:opacity-100 inset-0 bg-linear-to-b from-transparent to-black/60">
                                    <div className="p-4 z-10 flex shrink-0 gap-2">
                                        <a href={project.githubUrl} className=" p-2 rounded-full hover:bg-muted/80 bg-muted text-foreground cursor-pointer">
                                            <Github className="w-5 h-5"></Github>
                                        </a>
                                        <a href={project.liveUrl} className=" p-2 rounded-full hover:bg-muted/80 bg-muted text-foreground cursor-pointer">
                                            <ExternalLink className="w-5 h-5"></ExternalLink>
                                        </a>
                                    </div>
                                </span>
                                <img
                                    src={project.imageUrl}
                                    alt=""
                                    className="h-full w-full object-center object-cover"
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
