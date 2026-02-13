"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with cart functionality, user authentication, and Stripe payments.",
        tech: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
        github: "#",
        live: "#"
    },
    {
        title: "Portfolio Website",
        description: "A responsive portfolio website to showcase projects and skills with modern animations.",
        tech: ["React.js", "Framer Motion", "EmailJS"],
        github: "#",
        live: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative task manager with real-time updates and team workspace features.",
        tech: ["MERN Stack", "Socket.io", "Redux"],
        github: "#",
        live: "#"
    },
    {
        title: "Event Booking System",
        description: "An event management platform allowing users to book tickets and organizers to manage events.",
        tech: ["Node.js", "PostgreSQL", "Express"],
        github: "#",
        live: "#"
    },
    {
        title: "Fitness Tracker App",
        description: "Mobile-responsive application to track workouts, diet, and progress over time.",
        tech: ["React Native", "Firebase", "Chart.js"],
        github: "#",
        live: "#"
    },
    {
        title: "Food Delivery App",
        description: "A delivery service application connecting users with local restaurants and drivers.",
        tech: ["Flutter", "Dart", "Google Maps API"],
        github: "#",
        live: "#"
    }
];

export function Projects() {
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
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-card/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-primary/20 hover:border-primary/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Top Folder Icon & Links */}
                            <div className="p-6 pb-0 flex justify-between items-start relative z-10">
                                <div className="text-primary group-hover:text-accent transition-colors duration-300">
                                    <Folder className="w-10 h-10" />
                                </div>
                                <div className="flex gap-4 text-muted-foreground/60">
                                    <Link href={project.github} className="hover:text-primary transition-colors hover:scale-110 transform">
                                        <Github className="w-5 h-5" />
                                    </Link>
                                    <Link href={project.live} className="hover:text-primary transition-colors hover:scale-110 transform">
                                        <ExternalLink className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 relative z-10">
                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                                    {project.description}
                                </p>

                                <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground/80 mt-auto">
                                    {project.tech.map((t) => (
                                        <li key={t} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-primary/80 group-hover:text-accent group-hover:border-accent/20 transition-colors">
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
