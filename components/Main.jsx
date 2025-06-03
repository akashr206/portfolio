"use client";
import { useEffect } from "react";
import Lenis from "lenis";
const Main = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return <main>{children}</main>;
};

export default Main;
