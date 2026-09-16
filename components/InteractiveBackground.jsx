"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";

export default function InteractiveBackground() {
    const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
    const cursorX = useSpring(typeof window !== "undefined" ? window.innerWidth / 2 : 0, springConfig);
    const cursorY = useSpring(typeof window !== "undefined" ? window.innerHeight / 2 : 0, springConfig);

    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    const { scrollY } = useScroll();
    
    const [winHeight, setWinHeight] = useState(800);
    useEffect(() => {
        setWinHeight(window.innerHeight);
    }, []);
    
    const canvasOpacity = useTransform(scrollY, [0, winHeight / 2], [0, 0.4]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const dotRadius = 1.5;
        const spacing = 20;
        const repelRadius = 500;
        const repelForce = 2.5;
        const returnForce = 0.1;
        const friction = 0.8;
        
        let dots = [];
        
        const initCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            dots = [];
            for (let x = 0; x < canvas.width; x += spacing) {
                for (let y = 0; y < canvas.height; y += spacing) {
                    dots.push({
                        baseX: x + spacing / 2,
                        baseY: y + spacing / 2,
                        x: x + spacing / 2,
                        y: y + spacing / 2,
                        vx: 0,
                        vy: 0,
                    });
                }
            }
        };

        const updateAndDraw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
            
            const mouse = mouseRef.current;

            dots.forEach(dot => {
                const dx = mouse.x - dot.x;
                const dy = mouse.y - dot.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < repelRadius) {
                    const force = (repelRadius - distance) / repelRadius;
                    const angle = Math.atan2(dy, dx);
                    
                    dot.vx -= Math.cos(angle) * force * repelForce;
                    dot.vy -= Math.sin(angle) * force * repelForce;
                }
                
                dot.vx += (dot.baseX - dot.x) * returnForce;
                dot.vy += (dot.baseY - dot.y) * returnForce;
                
                dot.vx *= friction;
                dot.vy *= friction;
                
                dot.x += dot.vx;
                dot.y += dot.vy;
                
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            });
            
            animationFrameId = requestAnimationFrame(updateAndDraw);
        };
        
        initCanvas();
        updateAndDraw();

        const handleResize = () => {
            initCanvas();
        };

        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none bg-zinc-950 z-[-1]">
            <div 
                className="absolute inset-0 opacity-[0.03] z-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            <motion.canvas 
                ref={canvasRef} 
                className="absolute inset-0 z-0" 
                style={{ opacity: canvasOpacity }}
            />

            <motion.div
                className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full blur-[100px] opacity-30 md:opacity-40 mix-blend-screen"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "radial-gradient(circle, rgba(217,70,239,0.8) 0%, rgba(6,182,212,0.4) 40%, rgba(0,0,0,0) 70%)"
                }}
            />
            
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-20 mix-blend-screen"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-40%",
                    translateY: "-60%",
                    background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(217,70,239,0.1) 50%, rgba(0,0,0,0) 80%)"
                }}
            />
        </div>
    );
}
