import React from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Gomycode",
    period: "Jan 2025 - May 2025",
    description:
      "Developed and maintained responsive web applications using React and Redux. Collaborated with designers to create seamless user experiences and optimized performance across devices.",
    icon: "💻",
  },
  {
    role: "Web Developer Intern",
    company: "Creative Web Studio",
    period: "Jun 2024 - Dec 2024",
    description:
      "Assisted in building client websites with HTML, CSS, and JavaScript. Implemented UI enhancements and contributed to code reviews and testing.",
    icon: "🛠️",
  },
  {
    role: "Freelance Data Analyst/Data Entry Specialist",
    company: "Freelance Projects",
    period: "2022 - 2024",
    description:
      "Managed and analyzed large datasets using Excel, Tableu and Power BI to generate insights, track performance, and support decision-making. Ensured accurate data entry, cleaning, and reporting for sales, customer behavior, and inventory systems..",
    icon: "🚀",
  },
];

const cardStyle = {
  background: "rgba(255,255,255,0.92)",
  borderRadius: "18px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.13)",
  padding: "2rem",
  margin: "1.5rem 0",
  display: "flex",
  alignItems: "flex-start",
  gap: "2rem",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",
};

const cardHoverStyle = {
  transform: "translateY(-8px) scale(1.03)",
  boxShadow: "0 16px 40px 0 rgba(31, 38, 135, 0.18)",
};

const spinnerStyle = {
  display: "block",
  margin: "3rem auto",
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

export default function Experience() {
  const [loading, setLoading] = React.useState(true);
  const [hovered, setHovered] = React.useState(null);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
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
          marginBottom: "2rem",
          color: "#fff",
        }}
      >
        Experience
      </h1>
      {loading ? (
        <span style={spinnerStyle}></span>
      ) : (
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              style={{
                ...cardStyle,
                ...(hovered === idx ? cardHoverStyle : {}),
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <span
                style={{
                  fontSize: "2.8rem",
                  marginRight: "0.5rem",
                  color: "#3e9d26",
                  filter: "drop-shadow(0 2px 8px #e0e7ff)",
                  minWidth: "3rem",
                  textAlign: "center",
                }}
              >
                {exp.icon}
              </span>
              <div>
                <h2
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: "1.35rem",
                    color: "#3e3a5d",
                  }}
                >
                  {exp.role}
                </h2>
                <h3
                  style={{
                    margin: "0.3rem 0",
                    color: "#3e9d26",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                  }}
                >
                  {exp.company} &middot;{" "}
                  <span style={{ fontWeight: "normal", color: "#fff" }}>
                    {exp.period}
                  </span>
                </h3>
                <p
                  style={{
                    marginTop: "0.7rem",
                    color: "#4b4b6b",
                    fontSize: "1.08rem",
                    lineHeight: 1.6,
                  }}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
