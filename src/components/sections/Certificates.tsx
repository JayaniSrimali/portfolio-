"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

const certificates = [
    {
        title: "Web Design for Beginners programme",
        issuer: "University of Moratuwa",
        date: "2024",
        description: "Credentials ID: G5YVjiCCST. Gained foundational knowledge in web design principles, HTML, CSS, and responsive layouts.",
        image: "https://media.licdn.com/dms/image/v2/D4D2DAQHZn3yKWX3Edw/profile-treasury-image-shrink_480_480/profile-treasury-image-shrink_480_480/0/1702609826541?e=1771844400&v=beta&t=9i_krUi8Rc7nxjqDoWAera0UDnmvTmHlqXagmhiYrus",
        tags: ["Web Development", "UX Design"],
        link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php"
    },
    {
        title: "Front-End Web Development",
        issuer: "University of Moratuwa",
        date: "Feb 2024",
        description: "Credentials ID: kHaO0EbkyB. Mastered modern frontend technologies including advanced CSS, JavaScript frameworks, and user experience design (UED).",
        image: "/images/Moratuwa_Frontend.png",
        tags: ["Wireframing", "UED", "Frontend"],
        link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php"
    },
    {
        title: "MongoDB Node.js Developer Path",
        issuer: "MongoDB",
        date: "Jan 2024",
        description: "Credentials ID: MDBvvrwjgq2ja. Completed comprehensive training on building scalable applications using Node.js and MongoDB driver.",
        image: "/images/Mongodb_node.js.png",
        tags: ["Node.js", "MongoDB", "Backend"],
        link: "https://learn.mongodb.com/c/nt0etrm_Tnix0hDt-ociXw"
    },
    {
        title: "SQL Basic",
        issuer: "HackerRank",
        date: "Dec 2023",
        description: "Credentials ID: 8F8B86C34382. Verified skills in writing complex SQL queries, joining tables, and database management with Microsoft SQL Server.",
        image: "/images/HackerRank.png",
        tags: ["SQL", "Database", "Microsoft SQL Server"],
        link: "https://www.hackerrank.com/certificates/8f8b86c34382"
    },
    {
        title: "MERN Stack Development",
        issuer: "Simplilearn Education",
        date: "Jan 2024",
        description: "Credentials ID: 4799451. In-depth program covering MongoDB, Express.js, React, and Node.js for full-stack web application development.",
        image: "/images/Simplleran_mean.png",
        tags: ["MERN Stack", "Full Stack"],
        link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzM1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDc5OTQ1MV8xNzA1ODI0MDIxLnBuZyIsInVzZXJuYW1lIjoiSmF5YW5pIFNyaW1hbGkifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6128%2FIntroduction-to-MEAN-Stack-%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1551889739255891946&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVd%2FZ1TMsMs0ytcE%2ByrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAKyDE%2F9BAAAA"
    },
    {
        title: "Java Programming",
        issuer: "Great Learning",
        date: "Jan 2024",
        description: "Completed core Java training, focusing on Object-Oriented Programming (OOP) concepts and application development.",
        image: "/images/Greatlearning_java.png",
        tags: ["Java", "OOP"],
        link: "https://olympus.mygreatlearning.com/courses/12385/certificate"
    },
    {
        title: "MongoDB Data Modeling Intro",
        issuer: "MongoDB",
        date: "Jan 2024",
        description: "Credentials ID: MDBrfqmwuda8v. Learned best practices for designing flexible, scalable schemas and data relationships in MongoDB.",
        image: "/images/MongoDB_datamodeling.png",
        tags: ["Data Modeling", "Database Design"],
        link: "https://learn.mongodb.com/c/F6QjfCsUTuurJeDNlX94MA"
    },
    {
        title: "MongoDB Aggregation",
        issuer: "MongoDB",
        date: "Jan 2024",
        description: "Credentials ID: MDBdiqa6h5k91. Mastered the aggregation framework for complex data analysis and transformation within MongoDB.",
        image: "/images/MongoDb_Aggregation.png",
        tags: ["Aggregation", "Querying"],
        link: "https://learn.mongodb.com/c/F6QjfCsUTuurJeDNlX94MA"
    },
    {
        title: "MongoDB Indexes",
        issuer: "MongoDB",
        date: "Jan 2024",
        description: "Credentials ID: MDBreo9wf6a50. Gained expertise in optimizing database performance using single field, compound, and multikey indexes.",
        image: "/images/MongoDB_Indexes.png",
        tags: ["Indexing", "Performance"],
        link: "https://learn.mongodb.com/c/F6QjfCsUTuurJeDNlX94MA"
    }
];

export function Certificates() {
    return (
        <section id="certificates" className="py-24 relative bg-background">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Licenses & <span className="text-primary">Certifications</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Continuous learning and professional development achievements.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-[#0f111a] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all group flex flex-col"
                        >
                            {/* Certificate Image Area */}
                            <div className="relative w-full h-48 bg-muted/20 overflow-hidden border-b border-white/5">
                                {cert.image && !cert.image.includes("placeholder") ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full  transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-secondary/20">
                                        <span className="text-muted-foreground text-sm">Certificate Image</span>
                                    </div>
                                )}

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f111a] to-transparent opacity-60" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                    {cert.title} <span className="text-muted-foreground font-normal text-lg">— {cert.issuer}</span>
                                </h3>

                                <p className="text-muted-foreground text-sm mb-6 mt-4 leading-relaxed">
                                    {cert.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {cert.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-secondary/30 text-xs text-muted-foreground border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <a
                                    href={cert.link}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors mt-auto"
                                >
                                    View credential <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
