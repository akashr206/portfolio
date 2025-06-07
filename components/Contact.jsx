"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
                const containerWidth = containerRef.current.getBoundingClientRect().width;
                
                
                const overflowAmount = textWidth;
                
                if (overflowAmount > 0) {
                    setTranslateDistance(overflowAmount ); 
                } else {
                    setTranslateDistance(Math.abs(overflowAmount) / 2);
                }
                
                console.log('Text width:', textWidth);
                console.log('Container width:', containerWidth);
                console.log('Distance to move:', translateDistance);
            }
        };

        const timer = setTimeout(calculateDistance, 200);
        
        window.addEventListener("resize", calculateDistance);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", calculateDistance);
        };
    }, [ windowWidth, translateDistance]);

    const x = useTransform(
        scrollYProgress, 
        [0.3, 0.7],
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
            className="flex flex-col h-[300vh] relative px-4 py-16 md:py-32 lg:py-48"
        >
            <div 
                ref={containerRef}
                className="sticky top-20 w-full h-[600px] flex items-center justify-start overflow-hidden"
            >
                    <motion.h1
                        ref={textRef}
                        className="text-[120px] lg:text-[160px] xl:text-[200px] 2xl:text-[240px] font-semibold leading-tight whitespace-nowrap flex-shrink-0"
                        style={{ x }}
                    >
                        Let's Connect and Build Something Awesome
                    </motion.h1>
            </div>
            
            <div className="absolute w-full bottom-[50vh] translate-y-1/2">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-8">Ready to Start?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Let's discuss your project and bring your vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                            Get in Touch
                        </button>
                        <button className="px-8 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;