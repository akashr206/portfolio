"use client";
import React, { useRef, useEffect } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useSpring,
    useTransform,
    wrap
} from "framer-motion";

export default function DynamicMarquee({
    children,
    baseVelocity = 1,
    className = "",
    pulseTrigger = false,
}) {
    const baseX = useMotionValue(0);
    const smoothVelocity = useSpring(baseVelocity, {
        damping: 60,
        stiffness: 200,
        mass: 1
    });

    useEffect(() => {
        if (pulseTrigger) {
            smoothVelocity.set(baseVelocity > 0 ? 100 : -100);
            
            const timeout = setTimeout(() => {
                smoothVelocity.set(baseVelocity);
            }, 50);
            
            return () => clearTimeout(timeout);
        } else {
            smoothVelocity.set(baseVelocity);
        }
    }, [pulseTrigger, baseVelocity, smoothVelocity]);

    const wrapOffset = -50;
    const x = useTransform(baseX, (v) => `${wrap(0, wrapOffset, v)}%`);

    useAnimationFrame((t, delta) => {
        let moveBy = smoothVelocity.get() * (delta / 1000);

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className={`overflow-hidden flex whitespace-nowrap flex-nowrap ${className}`}>
            <motion.div className="flex whitespace-nowrap flex-nowrap" style={{ x, willChange: "transform" }}>
                <span className="block pr-8">{children}</span>
                <span className="block pr-8">{children}</span>
                <span className="block pr-8">{children}</span>
                <span className="block pr-8">{children}</span>
            </motion.div>
        </div>
    );
}
