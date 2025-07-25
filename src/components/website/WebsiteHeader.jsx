import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { logoImg, routes } from "../../constant";
import { X } from "lucide-react";
import { Helmet } from "react-helmet";
import ImageWithSkeleton from "../ImageWithSkeleton";

export const navlinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about-us",
    name: "About Us",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/blogs",
    name: "Blogs",
  },
];

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4 border-b-2 fixed top-0 w-full bg-background backdrop-blur-md z-50 text-primary_text">
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full">
          <Helmet>
            {/* Preload the logo image */}
            <NavLink rel="preload" href={logoImg} as="image" type="image/png" />
          </Helmet>
          <a aria-label="Home" href="/" className="cursor-pointer">
            <ImageWithSkeleton
              src={logoImg}
              width="75"
              height="75"
              className="w-[8rem] md:w-[10rem] object-contain"
              skeletonClassName="w-[8rem] md:w-[10rem] h-[3rem] rounded"
              alt="logo"
            />
          </a>
          <div className="lg:flex items-center gap-10 hidden">
            {navlinks.map((option) => (
              <NavLink
                to={`${option.path}`}
                className={`link ${
                  option.path === pathname && "text-secondary font-semibold"
                }`}
                key={option.path}
              >
                {option.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact-us"
              className="primary-btn"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary_text text-[2.2rem]"
            >
              <X size={35} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navlinks.map(({ name, path, id }) => (
              <NavLink
                onClick={() => setIsOpen(false)}
                key={id}
                className="text-3xl text-primary_text font-medium transition-colors duration-300 link"
                to={path}
              >
                {name}
              </NavLink>
            ))}
            <NavLink
              to="/contact-us"
              className="text-3xl text-primary_text font-medium transition-colors duration-300 link"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>
        </Drawer>
        <button
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
        >
          <Hamburger
            color="#011F3D"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </button>
      </div>
    </div>
  );
};

export default WebsiteHeader;
