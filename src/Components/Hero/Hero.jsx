import React, { useEffect, useState } from "react";
import CodeImage from "../../assets/CodeImage.jpg";
import KC from "../../assets/KC.jpg";
import { Link } from "react-router-dom";
import { FaGithub, FaFacebookF, FaWhatsapp, FaLinkedin} from "react-icons/fa";
import { BsX } from "react-icons/bs"; // X (Twitter) icon
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaBolt,
  FaChartBar,
  FaProjectDiagram,
} from "react-icons/fa";

import Photo1 from "../../assets/Photo1.jpg";
import Photo2 from "../../assets/Photo2.jpg";
import Photo3 from "../../assets/Photo3.jpg";
import Photo4 from "../../assets/Photo4.jpg";
import Photo5 from "../../assets/Photo5.jpg";
import Photo6 from "../../assets/Photo6.jpg";
import Photo7 from "../../assets/Photo7.jpg";
import Photo8 from "../../assets/Photo8.jpg";




import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiFirebase, SiApollographql, SiMongodb } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import Station from "../../assets/Station.jpg"; // replace with your image
import HeroImage from "../../assets/Heroimage.jpg";




const Hero = () => {
  const [progress, setProgress] = useState(0);

  /* Fast % Loader */
  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += 5;
      setProgress(value);
      if (value >= 100) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  if (progress < 100) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#0d0f12]">
        <p className="text-white text-xl font-semibold">{progress}%</p>
        <div className="w-64 h-1 bg-white/20 mt-4 rounded">
          <div
            className="h-full bg-[#3e9d26] rounded transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  }



   {
     /* Tech Icons Mapping */
   }
   const techIcons = {
     React: <FaReact className="text-blue-400" size={16} />,
     Redux: <SiRedux className="text-purple-600" size={16} />,
     MongoDB: <SiMongodb className="text-green-500" size={16} />,
     Tailwind: <SiTailwindcss className="text-sky-400" size={16} />,
     Bootstrap: <FaBootstrap className="text-purple-500" size={16} />,
     "Node.js": <FaNodeJs className="text-green-600" size={16} />,
     Firebase: <SiFirebase className="text-yellow-400" size={16} />,
     API: <SiApollographql className="text-orange-400" size={16} />,
   };


  return (
    <section className="relative min-h-screen w-full bg-[#0d0f12] overflow-hidden px-6 md:px-12">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Dots Top Left */}
      <div className="absolute top-10 left-10 grid grid-cols-6 gap-2 opacity-40">
        {[...Array(24)].map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
        ))}
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto flex flex-col items-center text-center py-24 gap-16">
        {/* TEXT */}
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight">
            Hi! Welcome to My <span className="text-white/70">Portfolio</span>
          </h1>

          <p className="mt-6 text-white/80 text-lg sm:text-xl">
            I'm a{" "}
            <span className="italic underline decoration-[#3e9d26] decoration-2 underline-offset-4">
              Frontend
            </span>{" "}
            website developer
            <br />
            Let’s build your online presence quickly and efficiently.
          </p>
        </div>
        {/* CODE IMAGE */}
        <div className="w-full max-w-3xl">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-white/30">
            <img
              src={CodeImage}
              alt="Code preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        {/* ABOUT ME SECTION */}
        <section
          id="about"
          className="w-full bg-[#f6f7fb] py-20 px-6 md:px-12 shadow-lg rounded-3xl -mt-24"
        >
          <div className="max-w-[1200px] mx-auto bg-white rounded-[40px] shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 p-10 lg:p-16">
              {/* LEFT CONTENT */}
              <div className="flex-1 text-left">
                <h4 className="text-sm font-semibold text-gray-500 tracking-wide mb-2">
                  <span className="relative inline-block">
                    Kelechukwu Aku
                    <span className="absolute left-0 -bottom-1 h-[3px] bg-rose-500 animate-underline"></span>
                  </span>
                </h4>

                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  Know more <br />
                  <span className="text-rose-500">About me</span>
                </h2>

                <p className="mt-6 text-gray-600 max-w-xl leading-relaxed">
                  A Frontend Developer specializing in React and Next.js,
                  crafting modern, high-performance web applications. Passionate
                  about blending sleek design with seamless functionality to
                  create scalable, user-centric solutions that elevate business
                  outcomes.
                </p>

                {/* SOCIAL ICONS */}
                <div className="mt-8 flex items-center gap-4">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/Blessedsoul1990"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-blue-700 hover:text-white transition"
                  >
                    <FaFacebookF size={20} color="#1877F2" />
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com/Elongated_guyy"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-[#1DA1F2] hover:text-white transition"
                  >
                    <BsX size={20} color="#000000" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/2347039422404"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-green-600 hover:text-white transition"
                  >
                    <FaWhatsapp size={20} color="#25D366" />
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Kelechukwu500"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-900 hover:text-white transition"
                  >
                    <FaGithub size={20} color="#181717" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/kelechukwu-aku-0736a2156/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-blue-800 hover:text-white transition"
                  >
                    <FaLinkedin size={20} color="#0A66C2" />
                  </a>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-[280px] sm:w-[320px] md:w-[360px] h-[300px] sm:h-[320px] md:h-[340px] rounded-2xl overflow-hidden bg-black">
                  <img
                    src={KC}
                    alt="Abdul-Razaq"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* UNDERLINE ANIMATION */}
          <style>
            {`
      @keyframes underlineMove {
        0% { width: 0; }
        100% { width: 100%; }
      }

      .animate-underline {
        animation: underlineMove 1.5s ease-in-out infinite alternate;
      }
    `}
          </style>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="w-full w-screen bg-[#0b0b0b] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 shadow-lg rounded-3xl mt-2"
        >
          <div className="max-w-[1350px] mx-auto">
            {/* Heading */}
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                Project Features
              </h1>

              <p className="text-gray-400 text-base sm:text-lg mb-10 sm:mb-14 max-w-2xl">
                Highlights from my most recent work
              </p>
            </div>

            {/* Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              whileHover="hovering"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
            >
              {[
                {
                  title: "True Weather",
                  desc: "A dynamic weather forecasting app using APIs with detailed forecast and radar view.",
                  live: "https://weatherappdis.onrender.com",
                  github: "https://github.com/Kelechukwu500",
                  stack: ["React", "API", "Tailwind"],
                  image: Photo1,
                },
                {
                  title: "Apple Store",
                  desc: "A responsive e-commerce website mimicking the Apple Store with cart functionality.",
                  live: "https://apple-store-egs0.onrender.com",
                  github: "https://github.com/Kelechukwu500",
                  stack: ["React", "Redux", "Bootstrap"],
                  image: Photo2,
                },
                {
                  title: "Parker Engineering",
                  desc: "Engineering solutions website showcasing services, projects, and company profile.",
                  live: "https://www.parkersengroup.com",
                  github: "https://github.com/Kelechukwu500",
                  stack: ["React", "Tailwind", "Firebase", "Framer Motion"],
                  image: Photo3,
                },
                {
                  title: "Uche Portfolio",
                  desc: "A professional portfolio for Customer Support, Data Entry, and Sales roles.",
                  live: "https://uche-portfolio.onrender.com",
                  github: "https://github.com/Kelechukwu500",
                  stack: ["React", "Framer Motion", "Firebase"],
                  image: Photo4,
                },
                {
                  title: "Fit Tracker",
                  desc: "A fitness tracking web app to monitor workouts, calories, and goals.",
                  live: "https://fittracker-3ykk.onrender.com",
                  github: "https://github.com/Kelechukwu500",
                  stack: ["React", "Node.js", "Tailwind"],
                  image: Photo5,
                },
                {
                  title: "Props Mastery",
                  desc: "A React project focused on props and reusable component patterns.",
                  live: "https://props-4r3u.onrender.com",
                  github: "https://github.com/Kelechukwu500",
                  stack: ["React", "Bootstrap"],
                  image: Photo6,
                },
                {
                  title: "Glammed By Luchi",
                  desc: "A beauty website showcasing makeup artistry and transformations.",
                  live: "https://glammedbyluchi.onrender.com/",
                  github: "https://github.com/Kelechukwu500",
                  stack: ["React", "Tailwind", "Firebase"],
                  image: Photo7,
                },
                {
                  title: "WorkSprint",
                  desc: "A project management app for organizing tasks and tracking progress.",
                  live: "https://worksprint.onrender.com",
                  github: "https://github.com/Kelechukwu500",
                  stack: ["React", "MongoDB"],
                  image: Photo8,
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: index * 0.06 },
                    },
                    hovering: {
                      scale: 0.96,
                      opacity: 0.55,
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -12,
                    opacity: 1,
                  }}
                  className="group bg-gray-800 rounded-2xl overflow-hidden shadow-lg
          hover:shadow-[0_0_35px_rgba(244,63,94,0.35)]
          transition-all duration-500
          min-h-[400px] sm:min-h-[420px]
          flex flex-col"
                >
                  {/* Image */}
                  <div className="h-44 sm:h-48 w-full overflow-hidden shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full border border-gray-300 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-rose-500">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.stack.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#1f1f1f] text-gray-300 text-[11px] sm:text-xs"
                        >
                          {techIcons[tech] && <span>{techIcons[tech]}</span>}
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-[#222]">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-400 text-sm hover:underline"
                      >
                        Live Demo <FiExternalLink size={14} />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-400 text-sm hover:text-white transition"
                      >
                        <FaGithub size={16} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* KEY FEATURES SECTION */}
        <section className="w-full w-screen bg-[#0b0b0b] py-20 px-6 md:px-12 -mt-2 shadow-lg rounded-3xl -mt-8">
          <div className="max-w-[1200px] mx-auto">
            {/* Text Content (LEFT ALIGNED) */}
            <div className="text-left">
              {/* Small Tag */}
              <span className="inline-block bg-[#1f2937] text-white text-sm px-3 py-1 rounded-full mb-4">
                Key Features
              </span>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Quality in Every Detail
              </h2>

              {/* Subheading */}
              <p className="text-gray-400 text-base sm:text-lg mb-12 max-w-3xl">
                Excellence driven by innovation and thoughtful attention to
                detail.
              </p>
            </div>

            {/* Features Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              whileHover="hovering"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
            >
              {/* Feature Card */}
              {[
                {
                  icon: <FaPaintBrush className="w-6 h-6" />,
                  title: "Creative Design",
                  text: "Crafting unique, responsive websites that perfectly blend aesthetics with functionality.",
                  from: -80,
                  delay: 0,
                },
                {
                  icon: <FaBolt className="w-6 h-6" />,
                  title: "Rapid Development",
                  text: "Swift and efficient development process without compromising on quality.",
                  from: 80,
                  delay: 0.1,
                },
                {
                  icon: <FaChartBar className="w-6 h-6" />,
                  title: "High Performance",
                  text: "Optimized code and efficient hosting ensuring lightning-fast page loads.",
                  from: -80,
                  delay: 0.2,
                },
                {
                  icon: <FaProjectDiagram className="w-6 h-6" />,
                  title: "Scalable Architecture",
                  text: "Future-proof solutions built to grow with your needs.",
                  from: 80,
                  delay: 0.3,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: item.from },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.7,
                        ease: "easeOut",
                        delay: item.delay,
                      },
                    },
                    hovering: {
                      scale: 0.97,
                      opacity: 0.6,
                    },
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    opacity: 1,
                  }}
                  className="relative flex items-start gap-4 bg-[#1f2937] p-6 rounded-xl shadow transition-all border-b-4 border-transparent hover:border-white"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-lg text-black">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WEB DEVELOPMENT APPROACH SECTION */}
        <section
          id="approach"
          className="w-full w-screen bg-[#0b0b0b] py-20 px-6 md:px-12"
        >
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* LEFT CONTENT */}
            <div className="text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                My Web Development <br /> Approach
              </h2>

              <p className="text-gray-400 text-base sm:text-lg max-w-xl mb-12">
                I apply a proven, structured approach to crafting high-quality
                websites that align with my clients’ objectives. From
                requirement gathering to launch and long-term maintenance, each
                stage is key to achieving lasting success.
              </p>

              {/* IMAGE HOLDER */}
              <motion.div
                initial={{ x: -120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={Station}
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* RIGHT STEPS */}
            <div className="relative pl-8">
              {/* Vertical Line */}
              <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gray-700" />

              {/* "STEPS" Label */}
              <div className="absolute -top-6 left-0 text-white font-bold text-sm tracking-widest -mt-8">
                STEPS
              </div>

              <div className="space-y-12">
                {[
                  {
                    title: "Client Requirements Gathering",
                    text: "Understanding the client’s needs and objectives to build a roadmap for the project.",
                  },
                  {
                    title: "Design and Development",
                    text: "Creating design mockups and developing the website to meet expectations.",
                  },
                  {
                    title: "Testing and Optimization",
                    text: "Thorough testing to ensure performance, usability, and responsiveness.",
                  },
                  {
                    title: "Deployment",
                    text: "Launching the product smoothly with final checks and monitoring.",
                  },
                  {
                    title: "Maintenance & Support",
                    text: "Ongoing updates, monitoring, and improvements post-launch.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.25, duration: 0.6 }}
                    className="relative flex gap-6"
                  >
                    {/* Animated Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3, type: "spring" }}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black font-bold"
                    >
                      {index + 1}
                    </motion.div>

                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-sm sm:text-base">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA BUTTON */}
              <div className="mt-16">
                <a
                  href="https://calendly.com/kelechukwu508/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-black px-6 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  <motion.span
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  >
                    <FaPhoneAlt />
                  </motion.span>
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HERO SECTION WITH MOVING WAVE (SCREENSHOT STYLE) */}
        <section className="relative w-full w-screen bg-white overflow-hidden -mt-8">
          {/* Dark Top Area */}
          <div className="absolute top-0 left-0 w-full h-[160px] bg-[#0b0b0b] overflow-hidden">
            <svg
              className="absolute bottom-0 w-[200%] h-full"
              viewBox="0 0 1440 160"
              preserveAspectRatio="none"
            >
              <path
                fill="#ffffff"
                d="
          M0,80
          C120,90 240,70 360,80
          C480,90 600,110 720,100
          C840,90 960,70 1080,80
          C1200,90 1320,110 1440,100
          L1440,160 L0,160 Z
        "
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="-720 0"
                  dur="25s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>

          {/* HERO CONTENT */}
<div className="relative w-screen overflow-x-hidden">
  <div className="w-full px-6 md:px-12 pt-40 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
    
    {/* Left Text */}
    <div className="text-left">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
        Build in your way <br />
        but with my <span className="text-gray-500">Expertise.</span>
      </h1>

      <p className="text-gray-500 text-base sm:text-lg max-w-xl">
        Develop your front-end web project in your unique style. You're
        just a click away.
      </p>
    </div>

    {/* Right Side Image */}
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="w-full max-w-[520px] h-[360px] rounded-2xl overflow-hidden shadow-lg mx-auto lg:ml-auto"
    >
      <img
        src={HeroImage}
        alt="Hero"
        className="w-full h-full object-cover rounded-lg shadow-lg grayscale"
      />
    </motion.div>

  </div>
</div>
</section>
      </div>
    </section>
  );
};

export default Hero;
