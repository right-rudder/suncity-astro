import { navbarLinks } from "../data/navbarLinks.js";
import { mobileNavbarLinks } from "../data/mobileNavbarLinks.js";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_NUMBER,
  LINKEDIN_URL,
} from "../consts.ts";

const Navbar = ({ pathname }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [navBar, setNavbar] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMobile(() => !openMobile);
    if (!openMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [subHoveredIndex, setSubHoveredIndex] = useState(null);

  const isActive = (menuItem, pathname) => {
    let selected =
      menuItem?.submenu?.some(
        (item) =>
          item.link === pathname ||
          item.link + "/" === pathname ||
          item.subsubmenu?.some(
            (subItem) =>
              subItem.link === pathname || subItem.link + "/" === pathname
          )
      ) ||
      menuItem?.subsubmenu?.some(
        (item) => item.link === pathname || item.link + "/" === pathname
      ) ||
      menuItem.link === pathname ||
      menuItem.link + "/" === pathname;
    return selected;
  };

  const handleItemClick = (index) => {
    if (hoveredIndex == index) {
      setHoveredIndex(null);
      setSubHoveredIndex(null);
    } else setHoveredIndex(index);
  };

  const handleSubItemClick = (event, subIndex) => {
    event.stopPropagation();
    if (subHoveredIndex == subIndex) setSubHoveredIndex(null);
    else setSubHoveredIndex(subIndex);
  };

  return (
    <nav className="w-full h-0 sticky inset-0 z-20 font-sans tracking-wider">
      <div
        className={`${
          navBar || openMobile
            ? "bg-primary-950/90 backdrop-blur-sm"
            : "bg-transparent"
        } duration-500`}
      >
        <div className="px-5 max-w-7xl mx-auto top-0">
          <div
            className={`${navBar || openMobile ? "lg:h-20" : "lg:h-28"} relative flex h-20 align-middle justify-between transition-all`}
            id="navbar"
          >
            <div className="flex w-full items-center justify-between">
              <a
                href="/"
                title="Sun City Aviation Academy"
                className="relative hover:brightness-110 duration-200 ease-in-out w-4/6 md:w-1/3 lg:w-2/12"
              >
                <img
                  src="/sun-city-white-text-logo.webp"
                  alt="Sun City Aviation Academy Logo"
                  aria-label="Sun City Aviation Academy Logo"
                  title="Sun City Aviation Academy"
                  loading="eager"
                  className={`${navBar || openMobile ? "h-16 lg:h-32 w-9/12 lg:w-10/12" : "h-20 lg:h-32 w-10/12 lg:w-full"} object-contain duration-500`}
                />
              </a>
              <div className="hidden lg:flex justify-end w-full">
                <ul className="flex justify-between align-middle w-10/12 items-center">
                  {navbarLinks.map((item, index) => (
                    <li
                      key={index}
                      className={`${isActive(item, pathname) ? "decoration-transparent underline font-bold" : "font-medium"} py-0 uppercase tracking-tight relative group last:no-underline last:px-0`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          target={`${item.link.includes("http") ? "_blank" : "_self"}`}
                          className="font-semibold text-lg duration-300 hover:underline decoration-accent-200 decoration-4 underline-offset-[10px] py-12 border-accent whitespace-nowrap group-last:font-bold group-last:hover:text-muted-950 group-last:bg-accent-300 group-last:py-3 group-last:px-5 group-last:rounded-sm group-last:hover:bg-accent-400 group-last:hover:no-underline"
                        >
                          <span className="relative font-semibold text-accent-50 group-last:text-muted-950">
                            {item.name}
                          </span>
                        </a>
                      ) : (
                        <span className="font-semibold cursor-default text-accent-50 text-lg duration-300 hover:underline decoration-accent-200 decoration-4 underline-offset-[10px] py-12 whitespace-nowrap">
                          {item.name}
                        </span>
                      )}
                      {item.submenu && item.submenu.length > 0 && (
                        <ul
                          className={`absolute top-10 bg-accent-300/95 border-b-4 border-black/20 whitespace-nowrap text-primary-950 -left-4 duration-200 ease-out ${hoveredIndex === index ? "max-h-auto w-auto opacity-100" : "max-h-0 h-0 opacity-0 overflow-hidden"}`}
                        >
                          {item.submenu.map((subitem, subIndex) => (
                            <li
                              key={subIndex}
                              className={`${isActive(subitem, pathname) ? "bg-accent-200 text-primary-900" : ""} relative hover:bg-accent-200 hover:scale-105 px-1 hover:font-semibold hover:shadow-sm drop-shadow-sm font-medium`}
                              onMouseEnter={() => setSubHoveredIndex(subIndex)}
                              onMouseLeave={() => setSubHoveredIndex(null)}
                            >
                              {subitem.link ? (
                                <a
                                  className="p-3 block"
                                  href={subitem.link}
                                  target={`${subitem.link.includes("http") ? "_blank" : "_self"}`}
                                >
                                  {subitem.name}
                                </a>
                              ) : (
                                <span className="cursor-default p-3 block">
                                  {subitem.name}
                                </span>
                              )}

                              {subitem.subsubmenu &&
                                subitem.subsubmenu.length > 0 && (
                                  <ul
                                    className={`absolute z-20 top-0 bg-primary-400 whitespace-nowrap left-full duration-500 ${subHoveredIndex === subIndex ? "max-h-auto w-auto opacity-100" : "max-h-0 w-0 opacity-0 overflow-hidden"}`}
                                  >
                                    {subitem.subsubmenu.map(
                                      (subsubitem, subsubIndex) => (
                                        <li
                                          key={subsubIndex}
                                          className={`${isActive(subsubitem, pathname) ? "bg-accent" : ""} relative hover:bg-secondary`}
                                        >
                                          <a
                                            href={subsubitem.link}
                                            target={`${subsubitem.link.includes("http") ? "_blank" : "_self"}`}
                                            className="block p-3"
                                          >
                                            {subsubitem.name}
                                          </a>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              <button
                type="button"
                className="mobile-menu-button relative inline-flex items-center justify-center rounded-md p-2"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleHamburgerClick}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className={`${openMobile ? "hidden" : "block"} h-6 w-6 text-accent-300`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.0"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="x-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>

                <svg
                  className={`${openMobile ? "block" : "hidden"} h-6 w-6 text-accent-300`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.0"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="hamburger-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          openMobile ? "max-h-screen" : "max-h-0"
        } overflow-x-hidden duration-700 ease-in-out h-screen lg:hidden absolute w-full bg-gradient-to-b from-accent-300 to-yellow-500 z-20 top-0`}
        id="mobile-menu"
      >
        <div className="flex justify-end pl-5 pr-[26px] py-6">
          <svg
            className={`${openMobile ? "opacity-100" : "opacity-0"} h-6 w-6 text-accent-100 cursor-pointer z-30 text-primary-900-50 duration-300`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            aria-hidden="true"
            id="hamburger-icon"
            onClick={handleHamburgerClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>

        <a
          href="/"
          className="z-30 relative flex justify-center items-center align-middle"
        >
          <img
            src="/sun-city-white-text-logo.webp"
            alt="Sun City Aviation Academy Logo"
            aria-label="Sun City Aviation Academy Logo"
            title="Sun City Aviation Academy"
            className="object-contain h-24 w-auto drop-shadow-sm"
          />
        </a>

        <div
          className={`absolute w-full h-48 bg-black top-0 z-20 duration-500 ease-in-out  ${
            openMobile
              ? "translate-x-0 opacity-90"
              : "-translate-x-full opacity-0"
          }`}
        ></div>

        <ul className="px-4 pb-3 mt-5 pt-2 flex flex-col align-middle items-center">
          {mobileNavbarLinks.map((item, index) => (
            <li
              key={index}
              className="relative group border-b border-primary-100/20 last:border-none w-full text-center"
              onClick={() => handleItemClick(index)}
            >
              {item.link ? (
                <a
                  href={item.link}
                  target={`${item.link.includes("http") ? "_blank" : "_self"}`}
                  className="font-bold p-5 block text-xl duration-300 text-white border-accent-200 whitespace-nowrap group-last:bg-black group-last:font-medium group-last:border-2 group-last:mt-12 group-last:py-4 group-last:px-8 group-last:rounded-full group-last:text-center group-last:mx-5"
                >
                  {item.name}
                </a>
              ) : (
                <div className="font-bold relative p-5 w-full justify-center flex cursor-pointer text-xl duration-300  border-accent whitespace-nowrap">
                  <p>{item.name}</p>
                  <div
                    className={`absolute right-3 p-2 pointer-events-none duration-500 ease-in-out rounded-full ${hoveredIndex === index ? "bg-primary/30 -rotate-90" : "bg-primary/30 rotate-90"} 
                    `}
                  >
                    <IoIosArrowForward
                      className={`${hoveredIndex === index ? "text-accent-800" : "text-accent-900"} size-5`}
                    />
                  </div>
                </div>
              )}
              {item.submenu && item.submenu.length > 0 && (
                <ul
                  className={`mx-auto bg-primary/50 whitespace-nowrap left-0 duration-500 overflow-hidden ${hoveredIndex === index ? "max-h-[50rem]" : "max-h-0"}`}
                >
                  {item.submenu.map((subitem, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative border-b border-primary-100/20 w-full"
                      onClick={(event) => handleSubItemClick(event, subIndex)}
                    >
                      {subitem.link ? (
                        <a
                          className="p-5 block font-normal"
                          href={subitem.link}
                          target={`${subitem.link.includes("http") ? "_blank" : "_self"}`}
                        >
                          {subitem.name}
                        </a>
                      ) : (
                        <div className="font-normal p-5 w-full justify-between flex cursor-pointer text-lg duration-300 border-accent whitespace-nowrap">
                          <p>{subitem.name}</p>
                          <div
                            className={`p-1 pointer-events-none duration-300 rounded-full ${subHoveredIndex === subIndex ? "bg-white rotate-90" : "bg-accent -rotate-90"} 
                    `}
                          >
                            <IoIosArrowForward
                              className={`${subHoveredIndex === subIndex ? "text-accent-500" : "text-accent-100"} size-5`}
                            />
                          </div>
                        </div>
                      )}

                      {subitem.subsubmenu && subitem.subsubmenu.length > 0 && (
                        <ul
                          className={`ml-8 bg-primary whitespace-nowrap left-full duration-500 overflow-hidden ${subHoveredIndex === subIndex ? "max-h-fit" : "max-h-0"}`}
                        >
                          {subitem.subsubmenu.map((subsubitem, subsubIndex) => (
                            <li key={subsubIndex} className="relative">
                              <a
                                href={subsubitem.link}
                                target={`${subsubitem.link.includes("http") ? "_blank" : "_self"}`}
                                className="block p-5 font-bold"
                              >
                                {subsubitem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="p-5 px-10 font-bold flex flex-col justify-center align-middle items-center gap-5 overflow-hidden">
          <div className="flex gap-3 items-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="border p-2 w-fit border-accent-200 rounded-full bg-black"
              aria-label="Phone number link to call directly"
            >
              <FaPhone className="size-4 text-white" />
            </a>
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
          </div>

          <div className="flex gap-3 mt-2 mb-16">
            <a href={FACEBOOK_URL} target="_blank">
              <span className="sr-only">Facebook</span>
              <svg
                className="size-6 text-accent"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href={INSTAGRAM_URL} target="_blank">
              <span className="sr-only">Instagram</span>
              <svg
                className="size-6 text-accent"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href={LINKEDIN_URL} target="_blank">
              <span className="sr-only">LinkedIn</span>
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-6 text-accent"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
