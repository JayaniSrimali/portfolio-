"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-accent font-medium tracking-wide text-lg mb-4 block"
                        >
                            Hi, I&apos;m
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight"
                        >
                            Jayani Srimali
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6"
                        >
                            Full Stack Developer
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed"
                        >
                            I&apos;m a final year IT undergraduate and full stack developer.
                            I build scalable web applications by combining frontend, backend,
                            and database technologies.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href="#contact" className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-md font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40">
                                <Mail className="w-4 h-4" />
                                Contact Me
                            </Link>
                            <Link href="/cv.pdf" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-transparent border border-primary text-primary hover:bg-primary/10 transition-all rounded-md font-medium group">
                                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                                Download CV
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Image/Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Image Border/Glow */}
                            <div className="absolute inset-0 rounded-full border-2 border-primary/30 rotate-6 scale-105" />
                            <div className="absolute inset-0 rounded-full border-2 border-accent/30 -rotate-6 scale-105" />

                            {/* Main Image Container */}
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-muted relative bg-muted flex items-center justify-center group shadow-2xl shadow-primary/20">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
                                {/* Placeholder for actual image - Using a professional looking placeholder */}
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
                                    alt="Jayani Srimali"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Floating Icon */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -bottom-4 -left-4 bg-card border border-border p-3 rounded-xl shadow-xl z-20"
                            >
                                <span className="text-2xl">👩‍💻</span>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
