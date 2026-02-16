"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Data for the About Section
const tags = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "UI/UX Designer"];

const stats = [
    { label: "Projects", value: "20+" },
    { label: "Certificates", value: "10+" },
    { label: "Years", value: "1" },
];



const values = [
    "Clean & Maintainable Code",
    "User-Centered Developmen",
    "Performance Optimization",
    "Team Collaboration ",
    "Continuous learning",
    "Attention to Detail",
    "Scalable Architecture",
    "Iterative Development",
];

const valueTags = [
    "Full Stack Development",
    "React + Tailwind",
    "Node.js & Express",
    "REST & GraphQL APIs",
    "Database Design (MongoDB/MySQL)",
    "Responsive Design",
    "Prototyping & UI/UX (Figma/XD)",
    "Design Systems & Best Practices",
    "Performance Optimization",
    "CI/CD & Deployment"
];


const skills = [
    { name: "UI/UX Design (Figma / XD)", percentage: 92 },
    { name: "React (Frontend)", percentage: 80 },
    { name: "HTML / CSS / JavaScript", percentage: 88 },
    { name: "Android / Kotlin", percentage: 75 },
    { name: "Graphic Design (Adobe PS / AI)", percentage: 95 },
];

const tools = [
    { name: "Figma", type: "Core" },
    { name: "Adobe XD", type: "Core" },
    { name: "Photoshop", type: "Core" },
    { name: "Illustrator", type: "Core" },
    { name: "React", type: "Core" },
    { name: "Tailwind", type: "Core" },
    { name: "JavaScript", type: "Core" },
    { name: "HTML", type: "Core" },
    { name: "CSS", type: "Core" },
    { name: "Android Studio", type: "Core" },
    { name: "Kotlin", type: "Core" },
];

export function About() {
    return (
        <section id="about" className="py-20 relative bg-background text-foreground overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-muted-foreground text-lg mb-8 leading-relaxed">
                        I&apos;m Fourth-year Computing undergraduate and aspiring Full Stack Developer, passionate about building scalable web applications, solving complex problems, and delivering clean, user-centered digital solutions.
                    </p>

                    {/* Tags for Header */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {tags.map((tag) => (
                            <span key={tag} className="px-4 py-1.5 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:border-primary/50 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Main 3-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">

                    {/* Left Column: Image Card (Span 4) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-4 h-full"
                    >
                        <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden group border border-border/50">
                            <Image
                                src="/images/JayniSrimali(Profile).png"
                                alt="Jayani Srimali"
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-100"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Bottom Text */}
                            <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                                <p className="text-white/90 text-sm font-medium">
                                    Sri Lanka - Open to remote collaborations
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Middle Column: Short Bio (Span 4) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-4 bg-card rounded-2xl p-8 border border-border flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-4">Short Bio</h3>
                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                I&apos;m a Full Stack-focused computing undergraduate passionate about building efficient, scalable, and user-centered web applications. I specialize in translating complex requirements into clean, maintainable, and high-performance software solutions that deliver real value to users and businesses. With experience across frontend, backend, and database systems, I strive to create seamless, intuitive, and reliable digital experiences.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                <li className="flex gap-2">
                                    <span className="text-primary">•</span> Building clean, functional, and maintainable frontend & backend systems

                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary">•</span> Integrating APIs and managing databases effectively
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary">•</span> Solving complex problems with optimized, reliable solutions
                                </li>
                            </ul>
                        </div>

                        {/* Stats Row */}
                        {/* <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div> */}
                    </motion.div>

                    {/* Right Column: Values (Span 4) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:col-span-4 bg-card rounded-2xl p-8 border border-border flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-4">Values</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                {values.map((val, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-primary" />
                                        {val}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Value Tags */}
                        <div className="flex flex-wrap gap-2">
                            {valueTags.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-secondary/50 rounded-full text-[10px] text-muted-foreground border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Skills & Tools Section */}
                {/* <h3 className="text-2xl font-bold mb-8">Skills & Tools</h3> */}



            </div>
        </section>
    );
}
