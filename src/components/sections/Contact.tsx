"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        console.log(formState);
        alert("Message sent! (This is a demo)");
    };

    return (
        <section id="contact" className="py-24 relative bg-background overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        I&apos;m currently looking for new opportunities, my inbox is always open.
                        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="bg-card p-3 rounded-lg border border-border shadow-sm">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                                <a href="mailto:jayani.s@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    jayani.s@example.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-card p-3 rounded-lg border border-border shadow-sm">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                                <p className="text-muted-foreground">+94 77 123 4567</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-card p-3 rounded-lg border border-border shadow-sm">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                                <p className="text-muted-foreground">Colombo, Sri Lanka</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-lg font-semibold text-foreground mb-4">Connect with me</h3>
                            <div className="flex gap-4">
                                <a href="#" className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all hover:-translate-y-1 shadow-sm">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all hover:-translate-y-1 shadow-sm">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:text-primary transition-all hover:-translate-y-1 shadow-sm">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-card border border-border rounded-2xl p-8 shadow-xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                                    placeholder="Project Inquiry"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50 resize-none"
                                    placeholder="Your message here..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/90 transition-all flex justify-center items-center gap-2 group"
                            >
                                Send Message
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
