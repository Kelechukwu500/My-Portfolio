import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const links = [
  
    { title: "About", target: "about" },
    { title: "Projects", target: "projects" },
    { title: "Approach", target: "approach" },
  ];

  // Optional: highlight current section
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) =>
        document.getElementById(link.target)
      );
      const scrollPos = window.scrollY + 100; // offset for navbar height

      sections.forEach((sec, idx) => {
        if (
          sec &&
          scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
          setActive(links[idx].target);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 fixed w-full z-50">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        {/* nav logo */}
        <a href="#" className="flex items-center">
          <span className="logo self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Kaycee
          </span>
        </a>

        {/* mobile menu */}
        <div className="flex md:hidden items-center lg:order-2">
          <button className="text-white inline-flex text-3xl">
            <FaBars />
          </button>
        </div>

        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {links.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScrollTo(link.target)}
                  className={`block py-2 pl-3 pr-4 rounded lg:p-0 transition ${
                    active === link.target
                      ? "text-purple-700 dark:text-white"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {link.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
