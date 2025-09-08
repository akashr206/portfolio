"use client";
import Badge from "./ui/Badge";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <section
            id="education"
            className="flex items-center flex-col min-h-screen max-md:flex-col pt-16 px-4 md:px-8 py-0 lg:px-16"
        >
            <div className="text-center flex flex-col items-center max-w-2xl">
                <Badge text={"Education"} />
                <h2 className="lg:text-3xl text-2xl font-semibold max-w-sm">
                    My Education
                    <span className="text-fuchsia-500"> Journey</span>
                </h2>
                <p>
                    Currently pursuing my degree, building a strong foundation
                    in tech and getting ready to solve real-world problems.
                </p>
            </div>
            <div className="flex items-center max-lg:flex-col mt-15 gap-10 justify-center">
                <div className="lg:w-[450px]">
                    <img
                        src="/uvce.jpg"
                        alt="uvce"
                        className="h-[350px] shadow-md border object-cover rounded-lg"
                    />
                </div>
                <div className="flex flex-col gap-2 text-left">
                    <h2 className="text-2xl max-w-[550px] lg:w-[450px] font-semibold">
                        University of Visvesvaraya College of Engineering (UVCE){" "}
                    </h2>
                    <p>2024 - Present</p>
                    <p>CGPA : 8 . 7</p>
                </div>
            </div>
            <div className="flex w-full max-lg:max-w-[550px] items-center max-lg:flex-col-reverse mt-15 gap-10 justify-center">
                <div className="flex w-full lg:w-[450px] flex-col text-left gap-1 lg:text-right">
                    <h2 className="text-2xl font-semibold">
                        Narayana PU College
                    </h2>
                    <p>2022 - 2024</p>
                    <p>Grade : 92.5%</p>
                </div>
                <div className="w-full lg:w-[450px]">
                    <img
                        src="/pu.png"
                        alt="narayana-pu"
                        className=" h-[350px] border shadow-md w-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Education;
