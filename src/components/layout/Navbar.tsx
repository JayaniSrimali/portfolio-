"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Home, User, Folder, Briefcase, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
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
                    ? "glass-nav py-3"
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground group flex items-center gap-2">

                            <span>Jayani<span className="text-primary group-hover:text-accent transition-colors">.</span></span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative flex items-center gap-2 px-4 py-2 rounded-full text-muted-foreground hover:text-white hover:bg-white/5 transition-all group"
                                >
                                    <link.icon className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
                                    <span className="text-sm font-medium">{link.name}</span>
                                </Link>
                            ))}

                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-primary p-2 transition-colors rounded-md hover:bg-white/5"
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
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-white hover:bg-white/5 transition-all w-full group"
                                >
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <link.icon className="w-5 h-5" />
                                    </div>
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-2 border-t border-white/5 px-4">
                                <a
                                    href="/cv.pdf"
                                    target="_blank"
                                    className="flex items-center justify-center w-full px-6 py-3 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
