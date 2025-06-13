import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  // Define navigation links for routing
  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/About" },
    { title: "Experience", url: "/Experience" },
    { title: "Contact", url: "/Contact" },
  ];

  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        {/* nav logo */}
        <a href="#" className="flex items-center">
          <span className="logo self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Kaycee
          </span>
        </a>

        {/* mobile menu div */}
        <div className="flex md:hidden items-center lg:order-2">
          {/* mobile menu icon */}
          <button className="text-white inline-flex text-3xl">
            <FaBars />
          </button>
        </div>

        <div
          className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          {/* desktop menu */}
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.url}
                  className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
