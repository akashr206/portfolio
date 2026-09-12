"use client";
import Project from "./Project";

const projectsData = [
    {
        id: 4,
        title: "Macroz",
        description:
            "An unified platform to master DSA with visualizers, interactive quizzes, and a structured syllabus.",
        tags: ["Next.js", "MongoDB", "Piston API", "Framer Motion"],
        imageUrl: "/macroz.png",
        githubUrl: "https://github.com/akashr206/MacroZ",
        liveUrl: "https://macrozz.vercel.app",
    },
    {
        id: 1,
        title: "Yukthi",
        description:
            "An AI-powered course generator that can generate a structured, chapter-wise course on any topic.",
        tags: ["Next.js", "Firebase", "Gemini", "Shadcn UI"],
        imageUrl: "/yukthi.png",
        githubUrl: "https://github.com/akashr206/yukthi",
        liveUrl: "https://yukthiii.vercel.app",
    },
    {
        id: 2,
        title: "Mahira",
        description:
            "An e-commerce platform focused on women's fashion, accessories, and more.",
        tags: ["React", "MongoDB", "Express.js", "Tailwind CSS"],
        imageUrl: "/mahira.png",
        githubUrl: "https://github.com/akashr206/yukthi",
        liveUrl: "https://mahira.vercel.app",
    },
    {
        id: 6,
        title: "Arise",
        description:
            "A platform to preserve traditional Indian art forms by giving local artists exposure.",
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
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        imageUrl: "/bug-hunters.png",
        githubUrl: "https://github.com/akashr206/Bussiness-Pro",
        liveUrl: "https://businessproo.vercel.app",
    },
    {
        id: 3,
        title: "Peek Sort",
        description:
            "A sorting algorithm visualizer with an intuitive design, making learning interactive and engaging.",
        tags: ["React", "Tailwind CSS", "Vite"],
        imageUrl: "/peek.png",
        githubUrl: "https://github.com/akashr206/PeekSort",
        liveUrl: "https://peek-sort.vercel.app",
    },
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full bg-zinc-950 flex flex-col relative pt-24 pb-48 z-10"
        >
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-24 sticky top-12 z-0 flex justify-center">
                <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-white opacity-10 text-center">
                    PROJECTS
                </h2>
                <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-white text-center text-4xl md:text-6xl lg:text-[4rem]">
                    PROJECTS
                </h3>
            </div>

            <div className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-[60vh] relative z-10 pb-16 md:pb-[20vh]">
                {projectsData.map((project, index) => {
                    return (
                        <Project 
                            key={project.id} 
                            project={project} 
                            index={index} 
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
