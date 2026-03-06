import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const DRAW_DURATION = 1.2;
const DRAW_START = 0;
const FILL_DELAY = 0;
const FILL_DURATION = 0.35;

export default function LetterAAnimation() {
    const measureRef = useRef(null);
    const [pathLength, setPathLength] = useState(null);

    useEffect(() => {
        document.fonts.ready.then(() => {
            requestAnimationFrame(() => {
                const el = measureRef.current;
                if (!el) return;
                const len = el.getTotalLength?.() ?? 2000;
                setPathLength(len);
            });
        });
    }, []);

    const drawEnd = DRAW_START + DRAW_DURATION;
    const fillStart = drawEnd + FILL_DELAY - 0.3;
    const totalStrokeDuration = DRAW_DURATION + FILL_DURATION;

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
        .letter-svg-text {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 380px;
          dominant-baseline: auto;
        }
        .letter-animation-wrapper {
          width: 100%;
          max-width: min(380px, 88vw);
          aspect-ratio: 380 / 420;
        }
        .letter-animation-wrapper svg {
          width: 100%;
          height: 100%;
          display: block;
        }
      `}</style>

            <div
                style={{
                    background: "transparent",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <div className="letter-animation-wrapper">
                    <svg
                        viewBox="0 0 380 420"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <text
                            ref={measureRef}
                            className="letter-svg-text"
                            x="50%"
                            y="400"
                            textAnchor="middle"
                            fill="none"
                            stroke="transparent"
                            strokeWidth="6"
                            style={{ opacity: 0, pointerEvents: "none" }}
                        >
                            A
                        </text>

                        <motion.text
                            className="letter-svg-text"
                            x="50%"
                            y="400"
                            textAnchor="middle"
                            fill="#c026d3"
                            stroke="none"
                            initial={{ opacity: 0 }}
                            animate={
                                pathLength !== null
                                    ? { opacity: 1 }
                                    : { opacity: 0 }
                            }
                            transition={{
                                delay: fillStart,
                                duration: FILL_DURATION,
                                ease: "easeIn",
                            }}
                        >
                            A
                        </motion.text>

                        {pathLength !== null && (
                            <motion.text
                                className="letter-svg-text"
                                x="50%"
                                y="400"
                                textAnchor="middle"
                                fill="none"
                                stroke="#c026d3"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray={pathLength}
                                initial={{
                                    strokeDashoffset: pathLength,
                                    opacity: 1,
                                }}
                                animate={{
                                    strokeDashoffset: [pathLength, 0, 0],
                                    opacity: [1, 1, 0],
                                }}
                                transition={{
                                    delay: DRAW_START,
                                    duration: totalStrokeDuration,
                                    times: [
                                        0,
                                        DRAW_DURATION / totalStrokeDuration,
                                        1,
                                    ],
                                    ease: "easeInOut",
                                }}
                            >
                                A
                            </motion.text>
                        )}
                    </svg>
                </div>
            </div>
        </>
    );
}
