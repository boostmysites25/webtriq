import React from "react";
import { companyDetails, logoImg } from "../../constant";
import {
  ChevronRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { Helmet } from "react-helmet";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { options } from "./LandingHeader";

const LandingFooter = () => {
  return (
    <div className="py-[3rem] border-t-2 bg-background">
      <div className="wrapper flex lg:flex-row flex-col gap-7 sm:gap-14 justify-between">
        <div className="">
          <Helmet>
            {/* Preload the logo image */}
            <link rel="preload" href={logoImg} as="image" type="image/png" />
          </Helmet>
          <ImageWithSkeleton
            width="200"
            height="50"
            src={logoImg}
            className="w-[12rem] object-contain"
            skeletonClassName="w-[12rem] h-[3rem] rounded"
            alt="logo"
          />
          <p className="desc ! max-w-[22rem] mt-3">
            At Webtriq, we're dedicated to driving your business forward with
            innovative software solutions. With a passion for technology and a
            commitment to excellence, we specialize in delivering tailored
            software products and services to meet your unique needs.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <Link
              aria-label="Contact us on Instagram"
              to={companyDetails.instagram}
              className="w-[2rem] h-[2rem] rounded-full p-2 bg-white border border-primary hover:bg-primary text-primary_text hover:text-white hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
            >
              <Instagram strokeWidth={1.5} size={20} />
            </Link>
            <Link
              aria-label="Contact us on Twitter"
              to={companyDetails.twitter}
              className="w-[2rem] h-[2rem] rounded-full p-2 bg-white border border-primary hover:bg-primary text-primary_text hover:text-white hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
            >
              <Twitter strokeWidth={1.5} size={20} />
            </Link>
            <Link
              aria-label="Contact us on LinkedIn"
              to={companyDetails.linkedin}
              className="w-[2rem] h-[2rem] rounded-full p-2 bg-white border border-primary hover:bg-primary text-primary_text hover:text-white hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
            >
              <Linkedin strokeWidth={1.5} size={20} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-7 sm:gap-14">
          <div className="flex flex-col gap-2 text-primary_text">
            <h6 className="font-semibold">Company</h6>
            <ul className="flex flex-col gap-3 mt-1">
              {options.map(({ path, name }) => (
                <li key={path}>
                  <Scroll
                    to={path}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    className="max-w-[22rem] flex gap-2 items-center text-primary_text/70 hover:text-primary transition-colors duration-200"
                  >
                    <ChevronRight size={17} strokeWidth={3} />
                    <span className="">{name}</span>
                  </Scroll>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-primary_text">
            <h6 className="font-semibold">Contact Us</h6>
            <ul className="flex flex-col gap-3 mt-1">
              <li className="flex gap-3 text-primary_text/70">
                <Link
                  aria-label="Contact us on Email"
                  to={`mailto:${companyDetails.email}`}
                  className="flex gap-3 text-primary_text/70 hover:text-primary transition-colors duration-200"
                >
                  <Mail
                    strokeWidth={1.5}
                    size={20}
                    className="text-primary inline"
                  />{" "}
                  <span className="">{companyDetails.email}</span>
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Contact us on Phone"
                  to={`tel:${companyDetails.phone}`}
                  className="flex gap-3 text-primary_text/70 hover:text-primary transition-colors duration-200"
                >
                  <Phone
                    strokeWidth={1.5}
                    size={20}
                    className="text-primary inline"
                  />{" "}
                  <span className="">{companyDetails.phone}</span>
                </Link>
              </li>
              <li className="max-w-[17rem] flex gap-3 text-primary_text/70">
                <MapPin
                  strokeWidth={1.5}
                  size={20}
                  className="text-primary inline min-w-5"
                />{" "}
                <span className="">{companyDetails.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
