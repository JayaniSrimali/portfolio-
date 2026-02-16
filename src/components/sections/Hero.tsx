"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Tags/Badges */}


                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-extrabold text-white mb-2 tracking-tight leading-tight"
                        >
                            I&apos;m <span className="text-white">Jayani Srimali</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#2dd4bf]">
                                Full Stack Developer
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed"
                        >
                            I&apos;m Jayani Srimali, a final year IT undergraduate specializing in Full Stack Development.
                            I thrive on turning complex problems into intuitive, visually polished interfaces that meet functional goals.
                        </motion.p>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex gap-4 mb-8"
                        >
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/in/jayani-srimali-15025b2a5" },
                                { icon: Github, href: "https://github.com/JayaniSrimali" },
                                { icon: Instagram, href: "https://www.instagram.com/jayani_srimali?igsh=MXh0Z3gxZjdlNjZwMg%3D%3D&utm_source=qr" },
                                { icon: Twitter, href: "#" },
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-secondary/50 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <a
                                href="/images/Jayani Srimali .pdf"
                                download="Jayani_Srimali_CV.pdf"
                                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all"
                            >
                                <Download className="w-5 h-5" />
                                Download CV
                            </a>

                            <Link href="#contact" className="flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white/5 transition-all rounded-lg font-bold hover:border-white/40">
                                <Mail className="w-5 h-5" />
                                Contact Me
                            </Link>
                        </motion.div>

                        {/* Stats Row */}


                    </motion.div>

                    {/* Right Image/Illustration - Optimized unique glow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">

                            {/* Image Border/Glow */}
                            <div className="absolute inset-0 rounded-full border-2 border-primary/30 rotate-6 scale-105" />
                            <div className="absolute inset-0 rounded-full border-2 border-accent/30 -rotate-6 scale-105" />

                            {/* White Glow Animation */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.1, 0.3, 0.1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 rounded-full bg-white blur-3xl z-0"
                            />

                            {/* Main Image Container */}
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-muted relative bg-muted flex items-center justify-center group shadow-2xl shadow-primary/20 z-10 transition-transform">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
                                {/* Placeholder for actual image - Using a professional looking placeholder */}
                                <img
                                    src="/images/image.png"
                                    alt="Jayani Srimali"
                                    className="w-full h-full object-contain  transition-transform duration-500 group-hover:scale-110"
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
