import React from "react";
import Image from "../../assets/KC.jpg";
import { Link } from "react-router-dom";

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

const spinnerContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "300px",
};

const keyframes = `
@keyframes spin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
`;

const Hero = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{keyframes}</style>
      {loading ? (
        <div style={spinnerContainerStyle}>
          <span style={spinnerStyle}></span>
        </div>
      ) : (
        <section className="w-full py-16 px-4 sm:px-8 bg-gradient-to-r from-[#232526] to-[#3e9d26]">
          <div className="mx-auto flex flex-col items-center lg:flex-row justify-center gap-16 py-20 max-w-[1200px]">
            {/* Profile Card */}
            <div className="flex justify-center items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center w-80">
                <img
                  src={Image}
                  alt="Kelechukwu Ifeanyichukwu Aku"
                  className="w-50 h-50 rounded-full object-cover border-4 border-[#3e9d26] shadow-lg mb-4"
                />
                <h2 className="text-white text-2xl font-bold mt-2 text-center">
                  Kelechukwu Ifeanyichukwu Aku
                </h2>
                <p className="text-[#3e9d26] text-lg font-semibold text-center">
                  Frontend Web Developer
                </p>
              </div>
            </div>

            {/* Info Card */}
            <div className="w-full max-w-xl flex flex-col justify-center items-start gap-10">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col gap-6 w-full">
                <h1 className="text-white text-4xl sm:text-5xl font-bold font-['Roboto'] leading-tight">
                  Hi, I'm{" "}
                  <span className="text-[#3e9d26]">
                    Kelechukwu Ifeanyichukwu Aku
                  </span>
                  <br />
                  <span className="text-2xl sm:text-3xl text-white font-normal">
                    Frontend Web Developer
                  </span>
                </h1>
                <p className="text-white text-lg sm:text-xl font-normal font-['Roboto']">
                  I build modern, responsive, and engaging web applications with
                  React, JavaScript, TypeScript, Next.js, HTML, CSS, Bootstrap,
                  and Tailwind CSS. My passion is transforming ideas into
                  interactive digital experiences that delight users and drive
                  results.
                  <br />
                  <br />
                  Let's collaborate to bring your vision to life with clean
                  code, creative design, and a focus on performance.
                </p>

                <div className="flex items-center gap-6 mt-2">
                  <Link
                    to="/projects"
                    className="px-8 py-3 bg-[#3e9d26] rounded-[10px] text-white text-base font-semibold font-['Roboto'] shadow-lg hover:bg-[#33801f] transition"
                  >
                    View Projects
                  </Link>

                  <Link
                    to="/hireme"
                    className="flex items-center gap-2 text-white text-base font-normal font-['Roboto'] hover:underline"
                  >
                    Hire Me
                    <span className="relative">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5004 13.5 19.5004C13.301 19.5004 13.1101 19.4213 12.9694 19.2806C12.8286 19.1399 12.7496 18.949 12.7496 18.75C12.7496 18.551 12.8286 18.3601 12.9694 18.2194L18.4397 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H18.4397L12.9694 5.78061C12.8286 5.63988 12.7496 5.44901 12.7496 5.24999C12.7496 5.05097 12.8286 4.8601 12.9694 4.71936C13.1101 4.57863 13.301 4.49957 13.5 4.49957C13.699 4.49957 13.8899 4.57863 14.0306 4.71936L20.7806 11.4694C20.8504 11.539 20.9057 11.6217 20.9434 11.7128C20.9812 11.8038 21.0006 11.9014 21.0006 12C21.0006 12.0986 20.9812 12.1961 20.9434 12.2872C20.9057 12.3782 20.8504 12.461 20.7806 12.5306Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
