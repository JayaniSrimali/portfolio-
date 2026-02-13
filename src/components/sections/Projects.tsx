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
        <section id="projects" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-[#112240] rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-xl"
                        >
                            {/* Top Folder Icon & Links */}
                            <div className="p-6 pb-0 flex justify-between items-start">
                                <div className="text-primary">
                                    <Folder className="w-10 h-10" />
                                </div>
                                <div className="flex gap-4 text-muted-foreground">
                                    <Link href={project.github} className="hover:text-primary transition-colors">
                                        <Github className="w-5 h-5" />
                                    </Link>
                                    <Link href={project.live} className="hover:text-primary transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <ul className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground/80 mt-auto">
                                    {project.tech.map((t) => (
                                        <li key={t}>{t}</li>
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
