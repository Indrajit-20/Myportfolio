import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Wrench,
  X,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indrajit Rathod — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Indrajit Rathod — BCA student and Full-Stack Developer building production web apps with the MERN stack and PHP/Laravel. Live projects: QuickSeva, Tourism Management System, HTML-to-PDF Converter.",
      },
      { property: "og:title", content: "Indrajit Rathod — Full-Stack Developer" },
      {
        property: "og:description",
        content: "MERN · PHP/Laravel · MongoDB · MySQL · React · Node.js",
      },
    ],
  }),
  component: Portfolio,
});

const GITHUB = "https://github.com/Indrajit-20";
const LINKEDIN = "https://linkedin.com/in/indrajitrathod";
const EMAIL = "mailto:indrajitrathod970@gmail.com";
const PHONE = "tel:+918160977394";
const WHATSAPP = "https://wa.me/918160977394";

const techStack = [
  { name: "React.js" },
  { name: "Node.js" },
  { name: "Express" },
  { name: "MongoDB" },
  { name: "MySQL" },
  { name: "PHP" },
  { name: "Laravel" },
  { name: "Tailwind CSS" },
  { name: "Python" },
  { name: "REST APIs" },
  { name: "Git & GitHub" },
  { name: "Postman" },
  { name: "Vite" },
  { name: "JWT Auth" },
];

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React.js", "Vite", "Tailwind CSS", "Leaflet Maps", "HTML/CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js / Express", "PHP / Laravel", "Python", "REST APIs"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "MySQL", "Schema Design", "RBAC & Auth (JWT/OTP)"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git & GitHub", "Postman", "Vercel", "Render"],
  },
];

const projects = [
  {
    title: "QuickSeva — Local Service Marketplace",
    description:
      "A full-stack marketplace that connects customers with nearby local service providers — plumbers, electricians, cleaners, and other professionals — through a role-based booking system.",
    bullets: [
      "Customer, Seller, and Admin modules with JWT + OTP authentication and RBAC",
      "Geolocation-based nearby search with interactive Leaflet maps",
      "Seller onboarding, wallet/earnings system, and ratings & reviews",
      "Normalized MySQL schema powering search, orders, and payouts",
    ],
    tags: ["React.js", "Node.js", "Express", "MySQL", "JWT", "Leaflet"],
    github: "https://github.com/Indrajit-20/QuickSeva",
    demo: "https://quick-seva-kappa.vercel.app/",
  },
  {
    title: "Tourism Management System",
    description:
      "A full-stack travel booking platform for browsing and booking domestic tour packages, bus tickets, and hotels — with a complete admin back office.",
    bullets: [
      "Tour package booking and bus seat selection with dynamic pricing",
      "Razorpay payment integration with automatic PDF invoice generation",
      "Customer and Admin dashboards with JWT-secured access",
      "Financial reports and analytics charts for packages, routes, and bookings",
    ],
    tags: ["React.js", "Node.js", "MongoDB", "JWT", "Razorpay", "Chart.js"],
    github: "https://github.com/Indrajit-20/Tourism-management-system-",
    demo: "https://tourism-management-system-three.vercel.app/",
  },
  {
    title: "HTML-to-PDF Converter",
    description:
      "A lightweight web utility that converts HTML content into print-ready A4 PDF documents while preserving styling and layout.",
    bullets: [
      "Accurate A4 pagination with smart page-breaks",
      "Style and layout preservation for print-ready output",
      "Simple, responsive interface for fast document export",
    ],
    tags: ["HTML/CSS/JS", "Python", "PDF Generation"],
    github: "https://github.com/Indrajit-20/HtmltoPdf",
    demo: "https://htmltopdf-9hgh.onrender.com/",
  },
];

