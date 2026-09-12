import { Github, ExternalLink } from "lucide-react";

const Project = ({ project, index }) => {
    const topOffset = `calc(15vh + ${index * 12}px)`;
    const formattedIndex = (index + 1).toString().padStart(2, "0");

    return (
        <div
            style={{ 
                '--md-top-offset': topOffset,
                zIndex: index + 10 
            }}
            className="relative md:sticky top-auto md:top-[var(--md-top-offset)] w-full max-w-5xl mx-auto bg-zinc-950 border-2 border-white/20 shadow-none md:shadow-[0_-20px_40px_rgba(0,0,0,0.9)] overflow-hidden group flex flex-col transform origin-top transition-all duration-300"
        >
            <div className="w-full aspect-video relative overflow-hidden bg-zinc-900 border-b-2 border-white/20">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                />
            </div>

            <div className="w-full p-6 md:p-8 flex flex-col bg-zinc-950 z-10 border-t-2 border-white/20 relative md:group-hover:border-t-transparent transition-colors duration-500">
                <div className="w-full flex justify-between items-center relative z-20">
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-4">
                        <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-3 md:px-6 md:py-3 bg-zinc-800 text-white hover:bg-white hover:text-zinc-950 transition-colors font-mono font-bold uppercase text-sm"
                        >
                            <Github size={18} /> <span className="hidden md:inline">CODE</span>
                        </a>
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-3 md:px-6 md:py-3 bg-fuchsia-500 text-zinc-950 hover:bg-white hover:text-zinc-950 transition-colors font-mono font-bold uppercase text-sm"
                        >
                            <ExternalLink size={18} /> <span className="hidden md:inline">LIVE</span>
                        </a>
                    </div>
                </div>

                <div className="relative md:absolute md:bottom-full md:left-0 w-full bg-zinc-950 z-10 grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <div className="overflow-hidden">
                        <div className="pt-6 md:p-8 md:pb-0 flex flex-col gap-4 md:gap-6 transform translate-y-0 md:translate-y-4 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 delay-100 border-t-0 md:border-t-2 border-transparent md:group-hover:border-white/20">
                            <p className="text-white font-mono text-sm md:text-lg leading-relaxed max-w-2xl">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 border border-white/20 bg-white/5 font-mono text-xs text-white uppercase shadow-[2px_2px_0px_rgba(255,255,255,0.2)]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
