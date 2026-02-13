"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
    {
        title: "Full Stack Web Development",
        issuer: "University of Moratuwa",
        date: "2023",
        description: "Completed intensive training on MERN stack development.",
        link: "#"
    },
    {
        title: "React Native Mobile App Development",
        issuer: "Udemy",
        date: "2022",
        description: "Mastered cross-platform mobile app creation with React Native.",
        link: "#"
    },
    {
        title: "UI/UX Design Fundamentals",
        issuer: "Google Career Certificates",
        date: "2021",
        description: "learned principles of user-centered design and prototyping.",
        link: "#"
    }
];

export function Certificates() {
    return (
        <section id="certificates" className="py-20 relative bg-[#0a192f]/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Licenses & <span className="text-primary">Certifications</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-card hover:bg-card/80 border border-border p-6 rounded-xl shadow-lg hover:shadow-primary/10 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Award className="w-24 h-24 text-primary" />
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-2 relative z-10">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-primary font-medium mb-4 relative z-10">
                                {cert.issuer} • {cert.date}
                            </p>
                            <p className="text-muted-foreground text-sm mb-6 relative z-10">
                                {cert.description}
                            </p>

                            <a href={cert.link} className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors relative z-10">
                                View Credential <ExternalLink className="w-3 h-3" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
