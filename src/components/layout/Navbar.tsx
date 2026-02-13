"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Assuming cn is a utility function you have
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
                scrolled
                    ? "glass-nav py-2" // Use the custom glass-nav class
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground group">
                            Jayani<span className="text-primary group-hover:text-accent transition-colors">.</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-muted-foreground hover:text-primary px-2 py-1 text-sm font-medium transition-colors group"
                                >
                                    {link.name}
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                                </Link>
                            ))}
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                className="px-4 py-2 rounded-full border border-primary text-primary text-xs font-semibold hover:bg-primary/10 transition-all"
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-primary p-2 transition-colors"
                        >
                            <span className="sr-only">Open menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-nav border-t border-white/5 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-muted-foreground hover:text-primary block px-3 py-3 rounded-md text-base font-medium hover:bg-white/5 transition-colors w-full"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                className="mt-4 px-6 py-2 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-primary/10 transition-all inline-block"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
