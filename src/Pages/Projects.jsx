// src/pages/Projects.jsx
import React from "react";

const projects = [
  {
    name: "True Weather",
    description:
      "A dynamic weather forecasting app using APIs with detailed forecast and radar view.",
    link: "https://weatherappdis.onrender.com",
  },

  {
    name: "Apple-Store",
    description:
      "A responsive e-commerce website mimicking the Apple Store with product listings and cart functionality.",
    link: "https://apple-store-egs0.onrender.com",
  },
  {
    name: "Fit Tracker",
    description:
      "A fitness tracking web app that helps you monitor workouts, calories, and goals.",
    link: "https://fittracker-3ykk.onrender.com",
  },
  {
    name: "Props Mastery",
    description:
      "A React project exploring props and reusable components with practical examples.",
    link: "https://props-4r3u.onrender.com",
  },
];

const Projects = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-8 bg-gradient-to-r from-[#232526] to-[#3e9d26]">
      <h1 className="text-4xl font-bold text-center text-white">My Projects</h1>
      <p className="mt-4 mb-10 text-lg text-center text-white">
        Explore some of the projects I've built.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-[#3e9d26] mb-2">
              {project.name}
            </h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-4 py-2 bg-[#3e9d26] text-white rounded-lg hover:bg-green-700 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
