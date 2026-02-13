"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Server } from "lucide-react";

const skills = [
    "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js",
    "Node.js", "Express.js", "MongoDB", "SQL",
    "Tailwind CSS", "Framer Motion", "Git/GitHub", "REST APIs"
];

export function About() {
    return (
        <section id="about" className="py-20 relative bg-[#0a192f]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6 text-muted-foreground text-lg leading-relaxed"
                    >
                        <p>
                            I&apos;m Jayani Srimali, a final year IT undergraduate and full stack developer who loves complex
                            problem-solving for efficient web applications. I&apos;m eager to contribute, learn, and deliver
                            scalable software solutions with measurable impact while continuing to grow as a software engineer.
                        </p>

                        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                            <h3 className="text-foreground font-semibold text-xl mb-4 flex items-center gap-2">
                                <span className="text-accent">🚀</span> Short Bio
                            </h3>
                            <ul className="space-y-3 text-sm md:text-base">
                                <li className="flex gap-2">
                                    <span className="text-primary mt-1">▹</span>
                                    <span>I&apos;m a smart-working undergraduate who enjoys building competitive, user-friendly web applications.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary mt-1">▹</span>
                                    <span>I facilitate modern user interfaces using React.js/Next.js and Tailwind CSS.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary mt-1">▹</span>
                                    <span>I build scalable backend logic with Node.js, Express.js, and manage data with MongoDB/SQL.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Skills / Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-foreground">Technical Skills</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.05 * index }}
                                    className="bg-card hover:bg-card/80 border border-border hover:border-primary/50 p-3 rounded-lg text-center text-sm font-medium transition-colors cursor-default"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-primary/10 to-transparent p-4 rounded-xl border border-primary/20 flex flex-col items-center justify-center text-center gap-2">
                                <Globe className="w-8 h-8 text-primary" />
                                <span className="font-semibold text-foreground">Web Development</span>
                            </div>
                            <div className="bg-gradient-to-br from-accent/10 to-transparent p-4 rounded-xl border border-accent/20 flex flex-col items-center justify-center text-center gap-2">
                                <Server className="w-8 h-8 text-accent" />
                                <span className="font-semibold text-foreground">Backend Systems</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
