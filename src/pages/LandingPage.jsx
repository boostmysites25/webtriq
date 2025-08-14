import React, { lazy } from "react";
import appVid from "../assets/vids/app-development.mp4";
import webVid from "../assets/vids/web-development.mp4";
import SubHeading from "../components/SubHeading";
import { appDevelopmentServices, webDevelopmentServices } from "../constant";
import TrustWorthySection from "../components/TrustWorthySection";
import appDevAboutImg from "../assets/images/landingpage/app-dev-about.webp";
import webDevAboutImg from "../assets/images/landingpage/web-dev-about.jpeg";
import ReactPlayer from "react-player";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
import SEO from "../components/SEO";

const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../components/landingPages/ContactForm")
);
const Portfolio = lazy(() => import("../components/Portfolio"));
const ConnectWithUs = lazy(() => import("../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));

const LandingPage = ({ page }) => {
  const isWebLanding = Boolean(page === "web-development");
  let services;
  if (page === "web-development") {
    // banner = webBanner;
    services = webDevelopmentServices;
  } else {
    // banner = appBanner;
    services = appDevelopmentServices;
  }

  return (
    <>
      <SEO 
        title={isWebLanding 
          ? "Web Development Services - Webtriq Technologies | Custom Website Development"
          : "App Development Services - Webtriq Technologies | Mobile App Development"
        }
        description={isWebLanding 
          ? "Transform your business with our expert web development services. We create custom, responsive websites that drive results and enhance user experience."
          : "Build powerful mobile applications with our expert app development services. iOS, Android, and cross-platform solutions for your business."
        }
        keywords={isWebLanding 
          ? "web development, website development, custom websites, responsive web design, e-commerce websites, web applications"
          : "app development, mobile app development, iOS app development, Android app development, cross-platform apps, mobile applications"
        }
        canonical={isWebLanding ? "/web-development" : "/app-development"}
        ogImage="/logo.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": isWebLanding ? "Web Development Services" : "App Development Services",
          "description": isWebLanding 
            ? "Transform your business with our expert web development services"
            : "Build powerful mobile applications with our expert app development services",
          "provider": {
            "@type": "Organization",
            "name": "Webtriq Technologies",
            "url": "https://webtriq.com"
          },
          "serviceType": isWebLanding ? "Web Development" : "App Development",
          "url": `https://webtriq.com${isWebLanding ? "/web-development" : "/app-development"}`
        }}
      />
      <LandingHeader
        link={isWebLanding ? "/web-development" : "/app-development"}
      />
      <section
        id="banner"
        className="h-screen banner relative text-primary_text"
      >
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-background/50 via-background/80 to-background/50">
          <div className="wrapper text-center h-full relative z-10">
            <div className="sm:translate-y-[2rem] flex flex-col gap-8 justify-center items-center h-full">
              <p
                data-aos="fade-up"
                className="text-[1.15rem] sm:text-[1.80rem] font-semibold leading-tight text-primary_text"
              >
                Your Web,{" "}
                <span className="text-primary_text font-semibold block sm:inline">
                  Our Trick
                </span>
              </p>
              <h1
                data-aos="fade-up"
                className="heading-1 whitespace-pre-line capitalize"
              >
                {isWebLanding
                  ? "Elevate your business with cutting-edge Website Development"
                  : "Innovation-Driven App Development Services"}
              </h1>
            </div>
          </div>
        </div>
        <ReactPlayer
          url={isWebLanding ? webVid : appVid}
          playing
          muted
          playsinline
          loop
          pip={false}
          width="100%"
          height="100%"
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                },
                playsInline: true,
                webkitPlaysinline: "true",
                preload: "auto",
                autoPlay: true
              }
            }
          }}
        />
      </section>
      <section id="about" className="text-primary_text wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <ImageWithSkeleton
              src={isWebLanding ? webDevAboutImg : appDevAboutImg}
              className="object-cover h-full rounded-lg"
              skeletonClassName="rounded-lg h-full"
              alt="about us"
              width="600"
              height="400"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading
                heading={isWebLanding ? "Web Development" : "App Development"}
              />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <ImageWithSkeleton
                  src={isWebLanding ? webDevAboutImg : appDevAboutImg}
                  className="object-cover h-full rounded-lg w-full"
                  skeletonClassName="rounded-lg h-full"
                  alt="about"
                  width="200"
                  height="200"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                {isWebLanding
                  ? "Innovative Web Development Solutions for Modern Brands"
                  : "Your Ideas, Perfectly Engineered into Apps"}
              </h2>
              <p className="desc">
                {isWebLanding
                  ? " Your website is more than just a digital address—it’s your brand’s online identity. Our websites are designed to captivate, convert, and function flawlessly. From sleek designs to responsive performance, we build websites that not only look good but also deliver exceptional results.\n Your website should be more than just functional—it should leave a lasting impression. We develop fast, responsive, and visually appealing websites designed to reflect your brand and achieve your goals. From e-commerce platforms to custom web applications, we’ve got you covered."
                  : "In a world that runs on apps, we create ones that stand out. Whether it’s a native app or a cross-platform solution, we develop applications tailored to your needs. Our apps combine cutting-edge technology with intuitive design to deliver smooth, reliable, and feature-rich experiences. \nYour app should do more than just exist; it should stand out. We create mobile applications that combine sleek designs with powerful functionality, tailored to meet your business objectives. Whether you need a native app for iOS or Android, or a cross-platform solution, we ensure flawless performance and a seamless user experience."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading
          heading={
            isWebLanding
              ? "Web Development Services"
              : "App Development Services"
          }
        />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          Enhancing Brands with Engaging Web Experiences
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              data-aos="fade-up"
              className="bg-secondary/5 shadow-inner shadow-primary/30 items-center rounded-lg p-5 flex text-center flex-col"
            >
              <service.icon className="w-[5rem] h-[5rem] fill-primary" />
              <h6 className="text-xl font-medium mt-4">{service.title}</h6>
              <p className="desc mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      <Portfolio page={page} />
      <WhyChooseUs />
      <ConnectWithUs />
      <Testimonials />
      <JoinHappyCustomers />
      <ContactForm />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
