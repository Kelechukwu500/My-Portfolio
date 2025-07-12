import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const cardStyle = {
  background: "rgba(255,255,255,0.97)",
  borderRadius: "18px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.13)",
  padding: "2.5rem 2rem",
  maxWidth: 520,
  margin: "2.5rem auto",
  position: "relative",
};

const inputStyle = {
  width: "100%",
  padding: "0.85rem",
  margin: "0.5rem 0 1.2rem 0",
  borderRadius: "8px",
  border: "1.5px solid #bdb4e6",
  fontSize: "1.08rem",
  background: "#f7f6fd",
  transition: "border 0.2s",
  outline: "none",
};

const buttonStyle = {
  background: "linear-gradient(90deg, #3e9d26 0%, #1976d2 100%)",
  color: "#fff",
  border: "none",
  padding: "0.9rem 2.2rem",
  borderRadius: "8px",
  fontSize: "1.08rem",
  fontWeight: 600,
  cursor: "pointer",
  boxShadow: "0 2px 12px rgba(80, 0, 120, 0.08)",
  marginTop: "0.5rem",
  letterSpacing: "0.5px",
  transition: "background 0.2s",
};

const spinnerStyle = {
  display: "block",
  margin: "2.5rem auto",
  width: "48px",
  height: "48px",
  border: "6px solid #e0e7ff",
  borderTop: "6px solid #3e9d26",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

const keyframes = `
@keyframes spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
`;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "messages"), {
        name: form.name,
        email: form.email,
        message: form.message,
        timestamp: serverTimestamp(),
      });
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-16 px-4 sm:px-8"
      style={{
        minHeight: "100vh",
        borderRadius: "24px",
        boxShadow: "0 4px 32px rgba(80, 0, 120, 0.09)",
        width: "100vw",
        maxWidth: "100vw",
        margin: 0,
        left: 0,
        position: "relative",
        background: "linear-gradient(90deg, #232526 0%, #3e9d26 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <style>{keyframes}</style>
      {loading ? (
        <span style={spinnerStyle}></span>
      ) : (
        <div style={cardStyle}>
          <h1
            style={{
              textAlign: "center",
              fontWeight: 800,
              fontSize: "2rem",
              letterSpacing: "1px",
              marginBottom: "1.2rem",
              color: "#3e3a5d",
            }}
          >
            Contact Me
          </h1>
          <p
            style={{
              color: "#4b4b6b",
              textAlign: "center",
              marginBottom: "1.5rem",
            }}
          >
            Interested in working together or have a question? Fill out the form
            below or reach me directly at{" "}
            <a
              href="mailto:Kelechukwu508@gmail.com"
              style={{ color: "#1976d2", fontWeight: 600 }}
            >
              Kelechukwu508@gmail.com
            </a>
            .
          </p>

          {submitted ? (
            <div
              style={{
                color: "#388e3c",
                marginTop: "1.5rem",
                textAlign: "center",
                fontWeight: 600,
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                style={{ verticalAlign: "middle", marginRight: 8 }}
              >
                <circle cx="12" cy="12" r="12" fill="#e0f7e9" />
                <path
                  d="M7 13l3 3 7-7"
                  stroke="#3e9d26"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Thank you for reaching out! I will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} autoComplete="off">
              <input
                style={inputStyle}
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                style={inputStyle}
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                style={{ ...inputStyle, minHeight: 110, resize: "vertical" }}
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />
              {/* Centered Send Button */}
              <div style={{ textAlign: "center" }}>
                <button type="submit" style={buttonStyle}>
                  Send Message
                </button>
              </div>
            </form>
          )}

          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <a
              href="/Kelechukwu-CV.pdf"
              download="Kelechukwu-CV.pdf"
              style={{
                ...buttonStyle,
                background: "#3e9d26",
                display: "inline-block",
              }}
            >
              Download My CV
            </a>
          </div>

          <div
            style={{ marginTop: "2.2rem", color: "#555", textAlign: "center" }}
          >
            <strong style={{ color: "#3e3a5d" }}>Connect:</strong>
            <div
              style={{
                marginTop: "0.7rem",
                display: "flex",
                justifyContent: "center",
                gap: "1.2rem",
              }}
            >
              <a
                href="https://github.com/Kelechukwu500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  width={32}
                  style={{ filter: "drop-shadow(0 2px 8px #e0e7ff)" }}
                />
              </a>
              <a
                href="https://linkedin.com/in/kelechukwu-aku-0736a2156"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  width={32}
                  style={{ filter: "drop-shadow(0 2px 8px #e0e7ff)" }}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}
