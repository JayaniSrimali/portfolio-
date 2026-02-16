"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder, Layout, Smartphone, Globe, Code } from "lucide-react";
import Link from "next/link";

const allProjects = [
    // Web Development
    {
        title: "Portfolio",
        category: "web",
        description: "Personal portfolio website built with TypeScript and Next.js to showcase projects and skills.",
        tech: ["TypeScript", "Next.js", "Tailwind"],
        github: "https://github.com/JayaniSrimali/portfolio-",
        live: "#"
    },
    {
        title: "Login System",
        category: "web",
        description: "A secure login system implementation using HTML and modern web practices.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/JayaniSrimali/Login-System",
        live: "#"
    },
    {
        title: "Netflix Clone",
        category: "web",
        description: "A clone of the Netflix landing page and interface.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/JayaniSrimali/Netflix-Clone",
        live: "#"
    },
    {
        title: "Food Delivery App (Web)",
        category: "web",
        description: "A web-based food delivery application interface.",
        tech: ["JavaScript", "Frontend"],
        github: "https://github.com/JayaniSrimali/Food-Delivery-App",
        live: "#"
    },
    {
        title: "Online Event Planning",
        category: "web",
        description: "Platform for planning and managing online events effectively.",
        tech: ["Java", "JSP", "Servlet"],
        github: "https://github.com/JayaniSrimali/Online-Event-Planning",
        live: "#"
    },
    {
        title: "Movie Booking System",
        category: "web",
        description: "Online system for booking movie tickets and viewing showtimes.",
        tech: ["HTML", "CSS", "PHP"],
        github: "https://github.com/JayaniSrimali/Movie-booking-system",
        live: "#"
    },
    {
        title: "Online Store Management",
        category: "web",
        description: "Comprehensive system for managing online store inventory and sales.",
        tech: ["JavaScript", "Node.js", "Express"],
        github: "https://github.com/JayaniSrimali/Online-Store-Management",
        live: "#"
    },
    {
        title: "Tea Factory Management System",
        category: "web",
        description: "A software solution to streamline operations of tea manufacturing facilities.",
        tech: ["JavaScript", "MERN Stack"],
        github: "https://github.com/JayaniSrimali/Tea-Factory-Mngement-System",
        live: "#"
    },
   

    // Mobile App & Games
    {
        title: "To-Do List Android Project",
        category: "mobile",
        description: "Simple Android Project for task management.",
        tech: ["Java", "Android Studio"],
        github: "https://github.com/JayaniSrimali/To-Do-List-Android-Project",
        live: "#"
    },
    {
        title: "Snake Game App",
        category: "mobile",
        description: "Classic Snake game developed using modern mobile technologies.",
        tech: ["Kotlin", "Android"],
        github: "https://github.com/JayaniSrimali/Snake-Game-App",
        live: "#"
    },
    {
        title: "Simple Calculator App",
        category: "mobile",
        description: "A basic calculator application for mobile devices.",
        tech: ["Java", "Android"],
        github: "https://github.com/JayaniSrimali/Simple-Calculator-App",
        live: "#"
    },

    // UI/UX Design (Placeholders as none explicitly in repo list)
    {
        title: "Bank App Redesign (Concept)",
        category: "design",
        description: "Modern UI/UX concept for a banking application.",
        tech: ["Figma", "UI/UX"],
        github: "#",
        live: "#"
    }
];

const tabs = [
    { id: "web", label: "Web Development", icon: <Globe className="w-4 h-4" /> },
    { id: "mobile", label: "Mobile App", icon: <Smartphone className="w-4 h-4" /> },
    { id: "design", label: "UI/UX Design", icon: <Layout className="w-4 h-4" /> },
];

export function Projects() {
    const [activeTab, setActiveTab] = useState("web");

    const filteredProjects = allProjects.filter(project => project.category === activeTab);

    return (
        <section id="projects" className="py-24 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Featured <span className="text-primary text-gradient">Projects</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-12" />

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${activeTab === tab.id
                                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-105"
                                    : "bg-card/50 text-muted-foreground border-white/5 hover:bg-white/5 hover:border-white/10"
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05, duration: 0.4 }}
                                    className="group relative bg-card/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-primary/20 hover:border-primary/50 flex flex-col h-full"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Top Folder Icon & Links */}
                                    <div className="p-6 pb-0 flex justify-between items-start relative z-10">
                                        <div className="text-primary group-hover:text-accent transition-colors duration-300 p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20">
                                            {project.category === "design" ? <Layout className="w-8 h-8" /> :
                                                project.category === "mobile" ? <Smartphone className="w-8 h-8" /> :
                                                    <Code className="w-8 h-8" />}
                                        </div>
                                        <div className="flex gap-3 text-muted-foreground/60">
                                            <Link href={project.github} className="p-2 hover:bg-white/10 rounded-full hover:text-white transition-colors">
                                                <Github className="w-5 h-5" />
                                            </Link>
                                            <Link href={project.live} className="p-2 hover:bg-white/10 rounded-full hover:text-white transition-colors">
                                                <ExternalLink className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 pt-4 relative z-10 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="mt-auto">
                                            <div className="h-px w-full bg-white/5 mb-4" />
                                            <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground/80">
                                                {project.tech.map((t) => (
                                                    <li key={t} className="px-2 py-1 rounded bg-secondary/30 border border-white/5 text-primary/80 group-hover:text-accent group-hover:border-accent/20 transition-colors">
                                                        {t}
                                                    </li>
                                                ))}
                                            </ul>
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
