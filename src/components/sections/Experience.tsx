"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

// Separate data for tabs
const educationData = [
    {
        role: "B.Sc. (Hons) in Information Technology Specializing in Software Engineering",
        company: "SLIIT",
        period: "2022 - Present",
        description: "Undergraduate with a focus on full-stack development, algorithms, and data structures. ",
    },
    {
        role: "G.C.E. Advanced Level (Physical Science Stream)",
        company: "R/Emb/Chandrikawewa Jayanthi Maha Vidyalaya,Embilipitiya,Sri Lankas",
        period: "2018 - 2020",
        description: "Successfully completed with Adavanced Level.",
    },
    {
        role: "G.C.E. Ordinary Level",
        company: "R/Emb/Walawandee Maha Vidyalaya,Embilipitiya,Sri Lanka",
        period: "2017",
        description: "Successfully completed with Ordinary Level.",
    }
];

const experienceData = [
    {
        role: "Frontend Developer - Intern",
        company: "Xsenseys Software Solution",
        period: "2025 April - 2025 November",
        description: "Working on modern web applications, implementing UI/UX designs, and collaborating with backend teams to deliver high-quality software solutions.",
    }
];

export function Experience() {
    const [activeTab, setActiveTab] = useState<"experience" | "education">("education");

    const data = activeTab === "experience" ? experienceData : educationData;

    return (
        <section id="experience" className="py-24 relative bg-background overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Experience & <span className="text-primary text-gradient">Education</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
                </motion.div>

                {/* Custom Tab Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="relative flex p-1 bg-card/50 backdrop-blur-sm border border-white/10 rounded-full w-full max-w-xs md:max-w-sm shadow-xl">
                        {/* Sliding Indicator */}
                        <div
                            className={`absolute inset-y-1 rounded-full bg-gradient-to-r from-primary to-blue-500 shadow-lg transition-all duration-300 ease-in-out`}
                            style={{
                                width: "50%",
                                left: activeTab === "experience" ? "4px" : "calc(50% - 4px)",
                                transform: activeTab === "education" ? "translateX(0)" : "translateX(0)"
                            }}
                        />

                        <button
                            onClick={() => setActiveTab("experience")}
                            className={`relative z-10 flex-1 py-3 text-sm md:text-base font-semibold rounded-full transition-colors duration-200 ${activeTab === "experience" ? "text-white" : "text-muted-foreground hover:text-white"}`}
                        >
                            Experience
                        </button>
                        <button
                            onClick={() => setActiveTab("education")}
                            className={`relative z-10 flex-1 py-3 text-sm md:text-base font-semibold rounded-full transition-colors duration-200 ${activeTab === "education" ? "text-white" : "text-muted-foreground hover:text-white"}`}
                        >
                            Education
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 gap-8"
                        >
                            {data.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative"
                                >
                                    <div className="relative flex flex-col md:flex-row gap-8 items-start">

                                        {/* Date/Period (Left Side) */}
                                        <div className="md:w-64 flex-shrink-0 md:text-right pt-2">
                                            <span className="text-2xl font-bold text-white/90 block">
                                                {item.period.split("-")[0]}
                                            </span>
                                            <span className="text-sm font-mono text-primary/80 font-medium uppercase tracking-wider block mt-1">
                                                {item.period}
                                            </span>
                                        </div>

                                        {/* Timeline Dot & Line */}
                                        <div className="hidden md:flex flex-col items-center self-stretch mx-4">
                                            <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_10px_var(--primary)] z-10" />
                                            <div className="w-0.5 bg-gradient-to-b from-primary/50 to-transparent flex-grow mt-2 group-last:hidden" />
                                        </div>

                                        {/* Content Card (Right Side) */}
                                        <div className="flex-1 w-full bg-card/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:bg-card/60 group-hover:translate-x-2">
                                            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                        {item.role}
                                                    </h3>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <Briefcase className="w-4 h-4 text-accent" />
                                                        <h4 className="text-lg font-medium text-accent">
                                                            {item.company}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground leading-relaxed text-base">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
