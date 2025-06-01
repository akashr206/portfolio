import { Sparkles } from "lucide-react";

const Badge = ({ text }) => {
    return (
        <div className="rounded-full transition-all duration-300 animate-rotate-border bg-conic/[from_var(--border-angle)] hover:via-fuchsia-500 cursor-default from-75% relative via-85% to-100% from-border via-gray-400 to-border p-px">
            <div className="flex items-center h-full w-full gap-2 px-3.5 py-0.5 rounded-full dark:bg- bg-primary-foreground text-sm text-primary">
                <Sparkles className="w-4 h-4 text-fuchsia-500" />
                <span>{text}</span>
            </div>
        </div>
    );
};

export default Badge;
