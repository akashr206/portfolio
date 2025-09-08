"use client";
import Badge from "./ui/Badge";
import Square from "@/components/Squares/Squares";
import { useRef } from "react";
import { Meteors } from "./ui/meteors";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
const Hero = () => {
    const contRef = useRef(null);
    return (
        <section
            id="home"
            className="flex py-16 flex-col overflow-x-hidden items-center h-[85vh] pt-40 relative"
        >
            <Meteors></Meteors>
            <div className="absolute top-0 inset-0 opacity-30 left-0 w-full">
                <Square speed={0.2} direction="up" />
            </div>
            <div className="relative flex flex-col items-center justify-center w-full">
                <span className="my-2.5">
                    <Badge text="Greetings" />
                </span>
                <h1 className="text-5xl font-semibold flex gap-3 ">
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: "linear",
                        }}
                    >
                        Hello{" "}
                    </motion.div>

                    <motion.span
                        initial={{ filter: "blur(10px)" }}
                        animate={{ filter: "blur(0px)" }}
                        transition={{
                            duration: 0.3,
                            ease: "linear",
                        }}
                        className="text-fuchsia-500"
                    >
                        Visitor
                    </motion.span>
                </h1>
                <h3 className="text-2xl flex gap-1.5 font-semibold ">
                    <motion.span
                        initial={{ filter: "blur(10px)" }}
                        animate={{ filter: "blur(0px)" }}
                        transition={{
                            duration: 0.3,
                            ease: "linear",
                        }}
                        className="text-fuchsia-500"
                    >
                        I'm
                    </motion.span>{" "}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: "linear",
                        }}
                    >
                        Akash R
                    </motion.div>{" "}
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
                <div className="mt-3 flex flex-col gap-2">
                    <Button className={"bg-fuchsia-500 hover:bg-fuchsia-600 text-white"}>
                        <a
                            target="_blank"
                            className="flex gap-2 items-center"
                            href="https://drive.google.com/drive/folders/1HzTsm0LCTq9skZ-0y5gILBqj52vgSn4Q"
                        >
                            Resume <ArrowUpRight></ArrowUpRight>
                        </a>
                    </Button>
                    <div className="flex gap-2 justify-between">
                        <Button variant={"secondary"} className={"border"}>
                            <a
                                target="_blank"
                                href={"https://github.com/akashr206"}
                            >
                                <Github />
                            </a>
                        </Button>
                        <Button variant={"secondary"} className={"border"}>
                            <a
                                target="_blank"
                                href={
                                    "https://www.linkedin.com/in/akash-r-55496631b/"
                                }
                            >
                                <Linkedin />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
