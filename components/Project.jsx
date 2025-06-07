import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, ChevronRight, ExternalLink } from "lucide-react";

const Project = ({ project }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0, 0.3], [1.2, 1]);
    return (
        <div
            ref={ref}
            key={project.id}
            className="rounded-lg overflow-hidden border flex flex-col w-full lg:max-w-[380px] h-full bg-zinc-50 dark:bg-card/90 "
        >
            <div className="h-[220px] relative">
                <span className="absolute transition-all duration-200 opacity-0 flex items-end hover:opacity-100 inset-0 bg-linear-to-b from-transparent to-black/60">
                    <div className="p-4 z-10 flex shrink-0 gap-2">
                        <a
                            href={project.githubUrl}
                            className=" p-2 rounded-full hover:bg-muted/80 bg-muted text-foreground cursor-pointer"
                        >
                            <Github className="w-5 h-5"></Github>
                        </a>
                        <a
                            href={project.liveUrl}
                            className=" p-2 rounded-full hover:bg-muted/80 bg-muted text-foreground cursor-pointer"
                        >
                            <ExternalLink className="w-5 h-5"></ExternalLink>
                        </a>
                    </div>
                </span>
                <motion.img
                    style={{ scale }}
                    src={project.imageUrl}
                    alt=""
                    className="h-full w-full transition-transform duration-200 ease-linear object-center object-cover"
                />
            </div>
            <div className="flex p-6 pb-3 flex-col gap-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-foreground/80">{project.description}</p>
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
                <div className="lg:hidden text-sm ml-1.5 mt-3">
                    <a
                        href={project.liveUrl}
                        className="flex items-center gap-1"
                    >
                        {" "}
                        View Project{" "}
                        <ChevronRight className="w-4.5 h-4.5"></ChevronRight>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
