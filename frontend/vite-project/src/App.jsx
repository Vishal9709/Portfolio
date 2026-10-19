// import { useState } from "react";
// import {
//   Bot,
//   Send,
//   X,
//   Menu,
//   Code2,
//   ArrowUpRight,
//   GraduationCap,
//   Sparkles,
//   Mail,
//   Server,
//   Database,
//   Wrench,
//   MapPin,
//   Phone,
//   Globe,
//   BrainCircuit,
// } from "lucide-react";

// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import emailjs from "@emailjs/browser";

// const projects = [
//   {
//     name: "InternCluster",
//     category: "Internship Portal",
//     description:
//       "A platform for internship opportunities and training resources.",
//     tech: ["React", "Tailwind CSS"],
//     link: "https://interncluster.tech",
//   },
//   {
//     name: "MV Production",
//     category: "Business Website",
//     description:
//       "A responsive website featuring model portfolios and image sliders.",
//     tech: ["React", "Tailwind CSS", "SwiperJS"],
//     link: "https://mvproduction.in",
//   },
//   {
//     name: "Navkriti",
//     category: "College Fest Website",
//     description: "A website developed for a college cultural fest.",
//     tech: ["React", "Tailwind CSS"],
//     link: "https://navkriticec.in",
//   },
// ];

// const skills = [
//   "JavaScript",
//   "React.js",
//   "Node.js",
//   "Express.js",
//   "MongoDB",
//   "HTML",
//   "CSS",
//   "Tailwind CSS",
//   "Python",
//   "REST APIs",
//   "LLM",
//   "RAG",
//   "Prompt Engineering",
// ];

// const suggestions = [
//   "Who is Vishal?",
//   "What are his skills?",
//   "Tell me about his projects",
//   "What is his education?",
// ];

// export default function App() {
//   const [chatOpen, setChatOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [question, setQuestion] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [messages, setMessages] = useState([
//     {
//       role: "assistant",
//       text: "Hi there! 👋 I'm Vishal's AI assistant. Ask me about his skills, education or projects.",
//     },
//   ]);

//   async function sendMessage(event, suggestedText) {
//     if (event) event.preventDefault();

//     const message = (suggestedText ?? question).trim();

//     if (!message || loading) return;

//     setMessages((previous) => [
//       ...previous,
//       { role: "user", text: message },
//     ]);

//     setQuestion("");
//     setLoading(true);

//     try {
//       const baseUrl =
//         import.meta.env.VITE_API_URL || "https://vishal-portfolio-ai.onrender.com";

//       const response = await fetch(`${baseUrl}/api/chat`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.detail || "Unable to get a response.");
//       }

//       setMessages((previous) => [
//         ...previous,
//         {
//           role: "assistant",
//           text: data.answer || "I couldn't generate a response.",
//         },
//       ]);
//     } catch {
//       setMessages((previous) => [
//         ...previous,
//         {
//           role: "assistant",
//           text: "My AI backend is not connected yet. Please try again after the backend has been started.",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-[#070711] text-white">
//       {/* NAVBAR */}
//       <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#070711]/95 backdrop-blur-xl">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
//           {/* LOGO */}
//           <a
//             href="#home"
//             onClick={() => setMenuOpen(false)}
//             className="text-2xl font-bold tracking-tight"
//           >
//             Vishal<span className="text-purple-400">.</span>
//           </a>

//           {/* DESKTOP NAVIGATION */}
//           <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
//             <a href="#home" className="hover:text-purple-300">
//               Home
//             </a>
//             <a href="#about" className="hover:text-purple-300">
//               About
//             </a>
//             <a href="#skills" className="hover:text-purple-300">
//               Skills
//             </a>
//             <a href="#projects" className="hover:text-purple-300">
//               Projects
//             </a>
//             <a href="#contact" className="hover:text-purple-300">
//               Contact
//             </a>
//           </div>

