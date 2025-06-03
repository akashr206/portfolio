"use client";
import Badge from "./ui/Badge";
import Square from "@/components/Squares/Squares";
import { useRef } from "react";
const Hero = () => {
    const contRef = useRef(null);
    return (
        <section
            id="hero"
            className="flex py-16 flex-col items-center h-[85vh] pt-40 relative"
        >
            <div className="absolute top-0 inset-0 opacity-30 left-0 w-full">
                <Square speed={0.2} direction="up" />
            </div>
            <div className="relative flex flex-col items-center justify-center w-full">
                <span className="my-2.5">
                    <Badge text="Greetings" />
                </span>
                <h1 className="text-5xl font-semibold ">
                    Hello <span className="text-fuchsia-500">Visitor</span>
                </h1>
                <h3 className="text-2xl font-semibold ">
                    <span className="text-fuchsia-500">I'm</span> Akash R
                </h3>
                <svg
                    className="blur-[1px] w-full h-[100px]"
                    viewBox="0 0 100 50"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,50 Q50,-40 100,50"
                        fill="none"
                        strokeWidth="0.4"
                        stroke="url(#gradient)"
                    />
                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                stopColor="oklch(40% 0.295 322.15)"
                            />
                            <stop
                                offset="25%"
                                stopColor="oklch(50% 0.295 322.15)"
                            />
                            <stop
                                offset="50%"
                                stopColor="oklch(66.7% 0.295 322.15)"
                            />
                        </linearGradient>
                    </defs>
                </svg>
                <div
                    ref={contRef}
                    className="flex flex-col items-center text-center md:text-xl max-w-2xl justify-center"
                >
                    <p className="text-zinc-800 mx-4 dark:text-zinc-200">
                        I’m a passionate developer who loves turning ideas into
                        real, usable projects. I enjoy building smooth,
                        creative, and meaningful experiences on the web.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
