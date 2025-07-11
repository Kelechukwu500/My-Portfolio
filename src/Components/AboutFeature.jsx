import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📝" },
  { name: "Redux", icon: "🔄" },
  { name: "Sass", icon: "💅" },
  { name: "Git", icon: "🔗" },
  { name: "Nextjs", icon: "🚀" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "BootStrap", icon: "🛠️" },
  { name: "Rest API", icon: "🔌" },
];

const cardStyle = {
  background: "rgba(255,255,255,0.85)",
  borderRadius: "18px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
  padding: "2rem",
  margin: "1rem 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",
};

const cardHoverStyle = {
  transform: "translateY(-8px) scale(1.03)",
  boxShadow: "0 16px 40px 0 rgba(31, 38, 135, 0.22)",
};

const skillGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "2rem",
  marginTop: "2.5rem",
};

const spinnerContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "300px",
};

const spinnerStyle = {
  width: "56px",
  height: "56px",
  border: "7px solid #e0e7ff",
  borderTop: "7px solid #3e9d26",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
  boxShadow: "0 2px 12px rgba(80, 0, 120, 0.10)",
  margin: "0 auto",
};

const keyframes = `
@keyframes spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
`;

export default function AboutFeature() {
  const [hovered, setHovered] = useState(null);
  const [loading, setLoading] = useState(true);

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, threshold: 0.1 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full py-16 px-4 sm:px-8 bg-gradient-to-r from-[#232526] to-[#3e9d26]"
      style={{
        minHeight: "100vh",
        borderRadius: "24px",
        boxShadow: "0 4px 32px rgba(80, 0, 120, 0.09)",
        width: "100vw",
        maxWidth: "100vw",
        margin: 0,
        left: 0,
        position: "relative",
      }}
    >
      <style>{keyframes}</style>
      <h1
        style={{
          textAlign: "center",
          fontWeight: 800,
          fontSize: "2.5rem",
          letterSpacing: "1px",
          marginBottom: "1.5rem",
          color: "#fff",
        }}
      >
        About Me
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2.5rem",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(8px)",
            borderRadius: "1.5rem",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.13)",
            padding: "2.5rem 2rem",
            maxWidth: 600,
            textAlign: "center",
          }}
        >
          <h2
            style={{ fontWeight: 700, color: "#3e9d26", marginBottom: "1rem" }}
          >
            Let's Connect!
          </h2>
          <p
            style={{
              fontSize: "1.15rem",
              color: "#4b4b6b",
              marginBottom: "1.2rem",
            }}
          >
            I'm a passionate developer who loves building beautiful and
            functional web experiences. Interested in working together or have
            any questions? Feel free to reach out!
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            <span style={{ fontWeight: 600, color: "#3e3a5d" }}>Email:</span>{" "}
            <a
              href="mailto:Kelechukwu508@gmail.com"
              style={{
                color: "#3e9d26",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#2e7d1b")}
              onMouseOut={(e) => (e.target.style.color = "#3e9d26")}
            >
              Kelechukwu508@gmail.com
            </a>
          </p>
        </div>
      </div>

      <h2
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "2rem",
          color: "#fff",
          marginBottom: "1.2rem",
        }}
      >
        My Skills
      </h2>
      {loading ? (
        <div style={spinnerContainerStyle}>
          <span style={spinnerStyle}></span>
        </div>
      ) : (
        <div style={skillGrid}>
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              style={{
                ...cardStyle,
                ...(hovered === idx ? cardHoverStyle : {}),
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <span
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "0.5rem",
                  color: "#3e9d26",
                  filter: "drop-shadow(0 2px 8px #e0e7ff)",
                }}
              >
                {skill.icon}
              </span>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "1.15rem",
                  color: "#3e3a5d",
                  letterSpacing: "0.5px",
                }}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
