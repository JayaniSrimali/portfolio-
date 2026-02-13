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
        description: "Undergraduate with a focus on full-stack development, algorithms, and data structures. Dean's List for Academic Excellence.",
    },
    {
        role: "G.C.E. Advanced Level (Physical Science Stream)",
        company: "Anula Vidyalaya, Nugegoda",
        period: "2018 - 2020",
        description: "Successfully completed with 2 A's and 1 B pass. Z-Score: 1.6345",
    },
    {
        role: "G.C.E. Ordinary Level",
        company: "Anula Vidyalaya, Nugegoda",
        period: "2017",
        description: "Passed with 9 A's including Mathematics, Science and English.",
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
    const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

    const data = activeTab === "experience" ? experienceData : educationData;

    return (
        <section id="experience" className="py-24 relative bg-background overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Experience & <span className="text-primary">Education</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
                </motion.div>

                {/* Custom Tab Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="relative flex p-1 bg-card/50 backdrop-blur-sm border border-white/10 rounded-full w-full max-w-xs md:max-w-sm shadow-xl">
                        {/* Sliding Indicator */}
                        <motion.div
                            layoutId="activeTab"
                            className="absolute inset-y-1 rounded-full bg-gradient-to-r from-primary to-blue-500 shadow-lg"
                            initial={false}
                            animate={{
                                x: activeTab === "experience" ? 0 : "100%",
                                width: "50%" // Since there are 2 tabs
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                            className="space-y-8"
                        >
                            {data.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8 md:pl-0 group"
                                >
                                    {/* Timeline Line (for larger screens) */}
                                    <div className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent group-last:bg-none" />

                                    {/* Timeline Dot (for larger screens) */}
                                    <div className="hidden md:block absolute left-[8.5rem] top-6 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_var(--primary)] -translate-x-[5px] z-10" />

                                    {/* Mobile Timeline Line */}
                                    <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-white/10" />
                                    <div className="md:hidden absolute left-[-5px] top-6 w-3 h-3 bg-primary rounded-full" />


                                    <div className="md:flex gap-12 items-start">
                                        {/* Date Column */}
                                        <div className="hidden md:block w-32 pt-5 text-right flex-shrink-0">
                                            <span className="text-sm font-mono text-primary/80 font-semibold tracking-wider">
                                                {item.period.split("-")[0]}
                                            </span>
                                        </div>

                                        {/* Content Card */}
                                        <div className="flex-1 bg-gradient-to-br from-card to-card/50 border border-white/5 p-6 rounded-2xl shadow-lg hover:border-primary/30 transition-all duration-300 hover:shadow-primary/5 group-hover:translate-x-2">
                                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                        {item.role}
                                                    </h3>
                                                    <h4 className="text-lg font-medium text-accent mt-1">
                                                        {item.company}
                                                    </h4>
                                                </div>
                                                <div className="md:hidden flex items-center gap-2 text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                                                    <Calendar className="w-3 h-3" />
                                                    {item.period}
                                                </div>
                                                {/* Desktop Period Range Display */}
                                                <div className="hidden md:flex items-center gap-2 text-xs font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                                    <Calendar className="w-3 h-3" />
                                                    {item.period}
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
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
