// src/components/HireMe.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCode, FaRocket, FaLaptopCode } from "react-icons/fa";

const HireMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const MotionCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500"
    >
      <div className="flex items-center mb-4 text-green-600 text-3xl">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </motion.div>
  );

  return (
    <div
      ref={ref}
      className="w-full min-h-screen px-6 py-20 bg-gradient-to-r from-[#1a2b1f] via-[#2b5720] to-[#3e9d26] text-white"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Hire Me
        </motion.h2>
        <p className="mt-4 text-lg">
          Let’s build engaging, responsive, and modern web experiences together!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <MotionCard
          icon={FaLaptopCode}
          title="Modern Web Development"
          description="Expert in building fast, interactive interfaces with React, JavaScript, Next.js, Tailwind, and Bootstrap."
          delay={0.1}
        />
        <MotionCard
          icon={FaCode}
          title="Clean & Scalable Code"
          description="Write modular, maintainable code and integrate APIs or databases efficiently while keeping performance in mind."
          delay={0.2}
        />
        <MotionCard
          icon={FaRocket}
          title="Project Delivery"
          description="Committed to timely delivery of high-quality solutions that meet user needs and exceed expectations."
          delay={0.3}
        />
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="/contact"
          className="bg-white text-green-700 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-100 transition duration-300"
        >
          Let's Connect
        </a>
      </div>
    </div>
  );
};

export default HireMe;

