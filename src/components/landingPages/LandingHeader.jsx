import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { logoImg } from "../../constant";
import { X } from "lucide-react";
import { Helmet } from "react-helmet";
import ImageWithSkeleton from "../ImageWithSkeleton";

export const options = [
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const LandingHeader = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4 fixed border-b-2 top-0 w-full bg-background backdrop-blur-md z-50 text-primary_text">
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Helmet>
            {/* Preload the logo image */}
            <link rel="preload" href={logoImg} as="image" type="image/png" />
          </Helmet>
          <a aria-label="Home" href={link} className="cursor-pointer">
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
            <Link to="/" className="link">
              Home
            </Link>
            {options
              .filter((option) => option.path !== "contact")
              .map((option) => (
                <Scroll
                  to={`${option.path}`}
                  className="link"
                  key={option.path}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  activeClass="active-link"
                >
                  {option.name}
                </Scroll>
              ))}
            <Scroll
              to="contact"
              className="primary-btn"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Contact Us
            </Scroll>
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
            <Link
              to="/"
              className="text-3xl text-primary_text font-medium transition-colors duration-300 link"
            >
              Home
            </Link>
            {options.map(({ name, path, id }) => (
              <Scroll
                onClick={() => setIsOpen(false)}
                key={id}
                to={path}
                spy={true}
                smooth={true}
                className="text-3xl text-primary_text font-medium transition-colors duration-300 link"
                offset={-70}
                duration={1000}
              >
                {name}
              </Scroll>
            ))}
          </div>
        </Drawer>
        <button
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
          aria-label="toggle drawer"
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

export default LandingHeader;