function Portfolio() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "freelance", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<'ts' | 'json'>('ts');
  const heroRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroRef.current.style.setProperty("--mouse-x", `${x}px`);
    heroRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);

    try {
      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 1200));
      toast.success("Thank you! Your message was sent successfully.");
      setFormData({ name: "", email: "", subject: "freelance", message: "" });
      setIsContactOpen(false);
    } catch (err) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden">
      {/* TOP ANNOUNCEMENT BANNER */}
      {bannerVisible && (
        <div className="relative z-50 bg-gradient-to-r from-accent/20 via-background to-accent/20 border-b border-border/80 px-6 py-2.5 text-center text-xs sm:text-sm text-foreground backdrop-blur-md flex items-center justify-center gap-2.5 animate-fade-in-up pr-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span>
            🚀 <strong>Available for Full-time Roles & Freelance Work.</strong> Let's build something exceptional!
          </span>
          <button
            onClick={() => setBannerVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 transition-colors cursor-pointer"
            aria-label="Close announcement banner"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border">
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-mono text-sm tracking-tight hover:opacity-85 transition-opacity">
            <span className="text-accent">{"<"}</span>indrajit
            <span className="text-accent">{"/>"}</span>
          </a>
          <div className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-medium text-accent-foreground hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Get in touch <ArrowUpRight className="size-3.5" />
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="top"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden bg-hero group/hero border-b border-border/40"
      >
        <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
        
        {/* Dynamic interactive spotlight grid glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(500px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), oklch(0.82 0.16 175 / 0.12), transparent 80%)`,
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left column (Text & CTAs) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-mono text-muted-foreground shadow-sm animate-fade-in-up">
                <span className="relative flex size-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-1.5 bg-accent"></span>
                </span>
                BCA Student · Available for full-stack roles
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] animate-fade-in-up">
                Hi, I'm <span className="text-gradient">Indrajit Rathod</span>.
                <br />
                <span className="text-muted-foreground font-semibold">I build end-to-end</span>
                <br />
                web applications.
              </h1>
              <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in-up">
                Full-Stack Developer specializing in the{" "}
                <span className="text-foreground font-medium">MERN stack</span> and{" "}
                <span className="text-foreground font-medium">PHP / Laravel</span>. I ship
                production apps with clean APIs, well-modeled databases, and fast,
                accessible UIs — see three of them live below.
              </p>
              <div className="flex flex-wrap gap-3.5 pt-2 animate-fade-in-up">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  View my work <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-medium hover:bg-surface-elevated hover:border-accent/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Github className="size-4" /> GitHub
                </a>
              </div>
            </div>

            {/* Right column (Visual Mock Terminal) */}
            <div className="lg:col-span-5 relative w-full reveal reveal-delay-200">
              <div className="relative rounded-2xl border border-border bg-surface/85 backdrop-blur-md shadow-card overflow-hidden w-full group/terminal hover:border-accent/30 transition-colors duration-300">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-surface-elevated/70 border-b border-border/50">
                  <div className="flex items-center gap-1.5">
                    <span className="size-3 rounded-full bg-[#ff5f56]" />
                    <span className="size-3 rounded-full bg-[#ffbd2e]" />
                    <span className="size-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-[11px] text-muted-foreground font-mono">
                    indrajit-rathod ~ bash
                  </div>
                  <div className="w-12" />
                </div>
                
                {/* Tabs */}
                <div className="flex bg-background/40 border-b border-border/40 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('ts')}
                    className={`px-4 py-2 border-r border-border/40 transition-colors cursor-pointer ${
                      activeTab === 'ts'
                        ? 'bg-surface text-accent border-t-2 border-t-accent font-medium'
                        : 'text-muted-foreground hover:bg-surface-elevated/40'
                    }`}
                  >
                    Developer.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('json')}
                    className={`px-4 py-2 border-r border-border/40 transition-colors cursor-pointer ${
                      activeTab === 'json'
                        ? 'bg-surface text-accent border-t-2 border-t-accent font-medium'
                        : 'text-muted-foreground hover:bg-surface-elevated/40'
                    }`}
                  >
                    QuickSeva.json
                  </button>
                </div>

                {/* Editor Content */}
                <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto select-none min-h-[240px] max-h-[280px]">
                  {activeTab === 'ts' ? (
                    <pre className="text-muted-foreground">
                      <div><span className="text-purple-400">import</span> {"{"} <span className="text-blue-300">Developer</span> {"}"} <span className="text-purple-400">from</span> <span className="text-green-300">'indrajit'</span>;</div>
                      <br />
                      <div><span className="text-purple-400">class</span> <span className="text-yellow-300">Indrajit</span> <span className="text-purple-400">extends</span> <span className="text-yellow-300">Developer</span> {"{"}</div>
                      <div>  <span className="text-blue-300">name</span> = <span className="text-green-300">'Indrajit Rathod'</span>;</div>
                      <div>  <span className="text-blue-300">role</span> = <span className="text-green-300">'Full-Stack Engineer'</span>;</div>
                      <div>  <span className="text-blue-300">education</span> = <span className="text-green-300">'BCA Student'</span>;</div>
                      <br />
                      <div>  <span className="text-blue-300">stack</span> = {"{"}</div>
                      <div>    <span className="text-blue-300">frontend</span>: [<span className="text-green-300">'React'</span>, <span className="text-green-300">'Vite'</span>, <span className="text-green-300">'Tailwind'</span>],</div>
                      <div>    <span className="text-blue-300">backend</span>: [<span className="text-green-300">'Node.js'</span>, <span className="text-green-300">'PHP/Laravel'</span>],</div>
                      <div>    <span className="text-blue-300">databases</span>: [<span className="text-green-300">'MongoDB'</span>, <span className="text-green-300">'MySQL'</span>]</div>
                      <div>  {"}"};</div>
                      <br />
                      <div>  <span className="text-blue-300">status</span> = <span className="text-green-300">'Open to full-time roles'</span>;</div>
                      <div>{"}"}</div>
                    </pre>
                  ) : (
                    <pre className="text-muted-foreground">
                      <div>{"{"}</div>
                      <div>  <span className="text-purple-300">"name"</span>: <span className="text-green-300">"QuickSeva"</span>,</div>
                      <div>  <span className="text-purple-300">"type"</span>: <span className="text-green-300">"Local Service Marketplace"</span>,</div>
                      <div>  <span className="text-purple-300">"status"</span>: <span className="text-green-300">"Deployed & Live"</span>,</div>
                      <div>  <span className="text-purple-300">"features"</span>: [</div>
                      <div>    <span className="text-green-300">"JWT + OTP Authentication"</span>,</div>
                      <div>    <span className="text-green-300">"Leaflet Geolocation Maps"</span>,</div>
                      <div>    <span className="text-green-300">"Wallet & Earnings System"</span></div>
                      <div>  ],</div>
                      <div>  <span className="text-purple-300">"stack"</span>: [<span className="text-green-300">"React"</span>, <span className="text-green-300">"Node.js"</span>, <span className="text-green-300">"MySQL"</span>]</div>
                      <div>{"}"}</div>
                    </pre>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFINITE TECH TICKER BANNER */}
      <div className="w-full overflow-hidden bg-surface/30 border-b border-border py-5 relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex w-max gap-16 animate-infinite-scroll">
          <div className="flex gap-16 items-center shrink-0">
            {techStack.map((tech, idx) => (
              <span key={`ticker-1-${idx}`} className="text-xs font-mono tracking-wider flex items-center gap-2.5 text-muted-foreground hover:text-accent transition-colors cursor-default select-none">
                <span className="size-1.5 rounded-full bg-accent/60" />
                {tech.name}
              </span>
            ))}
          </div>
          <div className="flex gap-16 items-center shrink-0" aria-hidden>
            {techStack.map((tech, idx) => (
              <span key={`ticker-2-${idx}`} className="text-xs font-mono tracking-wider flex items-center gap-2.5 text-muted-foreground hover:text-accent transition-colors cursor-default select-none">
                <span className="size-1.5 rounded-full bg-accent/60" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between gap-6 mb-12 reveal">
          <div>
            <p className="font-mono text-xs text-accent mb-3">01 / STACK</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Tools mapped to outcomes.
            </h2>
          </div>
          <p className="hidden sm:block max-w-sm text-sm text-muted-foreground leading-relaxed">
            Not just a list — each tool is something I've shipped with in a real
            project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s, index) => (
            <div
              key={s.title}
              className={`group rounded-2xl border border-border bg-surface/50 backdrop-blur-sm p-6 hover:border-accent/40 hover:bg-surface-elevated hover:shadow-glow/5 transition-all duration-300 reveal reveal-delay-${(index + 1) * 100}`}
            >
              <div className="inline-flex items-center justify-center size-10 rounded-lg bg-accent/10 text-accent mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <s.icon className="size-5" />
              </div>
              <h3 className="font-semibold mb-3 text-lg text-foreground group-hover:text-accent transition-colors">{s.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 group-hover/li:text-foreground transition-colors">
                    <span className="text-accent text-base">›</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 reveal">
          <p className="font-mono text-xs text-accent mb-3">02 / WORK</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Selected projects.
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
            Every project ships with source code and a live demo — inspect the
            implementation, then try it.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group relative rounded-2xl border border-border bg-surface/40 backdrop-blur-sm p-6 sm:p-8 hover:border-accent/30 hover:bg-surface/70 transition-all duration-300 shadow-card hover:shadow-glow/5 reveal reveal-delay-${(i + 1) * 100}`}
            >
              <div className="grid sm:grid-cols-[auto_1fr_auto] gap-6 items-start">
                <div className="font-mono text-sm text-muted-foreground bg-surface-elevated/40 border border-border/60 size-8 rounded-full flex items-center justify-center">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 items-start">
                        <span className="text-accent mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] tracking-wide px-2.5 py-1 rounded-md bg-surface-elevated/60 border border-border/80 text-muted-foreground select-none"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background/50 px-3.5 py-2 text-xs font-medium hover:bg-surface-elevated hover:border-accent/30 transition-all cursor-pointer"
                  >
                    <Github className="size-3.5" /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-xs font-medium text-accent-foreground hover:shadow-glow transition-all cursor-pointer"
                  >
                    <ExternalLink className="size-3.5" /> Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 reveal">
        <div className="rounded-3xl border border-border/80 bg-surface/50 bg-hero p-10 sm:p-16 text-center relative overflow-hidden shadow-card">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <p className="font-mono text-xs text-accent mb-3">03 / CONTACT</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Let's build <span className="text-gradient font-bold">something real.</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-muted-foreground leading-relaxed">
            Open to full-stack roles, freelance work, and interesting
            collaborations. Fastest reply via email or WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Mail className="size-4" /> Email me
            </button>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-6 py-3.5 text-sm font-medium hover:bg-surface-elevated hover:border-accent/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="size-4" /> WhatsApp
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-6 py-3.5 text-sm font-medium hover:bg-surface-elevated hover:border-accent/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-6 py-3.5 text-sm font-medium hover:bg-surface-elevated hover:border-accent/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </div>
          <p className="mt-8 text-xs text-muted-foreground font-mono tracking-wider">
            📍 Gujarat, India · +91 81609 77394 · indrajitrathod970@gmail.com
          </p>
        </div>
      </section>

      <footer className="border-t border-border bg-background/40">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-muted-foreground font-mono">
          <span>© {new Date().getFullYear()} Indrajit Rathod. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with React · TypeScript · Tailwind CSS
          </span>
        </div>
      </footer>

      {/* CONTACT MODAL FORM */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <div 
            onClick={() => setIsContactOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 cursor-pointer" 
          />
          
          {/* Form Content panel */}
          <div className="relative w-full max-w-[480px] bg-surface border border-border p-6 shadow-glow rounded-2xl overflow-hidden animate-fade-in-up z-10">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent/50 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground p-1 transition-colors cursor-pointer rounded-lg hover:bg-surface-elevated"
              aria-label="Close dialog"
            >
              <X className="size-4" />
            </button>

            <div className="mb-4">
              <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <span className="text-accent">{"//"}</span> Get in touch
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Send me a message and I'll get back to you within 24 hours.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground" htmlFor="name">Name *</label>
                <Input
                  id="name"
                  required
                  placeholder="Indrajit Rathod"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border focus:border-accent/50 focus:ring-accent/20"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground" htmlFor="email">Email *</label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="indrajitrathod970@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-border focus:border-accent/50 focus:ring-accent/20"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground" htmlFor="subject">Subject / Inquiry *</label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="flex h-9 w-full rounded-md border border-input bg-background/50 px-3 py-1.5 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus:border-accent/50 focus:ring-accent/20 text-foreground cursor-pointer"
                >
                  <option value="freelance">Freelance / Contract Project</option>
                  <option value="fulltime">Full-Time Job Opportunity</option>
                  <option value="collaboration">Collaboration / Open Source</option>
                  <option value="other">General Inquiry / Saying Hello</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground" htmlFor="message">Message *</label>
                <Textarea
                  id="message"
                  required
                  placeholder="Hi Indrajit, I saw your portfolio and would like to build..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border focus:border-accent/50 focus:ring-accent/20 min-h-[100px]"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground font-semibold rounded-xl hover:shadow-glow transition-all py-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            
            <div className="border-t border-border/60 mt-6 pt-4">
              <p className="text-[11px] font-mono text-muted-foreground text-center mb-3 tracking-wider">OR CONNECT DIRECTLY</p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-border bg-background/40 py-2.5 text-xs font-medium hover:bg-surface-elevated transition-colors text-foreground cursor-pointer hover:border-accent/30"
                >
                  <Phone className="size-3.5 text-accent" /> WhatsApp
                </a>
                <a
                  href={EMAIL}
                  className="flex items-center justify-center gap-2 rounded-lg border border-border bg-background/40 py-2.5 text-xs font-medium hover:bg-surface-elevated transition-colors text-foreground cursor-pointer hover:border-accent/30"
                >
                  <Mail className="size-3.5 text-accent" /> Email Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
