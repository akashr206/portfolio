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

    return <main className="my-20">{children}</main>;
};

export default Main;
