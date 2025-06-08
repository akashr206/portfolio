import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-border bg-card/30 backdrop-blur-md py-4">
            <div className="mx-10 flex max-lg:flex-col  justify-between items-center space-y-4">
                <div className="flex flex-col gap-3 w-[340px] max-lg:items-center max-lg:text-center">
                    <h2 className="text-2xl font-bold text-fuchsia-500">
                        Akash R
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-sm">
                        Crafting experiences with code. Always building, always
                        learning.
                    </p>
                    <div className="flex justify-center w-max gap-8">
                        <a
                            href="https://github.com/akashr206"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-2 text-foreground hover:text-fuchsia-400 rounded-md hover:bg-accent transition"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5  transition" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/akash-r-55496631b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-md hover:bg-accent transition  text-foreground hover:text-fuchsia-400"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5 transition" />
                        </a>
                        <a
                            href="mailto:akashr6514@gmail.com"
                            className="p-2 rounded-md hover:bg-accent transition  text-foreground hover:text-fuchsia-400"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5 transition" />
                        </a>
                    </div>
                </div>
                <div>&copy; Akash R, Built with ❤️</div>
                <div className="flex flex-col w-[320px] gap-2 max-sm:mx-auto">
                    <iframe
                        style={{ borderRadius: 12 }}
                        src="https://open.spotify.com/embed/playlist/6NxSBQ8BEkQFHU22TvObyt?utm_source=generator"
                        width="100%"
                        height="152"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
}
