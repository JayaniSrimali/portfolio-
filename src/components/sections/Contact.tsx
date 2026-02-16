"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Globe, Send, ArrowRight } from "lucide-react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: "" });

        // EmailJS Configuration
        // 1. Sign up at https://www.emailjs.com/
        // 2. Create a new Email Service (e.g., Gmail) -> Get Service ID
        // 3. Create a new Email Template -> Get Template ID
        // 4. Go to Account -> API Keys -> Get Public Key
        const serviceId = "service_l2epj69"; // Replace with your Service ID
        const templateId = "template_9bpjz7k"; // Replace with your Template ID
        const publicKey = "nfTKUBl-bhhepxytu"; // Replace with your Public Key



        try {
            await emailjs.send(serviceId, templateId, formState, publicKey);
            setStatus({ type: 'success', message: "Message sent successfully! I'll get back to you soon." });
            setFormState({ name: "", email: "", subject: "", projectType: "", budget: "", timeline: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus({ type: 'error', message: "Failed to send message. Please try again later or email me directly." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative bg-background overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
                        Let&apos;s <span className="text-primary">talk</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Tell me about your idea, product, or open role. I usually respond within a day.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Contact Info (Span 4) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-4 h-full"
                    >
                        <div className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between">
                            <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
                            <p className="text-sm text-muted-foreground mb-8">
                                Prefer email or a quick call? I&apos;m flexible. For detailed proposals, use the form.
                            </p>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Email</div>
                                        <a href="mailto:yasiruln215@gmail.com" className="text-sm font-medium hover:text-primary transition-colors">
                                            jayanisrimali666@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Phone</div>
                                        <div className="text-sm font-medium">+94 70 327 2666</div>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Location</div>
                                        <div className="text-sm font-medium">Kaduwela, Sri Lanka</div>
                                    </div>
                                </div>

                                {/* Response Time */}
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Response</div>
                                        <div className="text-sm font-medium">24 hrs (Mon-Fri)</div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <h4 className="text-sm font-semibold mb-4 text-muted-foreground">Elsewhere</h4>
                            <div className="flex gap-3 mb-6">
                                <a href="https://github.com/JayaniSrimali" target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-white/5 text-xs font-medium hover:bg-white/10 transition-colors">
                                    <Github className="w-4 h-4" /> GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/jayani-srimali-15025b2a5" target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-white/5 text-xs font-medium hover:bg-white/10 transition-colors">
                                    <Linkedin className="w-4 h-4" /> LinkedIn
                                </a>
                            </div>
                        </div>



                    </motion.div>

                    {/* Right Column: Dynamic Form (Span 8) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:col-span-8 h-full"
                    >
                        <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden h-full">
                            {/* Form Glow */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2">Project / Inquiry Form</h3>
                                <p className="text-muted-foreground text-sm mb-8">
                                    Share a bit about your goals and constraints budget, timeline, team, and links help.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {/* Name & Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-white/5 focus:border-primary/50 focus:bg-secondary/50 outline-none transition-all placeholder:text-muted-foreground/30 text-sm"
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-white/5 focus:border-primary/50 focus:bg-secondary/50 outline-none transition-all placeholder:text-muted-foreground/30 text-sm"
                                                placeholder="you@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Subject & Project Type */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Subject *</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formState.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-white/5 focus:border-primary/50 focus:bg-secondary/50 outline-none transition-all placeholder:text-muted-foreground/30 text-sm"
                                                placeholder="Brief topic"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project type</label>
                                            <select
                                                name="projectType"
                                                value={formState.projectType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-white/5 focus:border-primary/50 focus:bg-secondary/50 outline-none transition-all text-muted-foreground/70 text-sm appearance-none cursor-pointer"
                                            >
                                                <option value="">Select a project type</option>
                                                <option value="web">Web Development</option>
                                                <option value="app">Mobile App</option>
                                                <option value="design">UI/UX Design</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>



                                    {/* Message */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message *</label>
                                        <textarea
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-white/5 focus:border-primary/50 focus:bg-secondary/50 outline-none transition-all placeholder:text-muted-foreground/30 text-sm resize-none"
                                            placeholder="Share goals, scope, links, and constraints..."
                                            required
                                        />
                                    </div>

                                    {/* Footer Action */}
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
                                        <p className="text-xs text-muted-foreground order-2 md:order-1">
                                            By sending, you agree to be contacted back about your inquiry.
                                        </p>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="order-1 md:order-2 px-8 py-3 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-primary/90 transition-all flex items-center gap-2 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send message
                                                    <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    {status.message && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`p-4 rounded-lg text-sm font-medium ${status.type === 'success'
                                                ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                                                : 'bg-red-500/10 text-red-500 border border-red-500/20'
                                                }`}
                                        >
                                            {status.message}
                                        </motion.div>
                                    )}

                                </form>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