//           {/* RIGHT SIDE BUTTONS */}
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => {
//                 setChatOpen(true);
//                 setMenuOpen(false);
//               }}
//               className="flex items-center gap-2 rounded-xl border border-purple-400/60 px-3 py-2.5 text-sm text-purple-200 transition hover:bg-purple-500/20 sm:px-4"
//             >
//               <Bot size={18} />
//               <span>Ask My AI</span>
//             </button>

//             {/* MOBILE HAMBURGER MENU */}
//             <button
//               type="button"
//               onClick={() => setMenuOpen((previous) => !previous)}
//               aria-label={
//                 menuOpen
//                   ? "Close navigation menu"
//                   : "Open navigation menu"
//               }
//               aria-expanded={menuOpen}
//               className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white transition hover:border-purple-400 hover:bg-purple-500/10 md:hidden"
//             >
//               {menuOpen ? <X size={25} /> : <Menu size={25} />}
//             </button>
//           </div>
//         </div>

//         {/* MOBILE DROPDOWN */}
//         {menuOpen && (
//           <div className="border-t border-white/10 bg-[#0c0b19] px-5 py-4 shadow-xl md:hidden">
//             <div className="flex flex-col gap-1">
//               {[
//                 ["Home", "#home"],
//                 ["About", "#about"],
//                 ["Skills", "#skills"],
//                 ["Projects", "#projects"],
//                 ["Contact", "#contact"],
//               ].map(([label, href]) => (
//                 <a
//                   key={href}
//                   href={href}
//                   onClick={() => setMenuOpen(false)}
//                   className="rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-purple-500/10 hover:text-purple-300"
//                 >
//                   {label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* HERO SECTION */}
//       <section
//         id="home"
//         className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-12 lg:py-24"
//       >
//         <div className="pointer-events-none absolute left-1/4 top-20 -z-0 h-72 w-72 rounded-full bg-purple-600/15 blur-[120px]" />

//         <div className="relative">
//           <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-xs tracking-widest text-purple-300">
//             <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
//             OPEN TO OPPORTUNITIES
//           </div>

//           <p className="mb-3 text-sm text-slate-400">HELLO, I'M</p>

//           <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
//             Vishal Kumar
//             <br />
//             <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
//               Keshri.
//             </span>
//           </h1>

//           <h2 className="mt-6 text-lg font-semibold text-slate-300 sm:text-2xl">
//             AI/LLM Developer
//             <span className="text-purple-400"> | </span>
//             MERN Stack Developer
//           </h2>

//           <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
//             I build responsive web applications and explore AI-powered
//             solutions. I enjoy solving real-world problems, writing clean code
//             and creating useful digital experiences.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-3">
//             <a
//               href="#projects"
//               className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5 sm:px-6"
//             >
//               View My Work
//               <ArrowUpRight size={18} />
//             </a>

//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 rounded-xl border border-purple-400/60 px-5 py-3.5 font-medium text-purple-200 transition hover:bg-purple-400/10 sm:px-6"
//             >
//               <Mail size={18} />
//               Contact Me
//             </a>
//           </div>

//           {/* SOCIAL LINKS */}
//           <div className="mt-8 flex flex-wrap gap-3">
//             <a
//               href="https://github.com/Vishal9709"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="GitHub"
//               className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-purple-400 hover:text-purple-300"
//             >
//               {/* <Code2 size={20} /> */}
//               <FaGithub size={22} />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/vishal-kumar-keshri-79b046254/"
//               target="_blank"
//               rel="noreferrer"
//               aria-label="LinkedIn"
//               className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-purple-400 hover:text-purple-300"
//             >
//               {/* <Linkedin size={20} /> */}
//               <FaLinkedin size={22} />
//             </a>

//             <a
//               href="mailto:vkeshri267@gmail.com"
//               aria-label="Email"
//               className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-purple-400 hover:text-purple-300"
//             >
//               {/* <Mail size={20} /> */}
//               <MdEmail size={23} />
//             </a>
//           </div>
//         </div>

//         {/* PROFILE CARD */}
//         <div className="relative mx-auto w-full max-w-md">
//           <div className="absolute inset-10 rounded-full bg-purple-600/20 blur-[100px]" />

//           <div className="relative overflow-hidden rounded-3xl border border-purple-400/25 bg-gradient-to-b from-[#17132a] to-[#0c0c18] p-6 shadow-2xl shadow-purple-950/30 sm:p-8">
//             <div className="flex items-center justify-between border-b border-white/10 pb-5 text-xs text-slate-400">
//               <span>VISHAL.DEV</span>
//               <span className="text-purple-300">● PORTFOLIO</span>
//             </div>

//             <div className="mx-auto my-9 grid h-36 w-36 place-items-center rounded-full border border-purple-400/40 bg-gradient-to-br from-purple-500/25 to-fuchsia-500/10 text-purple-300 shadow-lg shadow-purple-500/10">
//               <Code2 size={64} strokeWidth={1.3} />
//             </div>

//             <p className="text-center text-xs tracking-[0.25em] text-purple-300">
//               DEVELOPER PROFILE
//             </p>

//             <h3 className="mt-4 text-center text-2xl font-bold">
//               Building. Learning. Growing.
//             </h3>

//             <p className="mt-4 text-center text-sm leading-7 text-slate-400">
//               Computer Science graduate interested in full-stack development,
//               LLM applications and modern web technologies.
//             </p>

//             <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/10 pt-6 text-center">
//               {[
//                 "GEN AI",
//                 "LLM",
//                 "React.js",
//                 "MongoDB",
//                 "Express.js",
//                 "Node.js",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="rounded-xl bg-white/[0.03] p-3"
//                 >
//                   <p className="text-sm font-semibold text-purple-300">
//                     {item}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* QUICK INFORMATION */}
//       <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 pb-20 sm:grid-cols-3 sm:px-8">
//         {[
//           {
//             icon: GraduationCap,
//             title: "Education",
//             subtitle: "B.Tech Computer Science",
//           },
//           {
//             icon: Code2,
//             title: "Development",
//             subtitle: "MERN Stack",
//           },
//           {
//             icon: Sparkles,
//             title: "Exploring",
//             subtitle: "AI & LLM Applications",
//           },
//         ].map(({ icon: Icon, title, subtitle }) => (
//           <div
//             key={title}
//             className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-purple-400/40"
//           >
//             <Icon size={29} className="shrink-0 text-purple-300" />
//             <div>
//               <h3 className="font-semibold">{title}</h3>
//               <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* ABOUT SECTION */}
//       <section
//         id="about"
//         className="scroll-mt-24 border-t border-white/10"
//       >
//         <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
//           <p className="mb-4 text-xs font-bold tracking-[0.25em] text-purple-300">
//             ABOUT ME
//           </p>

//           <h2 className="text-3xl font-bold sm:text-5xl">
//             Turning ideas into{" "}
//             <span className="text-purple-300">digital experiences.</span>
//           </h2>

//           <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-400 sm:text-base">
//             I'm Vishal Kumar Keshri, a Computer Science graduate interested in
//             building responsive websites, backend APIs and AI-powered
//             applications. I enjoy learning new technologies and developing
//             practical software solutions.
//           </p>
//         </div>
//       </section>

//       {/* SKILLS SECTION */}
//       <section
//         id="skills"
//         className="scroll-mt-24 relative overflow-hidden border-y border-purple-400/10 bg-[#0b0a16] px-6 py-20 sm:px-8 sm:py-24"
//       >
//         <div className="pointer-events-none absolute left-1/4 top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />

//         <div className="relative mx-auto max-w-6xl">
//           <div className="mb-14 text-center">
//             <p className="mb-3 text-xs font-bold tracking-[0.3em] text-fuchsia-400">
//               WHAT I WORK WITH
//             </p>

//             <h2 className="text-3xl font-extrabold sm:text-5xl">
//               My{" "}
//               <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
//                 Skills
//               </span>
//             </h2>

//             <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
//               Technologies and tools I use to build modern web applications
//               and explore AI-powered solutions.
//             </p>
//           </div>

//           <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 title: "Frontend Development",
//                 description:
//                   "Building responsive and interactive user interfaces.",
//                 icon: Code2,
//                 items: [
//                   "HTML",
//                   "CSS",
//                   "JavaScript",
//                   "React.js",
//                   "Tailwind CSS",
//                 ],
//               },
//               {
//                 title: "Backend Development",
//                 description:
//                   "Creating server-side applications and REST APIs.",
//                 icon: Server,
//                 items: ["Node.js", "Express.js", "Python", "REST APIs"],
//               },
//               {
//                 title: "Database Management",
//                 description:
//                   "Working with databases to store and manage application data.",
//                 icon: Database,
//                 items: ["MongoDB"],
//               },
//               {
//                 title: "Tools & Technologies",
//                 description:
//                   "Tools that support my development workflow.",
//                 icon: Wrench,
//                 items: ["Git", "GitHub", "VS Code", "Postman"],
//               },
//               {
//                 title: "Generative AI & LLMs",
//                 description:
//                   "Exploring large language models and AI-powered applications.",
//                 icon: BrainCircuit,
//                 items: ["LLM", "RAG", "Prompt Engineering", "Python"],
//               },
//               {
//                 title: "AI Integration",
//                 description:
//                   "Connecting AI capabilities with practical applications.",
//                 icon: Bot,
//                 items: [
//                   "LLM APIs",
//                   "API Integration",
//                   "AI Applications",
//                 ],
//               },
//             ].map(({ title, description, icon: Icon, items }) => (
//               <article
//                 key={title}
//                 className="group rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#171329] to-[#100e1c] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-950/20 sm:p-7"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300 transition group-hover:bg-purple-500/20">
//                     <Icon size={26} strokeWidth={1.8} />
//                   </div>

//                   <h3 className="pt-1 text-lg font-bold leading-7 text-white">
//                     {title}
//                   </h3>
//                 </div>

//                 <p className="mt-5 min-h-[48px] text-sm leading-6 text-slate-400">
//                   {description}
//                 </p>

//                 <div className="mt-5 flex flex-wrap gap-2">
//                   {items.map((skill) => (
//                     <span
//                       key={skill}
//                       className="rounded-full border border-white/[0.07] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-purple-400/40 hover:text-purple-300"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROJECTS SECTION */}
//       <section
//         id="projects"
//         className="scroll-mt-24 mx-auto max-w-6xl px-6 py-20 sm:px-8"
//       >
//         <p className="mb-4 text-xs font-bold tracking-[0.25em] text-purple-300">
//           FEATURED WORK
//         </p>

//         <h2 className="text-3xl font-bold sm:text-5xl">
//           Projects I've Built
//         </h2>

//         <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <article
//               key={project.name}
//               className="group rounded-2xl border border-white/10 bg-[#0d0d19] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/50"
//             >
//               <div className="flex items-center justify-between">
//                 <span className="text-xs text-purple-300">
//                   PROJECT 0{index + 1}
//                 </span>

//                 <ArrowUpRight
//                   size={19}
//                   className="text-slate-500 transition group-hover:text-purple-300"
//                 />
//               </div>

//               <p className="mt-7 text-xs text-slate-500">
//                 {project.category}
//               </p>

//               <h3 className="mt-2 text-2xl font-semibold">
//                 {project.name}
//               </h3>

//               <p className="mt-4 min-h-14 text-sm leading-7 text-slate-400">
//                 {project.description}
//               </p>

//               <div className="mt-5 flex flex-wrap gap-2">
//                 {project.tech.map((tech) => (
//                   <span
//                     key={tech}
//                     className="rounded-md bg-white/[0.05] px-2 py-1.5 text-xs text-slate-300"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-purple-200"
//               >
//                 View Project
//                 <ArrowUpRight size={16} />
//               </a>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section
//         id="contact"
//         className="scroll-mt-24 relative overflow-hidden px-6 py-20 sm:px-8 sm:py-24"
//       >
//         <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[110px]" />

//         <div className="relative mx-auto max-w-6xl">
//           <div className="mb-14 text-center">
//             <p className="mb-3 text-xs font-bold tracking-[0.3em] text-fuchsia-400">
//               LET'S CONNECT
//             </p>

//             <h2 className="text-3xl font-extrabold sm:text-5xl">
//               Get In{" "}
//               <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
//                 Touch
//               </span>
//             </h2>

//             <p className="mt-4 text-sm text-slate-400 sm:text-base">
//               Have a project in mind or want to collaborate? Let's connect!
//             </p>
//           </div>

//           <div className="grid gap-12 md:grid-cols-2 md:gap-16">
//             {/* CONTACT FORM */}
//             <form
//               onSubmit={(event) => {
//                 event.preventDefault();

//                 const form = event.currentTarget;
//                 const data = new FormData(form);
//                 const name = data.get("name");
//                 const email = data.get("email");
//                 const message = data.get("message");

//                 const subject = encodeURIComponent(
//                   `Portfolio enquiry from ${name}`
//                 );

//                 const body = encodeURIComponent(
//                   `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
//                 );

//                 window.location.href =
//                   `mailto:vkeshri267@gmail.com?subject=${subject}&body=${body}`;
//               }}
//               className="space-y-6"
//             >
//               <div>
//                 <label
//                   htmlFor="contact-name"
//                   className="mb-2 block text-sm font-medium text-slate-300"
//                 >
//                   Your Name
//                 </label>

//                 <input
//                   id="contact-name"
//                   name="name"
//                   type="text"
//                   placeholder="Enter your name"
//                   required
//                   className="w-full rounded-xl border border-white/10 bg-[#11101d] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="contact-email"
//                   className="mb-2 block text-sm font-medium text-slate-300"
//                 >
//                   Email Address
//                 </label>

//                 <input
//                   id="contact-email"
//                   name="email"
//                   type="email"
//                   placeholder="you@example.com"
//                   required
//                   className="w-full rounded-xl border border-white/10 bg-[#11101d] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="contact-message"
//                   className="mb-2 block text-sm font-medium text-slate-300"
//                 >
//                   Your Message
//                 </label>

//                 <textarea
//                   id="contact-message"
//                   name="message"
//                   rows={5}
//                   placeholder="Tell me about your project..."
//                   required
//                   className="w-full resize-y rounded-xl border border-white/10 bg-[#11101d] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-600 px-6 py-4 font-semibold text-white shadow-lg shadow-purple-950/20 transition hover:-translate-y-0.5 hover:shadow-purple-500/20"
//               >
//                 Send Message
//                 <Send size={17} />
//               </button>

//               <p className="text-xs leading-5 text-slate-500">
//                 Sending opens your default email application. Update the
//                 example email in this section with your actual email address.
//               </p>
//             </form>

//             {/* CONTACT INFORMATION */}
//             <div className="space-y-8">
//               {[
//                 {
//                   icon: MapPin,
//                   title: "Location",
//                   detail: "Bengaluru, India",
//                 },
//                 {
//                   icon: Mail,
//                   title: "Email",
//                   detail: "vkeshri267@gmail.com",
//                   href: "mailto:vkeshri267@gmail.com",
//                 },
//                 {
//                   icon: Phone,
//                   title: "Phone",
//                   detail: "8252835152",
//                 },
//               ].map(({ icon: Icon, title, detail, href }) => (
//                 <div key={title} className="flex items-start gap-4">
//                   <div className="mt-0.5 text-purple-400">
//                     <Icon size={25} strokeWidth={1.9} />
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-white">{title}</h3>

//                     {href ? (
//                       <a
//                         href={href}
//                         className="mt-2 inline-block break-all text-sm leading-6 text-slate-400 transition hover:text-purple-300"
//                       >
//                         {detail}
//                       </a>
//                     ) : (
//                       <p className="mt-2 text-sm leading-6 text-slate-400">
//                         {detail}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               ))}

//               {/* SOCIAL LINKS */}
//               <div className="border-t border-white/10 pt-7">
//                 <h3 className="mb-5 font-bold text-white">Follow Me</h3>

//                 <div className="flex gap-3">
//                   <a
//                     href="https://github.com/Vishal9709"
//                     target="_blank"
//                     rel="noreferrer"
//                     aria-label="GitHub"
//                     className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-purple-300 transition hover:border-purple-400/50 hover:bg-purple-500/10"
//                   >

//                     <FaGithub size={22} />
//                   </a>

//                   <a
//                     href="https://www.linkedin.com/in/vishal-kumar-keshri-79b046254/"
//                     target="_blank"
//                     rel="noreferrer"
//                     aria-label="LinkedIn"
//                     className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-purple-300 transition hover:border-purple-400/50 hover:bg-purple-500/10"
//                   >
//                     <FaLinkedin size={22} />
//                   </a>
//                 </div>
//               </div>

//               {/* OPPORTUNITIES CARD */}
//               <div className="rounded-2xl border border-purple-400/15 bg-gradient-to-br from-purple-500/[0.08] to-fuchsia-500/[0.03] p-5">
//                 <div className="flex items-center gap-3">
//                   <Globe size={22} className="text-purple-300" />
//                   <p className="font-semibold">Open to opportunities</p>
//                 </div>

//                 <p className="mt-3 text-sm leading-6 text-slate-400">
//                   Interested in building useful products, collaborating on
//                   projects and exploring new technologies.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* FIXED AI CHAT BUTTON */}
//       {!chatOpen && (
//         <button
//           onClick={() => setChatOpen(true)}
//           aria-label="Open AI assistant"
//           title="Chat with Vishal's AI"
//           className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-purple-300/40 bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.5)] transition duration-300 hover:scale-110 sm:right-6 sm:h-16 sm:w-16"
//         >
//           <Bot size={28} />
//         </button>
//       )}

//       {/* CHATBOT WINDOW */}
//       {chatOpen && (
//         <aside className="fixed bottom-4 right-4 z-[60] flex h-[min(560px,calc(100dvh-32px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-purple-400/30 bg-[#0a0914] shadow-2xl shadow-purple-950/50 sm:bottom-5 sm:right-5">
//           <header className="flex items-center gap-3 border-b border-white/10 bg-[#141024] p-4">
//             <div className="grid h-10 w-10 place-items-center rounded-full bg-purple-500/20 text-purple-300">
//               <Bot size={23} />
//             </div>

//             <div className="min-w-0 flex-1">
//               <h3 className="text-sm font-semibold">
//                 Vishal's AI Assistant
//               </h3>
//               <p className="mt-1 text-xs text-purple-300">
//                 Portfolio Assistant
//               </p>
//             </div>

//             <button
//               onClick={() => setChatOpen(false)}
//               aria-label="Close chatbot"
//               className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
//             >
//               <X size={20} />
//             </button>
//           </header>

//           {/* CHAT MESSAGES */}
//           <div className="flex-1 space-y-3 overflow-y-auto p-4">
//             {messages.map((item, index) => (
//               <div
//                 key={`${item.role}-${index}`}
//                 className={`max-w-[90%] whitespace-pre-wrap rounded-xl px-3.5 py-3 text-sm leading-6 ${
//                   item.role === "user"
//                     ? "ml-auto bg-purple-500 text-white"
//                     : "border border-white/5 bg-[#171526] text-slate-200"
//                 }`}
//               >
//                 {item.text}
//               </div>
//             ))}

//             {loading && (
//               <p className="text-xs text-purple-300">Thinking...</p>
//             )}

//             {messages.length === 1 && (
//               <div className="flex flex-wrap gap-2 pt-2">
//                 {suggestions.map((suggestion) => (
//                   <button
//                     key={suggestion}
//                     disabled={loading}
//                     onClick={() => sendMessage(null, suggestion)}
//                     className="rounded-full border border-purple-400/40 px-3 py-2 text-left text-xs text-purple-200 transition hover:bg-purple-500/15 disabled:opacity-50"
//                   >
//                     {suggestion}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* CHAT INPUT */}
//           <form
//             onSubmit={sendMessage}
//             className="flex gap-2 border-t border-white/10 p-3"
//           >
//             <input
//               value={question}
//               onChange={(event) => setQuestion(event.target.value)}
//               placeholder="Ask about Vishal..."
//               maxLength={1000}
//               className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#141321] px-3 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-purple-400/60"
//             />

//             <button
//               type="submit"
//               disabled={loading || !question.trim()}
//               aria-label="Send message"
//               className="grid w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white disabled:opacity-40"
//             >
//               <Send size={18} />
//             </button>
//           </form>
//         </aside>
//       )}
//     </div>
//   );
// }



import { useState } from "react";
import {
  Bot,
  Send,
  X,
  Menu,
  Code2,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
  Mail,
  Server,
  Database,
  Wrench,
  MapPin,
  Phone,
  Globe,
  BrainCircuit,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const projects = [
  {
    name: "InternCluster",
    category: "Internship Portal",
    description:
      "A platform for internship opportunities and training resources.",
    tech: ["React", "Tailwind CSS"],
    link: "https://interncluster.tech",
  },
  {
    name: "MV Production",
    category: "Business Website",
    description:
      "A responsive website featuring model portfolios and image sliders.",
    tech: ["React", "Tailwind CSS", "SwiperJS"],
    link: "https://mvproduction.in",
  },
  {
    name: "Navkriti",
    category: "College Fest Website",
    description: "A website developed for a college cultural fest.",
    tech: ["React", "Tailwind CSS"],
    link: "https://navkriticec.in",
  },
];

const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Python",
  "REST APIs",
  "LLM",
  "RAG",
  "Prompt Engineering",
];

const suggestions = [
  "Who is Vishal?",
  "What are his skills?",
  "Tell me about his projects",
  "What is his education?",
];

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi there! 👋 I'm Vishal's AI assistant. Ask me about his skills, education or projects.",
    },
  ]);

  async function sendMessage(event, suggestedText) {
    if (event) event.preventDefault();

    const message = (suggestedText ?? question).trim();

    if (!message || loading) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text: message },
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const baseUrl =
        import.meta.env.VITE_API_URL || "https://vishal-portfolio-ai.onrender.com";

      const response = await fetch(`${baseUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Unable to get a response.");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: data.answer || "I couldn't generate a response.",
        },
      ]);
    } catch {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: "My AI backend is not connected yet. Please try again after the backend has been started.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070711] text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#070711]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          {/* LOGO */}
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-bold tracking-tight"
          >
            Vishal<span className="text-purple-400">.</span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <a href="#home" className="hover:text-purple-300">
              Home
            </a>
            <a href="#about" className="hover:text-purple-300">
              About
            </a>
            <a href="#skills" className="hover:text-purple-300">
              Skills
            </a>
            <a href="#projects" className="hover:text-purple-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-purple-300">
              Contact
            </a>
          </div>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setChatOpen(true);
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 rounded-xl border border-purple-400/60 px-3 py-2.5 text-sm text-purple-200 transition hover:bg-purple-500/20 sm:px-4"
            >
              <Bot size={18} />
              <span>Ask My AI</span>
            </button>

            {/* MOBILE HAMBURGER MENU */}
            <button
              type="button"
              onClick={() => setMenuOpen((previous) => !previous)}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white transition hover:border-purple-400 hover:bg-purple-500/10 md:hidden"
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0c0b19] px-5 py-4 shadow-xl md:hidden">
            <div className="flex flex-col gap-1">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-purple-500/10 hover:text-purple-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-12 lg:py-24"
      >
        <div className="pointer-events-none absolute left-1/4 top-20 -z-0 h-72 w-72 rounded-full bg-purple-600/15 blur-[120px]" />

        <div className="relative">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-xs tracking-widest text-purple-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
            OPEN TO OPPORTUNITIES
          </div>

          <p className="mb-3 text-sm text-slate-400">HELLO, I'M</p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Vishal Kumar
            <br />
            <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Keshri.
            </span>
          </h1>

          <h2 className="mt-6 text-lg font-semibold text-slate-300 sm:text-2xl">
            AI/LLM Developer
            <span className="text-purple-400"> | </span>
            MERN Stack Developer
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            I build responsive web applications and explore AI-powered
            solutions. I enjoy solving real-world problems, writing clean code
            and creating useful digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5 sm:px-6"
            >
              View My Work
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-400/60 px-5 py-3.5 font-medium text-purple-200 transition hover:bg-purple-400/10 sm:px-6"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/Vishal9709"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-purple-400 hover:text-purple-300"
            >
              {/* <Code2 size={20} /> */}
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/vishal-kumar-keshri-79b046254/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-purple-400 hover:text-purple-300"
            >
              {/* <Linkedin size={20} /> */}
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:vkeshri267@gmail.com"
              aria-label="Email"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-purple-400 hover:text-purple-300"
            >
              {/* <Mail size={20} /> */}
              <MdEmail size={23} />
            </a>
          </div>
        </div>

        {/* PROFILE CARD */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-10 rounded-full bg-purple-600/20 blur-[100px]" />

          <div className="relative overflow-hidden rounded-3xl border border-purple-400/25 bg-gradient-to-b from-[#17132a] to-[#0c0c18] p-6 shadow-2xl shadow-purple-950/30 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5 text-xs text-slate-400">
              <span>VISHAL.DEV</span>
              <span className="text-purple-300">● PORTFOLIO</span>
            </div>

            <div className="mx-auto my-9 grid h-36 w-36 place-items-center rounded-full border border-purple-400/40 bg-gradient-to-br from-purple-500/25 to-fuchsia-500/10 text-purple-300 shadow-lg shadow-purple-500/10">
              <Code2 size={64} strokeWidth={1.3} />
            </div>

            <p className="text-center text-xs tracking-[0.25em] text-purple-300">
              DEVELOPER PROFILE
            </p>

            <h3 className="mt-4 text-center text-2xl font-bold">
              Building. Learning. Growing.
            </h3>

            <p className="mt-4 text-center text-sm leading-7 text-slate-400">
              Computer Science graduate interested in full-stack development,
              LLM applications and modern web technologies.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/10 pt-6 text-center">
              {[
                "GEN AI",
                "LLM",
                "React.js",
                "MongoDB",
                "Express.js",
                "Node.js",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white/[0.03] p-3"
                >
                  <p className="text-sm font-semibold text-purple-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFORMATION */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 pb-20 sm:grid-cols-3 sm:px-8">
        {[
          {
            icon: GraduationCap,
            title: "Education",
            subtitle: "B.Tech Computer Science",
          },
          {
            icon: Code2,
            title: "Development",
            subtitle: "MERN Stack",
          },
          {
            icon: Sparkles,
            title: "Exploring",
            subtitle: "AI & LLM Applications",
          },
        ].map(({ icon: Icon, title, subtitle }) => (
          <div
            key={title}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-purple-400/40"
          >
            <Icon size={29} className="shrink-0 text-purple-300" />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-white/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <p className="mb-4 text-xs font-bold tracking-[0.25em] text-purple-300">
            ABOUT ME
          </p>

          <h2 className="text-3xl font-bold sm:text-5xl">
            Turning ideas into{" "}
            <span className="text-purple-300">digital experiences.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-8 text-slate-400 sm:text-base">
            I'm Vishal Kumar Keshri, a Computer Science graduate interested in
            building responsive websites, backend APIs and AI-powered
            applications. I enjoy learning new technologies and developing
            practical software solutions.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="scroll-mt-24 relative overflow-hidden border-y border-purple-400/10 bg-[#0b0a16] px-6 py-20 sm:px-8 sm:py-24"
      >
        <div className="pointer-events-none absolute left-1/4 top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold tracking-[0.3em] text-fuchsia-400">
              WHAT I WORK WITH
            </p>

            <h2 className="text-3xl font-extrabold sm:text-5xl">
              My{" "}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              Technologies and tools I use to build modern web applications
              and explore AI-powered solutions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Frontend Development",
                description:
                  "Building responsive and interactive user interfaces.",
                icon: Code2,
                items: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React.js",
                  "Tailwind CSS",
                ],
              },
              {
                title: "Backend Development",
                description:
                  "Creating server-side applications and REST APIs.",
                icon: Server,
                items: ["Node.js", "Express.js", "Python", "REST APIs"],
              },
              {
                title: "Database Management",
                description:
                  "Working with databases to store and manage application data.",
                icon: Database,
                items: ["MongoDB"],
              },
              {
                title: "Tools & Technologies",
                description:
                  "Tools that support my development workflow.",
                icon: Wrench,
                items: ["Git", "GitHub", "VS Code", "Postman"],
              },
              {
                title: "Generative AI & LLMs",
                description:
                  "Exploring large language models and AI-powered applications.",
                icon: BrainCircuit,
                items: ["LLM", "RAG", "Prompt Engineering", "Python"],
              },
              {
                title: "AI Integration",
                description:
                  "Connecting AI capabilities with practical applications.",
                icon: Bot,
                items: [
                  "LLM APIs",
                  "API Integration",
                  "AI Applications",
                ],
              },
            ].map(({ title, description, icon: Icon, items }) => (
              <article
                key={title}
                className="group rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#171329] to-[#100e1c] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-950/20 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300 transition group-hover:bg-purple-500/20">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <h3 className="pt-1 text-lg font-bold leading-7 text-white">
                    {title}
                  </h3>
                </div>

                <p className="mt-5 min-h-[48px] text-sm leading-6 text-slate-400">
                  {description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.07] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-purple-400/40 hover:text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="scroll-mt-24 mx-auto max-w-6xl px-6 py-20 sm:px-8"
      >
        <p className="mb-4 text-xs font-bold tracking-[0.25em] text-purple-300">
          FEATURED WORK
        </p>

        <h2 className="text-3xl font-bold sm:text-5xl">
          Projects I've Built
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="group rounded-2xl border border-white/10 bg-[#0d0d19] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-purple-300">
                  PROJECT 0{index + 1}
                </span>

                <ArrowUpRight
                  size={19}
                  className="text-slate-500 transition group-hover:text-purple-300"
                />
              </div>

              <p className="mt-7 text-xs text-slate-500">
                {project.category}
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                {project.name}
              </h3>

              <p className="mt-4 min-h-14 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/[0.05] px-2 py-1.5 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-purple-200"
              >
                View Project
                <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="scroll-mt-24 relative overflow-hidden px-6 py-20 sm:px-8 sm:py-24"
      >
        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[110px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-bold tracking-[0.3em] text-fuchsia-400">
              LET'S CONNECT
            </p>

            <h2 className="text-3xl font-extrabold sm:text-5xl">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <p className="mt-4 text-sm text-slate-400 sm:text-base">
              Have a project in mind or want to collaborate? Let's connect!
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* CONTACT FORM */}
            <form
              onSubmit={async (event) => {
                event.preventDefault();

                const form = event.currentTarget;
                const data = new FormData(form);

                const templateParams = {
                  from_name: data.get("name"),
                  from_email: data.get("email"),
                  message: data.get("message"),
                };

                try {
                  await emailjs.send(
                    "service_wihf4qd",
                    "template_mx5w8u7",
                    templateParams,
                    "mtuDa-eDaBXUBZ2xb"
                  );

                  alert("Message sent successfully!");
                  form.reset();
                } catch (error) {
                  console.error("EmailJS error:", error);
                  alert("Message send nahi hua. Please try again.");
                }
              }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#11101d] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#11101d] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#11101d] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-600 px-6 py-4 font-semibold text-white shadow-lg shadow-purple-950/20 transition hover:-translate-y-0.5 hover:shadow-purple-500/20"
              >
                Send Message
                <Send size={17} />
              </button>

              <p className="text-xs leading-5 text-slate-500">
                Your message will be sent directly to my inbox.
              </p>
            </form>

            {/* CONTACT INFORMATION */}
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  title: "Location",
                  detail: "Bengaluru, India",
                },
                {
                  icon: Mail,
                  title: "Email",
                  detail: "vkeshri267@gmail.com",
                  href: "mailto:vkeshri267@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  detail: "8252835152",
                },
              ].map(({ icon: Icon, title, detail, href }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="mt-0.5 text-purple-400">
                    <Icon size={25} strokeWidth={1.9} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">{title}</h3>

                    {href ? (
                      <a
                        href={href}
                        className="mt-2 inline-block break-all text-sm leading-6 text-slate-400 transition hover:text-purple-300"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* SOCIAL LINKS */}
              <div className="border-t border-white/10 pt-7">
                <h3 className="mb-5 font-bold text-white">Follow Me</h3>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/Vishal9709"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-purple-300 transition hover:border-purple-400/50 hover:bg-purple-500/10"
                  >

                    <FaGithub size={22} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/vishal-kumar-keshri-79b046254/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-purple-300 transition hover:border-purple-400/50 hover:bg-purple-500/10"
                  >
                    <FaLinkedin size={22} />
                  </a>
                </div>
              </div>

              {/* OPPORTUNITIES CARD */}
              <div className="rounded-2xl border border-purple-400/15 bg-gradient-to-br from-purple-500/[0.08] to-fuchsia-500/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <Globe size={22} className="text-purple-300" />
                  <p className="font-semibold">Open to opportunities</p>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Interested in building useful products, collaborating on
                  projects and exploring new technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FIXED AI CHAT BUTTON */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          aria-label="Open AI assistant"
          title="Chat with Vishal's AI"
          className="fixed bottom-6 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-purple-300/40 bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.5)] transition duration-300 hover:scale-110 sm:right-6 sm:h-16 sm:w-16"
        >
          <Bot size={28} />
        </button>
      )}

      {/* CHATBOT WINDOW */}
      {chatOpen && (
        <aside className="fixed bottom-4 right-4 z-[60] flex h-[min(560px,calc(100dvh-32px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-purple-400/30 bg-[#0a0914] shadow-2xl shadow-purple-950/50 sm:bottom-5 sm:right-5">
          <header className="flex items-center gap-3 border-b border-white/10 bg-[#141024] p-4">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-purple-500/20 text-purple-300">
              <Bot size={23} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold">
                Vishal's AI Assistant
              </h3>
              <p className="mt-1 text-xs text-purple-300">
                Portfolio Assistant
              </p>
            </div>

            <button
              onClick={() => setChatOpen(false)}
              aria-label="Close chatbot"
              className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>
          </header>

          {/* CHAT MESSAGES */}
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((item, index) => (
              <div
                key={`${item.role}-${index}`}
                className={`max-w-[90%] whitespace-pre-wrap rounded-xl px-3.5 py-3 text-sm leading-6 ${
                  item.role === "user"
                    ? "ml-auto bg-purple-500 text-white"
                    : "border border-white/5 bg-[#171526] text-slate-200"
                }`}
              >
                {item.text}
              </div>
            ))}

            {loading && (
              <p className="text-xs text-purple-300">Thinking...</p>
            )}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    disabled={loading}
                    onClick={() => sendMessage(null, suggestion)}
                    className="rounded-full border border-purple-400/40 px-3 py-2 text-left text-xs text-purple-200 transition hover:bg-purple-500/15 disabled:opacity-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CHAT INPUT */}
          <form
            onSubmit={sendMessage}
            className="flex gap-2 border-t border-white/10 p-3"
          >
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about Vishal..."
              maxLength={1000}
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#141321] px-3 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-purple-400/60"
            />

            <button
              type="submit"
              disabled={loading || !question.trim()}
              aria-label="Send message"
              className="grid w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white disabled:opacity-40"
            >
              <Send size={18} />
            </button>
          </form>
        </aside>
      )}
    </div>
  );
}