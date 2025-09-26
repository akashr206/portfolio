"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SendMessage from "./SendMessage";

const Contact = () => {
    const ref = useRef(null);
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 1200
    );
    const [translateDistance, setTranslateDistance] = useState(0);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    useEffect(() => {
        const calculateDistance = () => {
            if (textRef.current && containerRef.current) {
                const textWidth = textRef.current.getBoundingClientRect().width;
                const containerWidth =
                    containerRef.current.getBoundingClientRect().width;

                const overflowAmount = textWidth;

                if (overflowAmount > 0) {
                    setTranslateDistance(overflowAmount);
                } else {
                    setTranslateDistance(Math.abs(overflowAmount) / 2);
                }
            }
        };

        const timer = setTimeout(calculateDistance, 200);

        window.addEventListener("resize", calculateDistance);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", calculateDistance);
        };
    }, [windowWidth, translateDistance]);

    const x = useTransform(
        scrollYProgress,
        [0.3, 0.65],
        [0, -translateDistance]
    );

    const handleResize = () => setWindowWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            ref={ref}
            id="contact"
            className="flex flex-col h-[360vh] relative px-4 py-12 md:py-32 lg:py-48"
        >
            <div
                ref={containerRef}
                className="sticky top-20 inset-0 h-[600px] flex items-center justify-start overflow-hidden"
            >
                <motion.h1
                    ref={textRef}
                    className="text-[120px] transition duration-200 ease-linear lg:text-[160px] xl:text-[200px] 2xl:text-[240px] font-semibold leading-tight whitespace-nowrap flex-shrink-0"
                    style={{ x }}
                >
                    Let's Connect and Build Something Awesome
                </motion.h1>
            </div>

            <div className="absolute w-[calc(100%-32px)] bottom-[50vh] translate-y-1/2">
                <SendMessage> </SendMessage>
            </div>
        </section>
    );
};

export default Contact;
