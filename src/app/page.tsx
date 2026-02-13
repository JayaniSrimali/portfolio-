import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />

      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-white/5 bg-background relative z-10">
        <p className="flex items-center justify-center gap-1">
          Designed & Built with <span className="text-primary">♥</span> by Jayani Srimali
        </p>
        <p className="mt-2 text-xs opacity-50">© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </main>
  );
}
