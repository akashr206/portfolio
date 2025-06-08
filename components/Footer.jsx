import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-card/30 backdrop-blur-md text-white py-4">
            <div className="mx-10 flex max-sm:flex-col  justify-between items-center space-y-4">
                <div className="flex flex-col gap-1 max-sm:text-center">
                    <h2 className="text-2xl font-bold text-fuchsia-500">
                        Akash R
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-sm">
                        Crafting experiences with code. Always building, always
                        learning.
                    </p>
                </div>
                <div className="flex flex-col gap-2 max-sm:mx-auto">
                    <div className="flex justify-center gap-8">
                        <a
                            href="https://github.com/akashr206"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-fuchsia-400 transition"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6 text-foreground" />
                        </a>
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-fuchsia-400 transition"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6 text-foreground" />
                        </a>
                        <a
                            href="mailto:akashr6514@gmail.com"
                            className="hover:text-fuchsia-400 transition"
                            aria-label="Email"
                        >
                            <Mail className="w-6 h-6 text-foreground" />
                        </a>
                    </div>
                    <p className="text-xs text-muted-foreground select-none">
                        © {new Date().getFullYear()} Akash R. Built with ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
}
