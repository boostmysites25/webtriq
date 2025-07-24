import React, { useState } from "react";
import vid from "../assets/vids/banner.mp4";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import { ReactComponent as Icon1 } from "../assets/svgs/services/Web Development.svg";
import { ReactComponent as Icon2 } from "../assets/svgs/services/App Development.svg";
import { ReactComponent as Icon3 } from "../assets/svgs/services/Machine Learning Solutions.svg";
import WorkProcess from "../components/WorkProcess";
import ReactPlayer from "react-player";
import ImageWithSkeleton from "../components/ImageWithSkeleton";

import bannerthump from "../assets/vids/banner-thump.webp";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  const [bannerLoading, setBannerLoading] = useState(true);
  return (
    <>
      <WebsiteHeader />
      <section className="h-screen banner relative text-white">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-white/20 via-black/30 to-white/20">
          <div className="wrapper text-center flex flex-col gap-6 justify-center items-center h-full relative z-10 translate-y-[2rem]">
            <p
              data-aos="fade-up"
              className="text-[1.15rem] sm:text-[1.80rem] font-semibold leading-tight text-white"
            >
              Your Web,{" "}
              <span className="text-white font-semibold block sm:inline">
                Our Tricks
              </span>
            </p>
            <h1 data-aos="fade-up" className="heading capitalize">
              Elevating Digital Experiences <br /> Through Innovation
            </h1>
          </div>
        </div>
        <div
          className={`${
            bannerLoading ? "opacity-0" : "opacity-100"
          } absolute inset-0 h-full w-full`}
        >
          <ReactPlayer
            url={vid}
            playing
            muted
            playsinline
            loop
            pip={false}
            onReady={() => setBannerLoading(false)}
            width="100%"
            height="100%"
            config={{
              file: {
                attributes: {
                  style: {
                    objectFit: "cover",
                  },
                },
              },
            }}
          />
        </div>

        <div
          className={`${
            bannerLoading ? "opacity-0" : "opacity-100"
          } absolute inset-0 h-full w-full from-white/20 via-black/30 to-white/20`}
        >
          <img
            src={bannerthump}
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover ${
              bannerLoading ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </section>
      <div
        data-aos="fade-up"
        className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-5"
      >
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon1
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">Web Development</p>
          </div>
          <p className="desc">
            Create captivating, performance-optimized websites that showcase
            your unique brand identity and drive meaningful user engagement.
          </p>
        </div>
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon2
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">App Development</p>
          </div>
          <p className="desc">
            Build intuitive, feature-rich mobile applications for iOS and
            Android that transform your ideas into seamless digital experiences.
          </p>
        </div>
        <div className="bg-primary rounded-lg backdrop-blur-sm text-background p-5">
          <div className="flex items-center gap-3 mb-4">
            <Icon3
              width="50"
              height="50"
              className="w-[4rem] h-[4rem] fill-secondary"
            />
            <p className="text-lg leading-tight font-medium">AI Development</p>
          </div>
          <p className="desc">
            Leverage advanced AI technologies to streamline operations, unlock
            data-driven insights, and create intelligent systems that evolve
            with your business.
          </p>
        </div>
      </div>
      <section className="">
        <div className="wrapper py-[3rem]">
          <div className="grid lg:grid-cols-2 gap-10 mt-7">
            <div data-aos="fade-up" className="hidden lg:flex flex-col">
              <ImageWithSkeleton
                src={aboutImg}
                width="600"
                height="400"
                className="object-cover aspect-video h-full rounded-lg w-full object-center"
                skeletonClassName="aspect-video h-full rounded-lg w-full"
                alt=""
                containerStyles="h-full"
              />
            </div>
            <div
              data-aos="fade-up"
              className="flex h-full items-start flex-col gap-7"
            >
              <div className="flex flex-col items-start gap-5 text-start">
                <SubHeading heading="About Us" />
                <div
                  data-aos="fade-up"
                  className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full overflow-hidden rounded-lg"
                >
                  <ImageWithSkeleton
                    src={aboutImg}
                    width="200"
                    height="200"
                    className="object-cover h-full object-center rounded-lg w-full"
                    skeletonClassName="h-full rounded-lg w-full"
                    alt=""
                  />
                </div>
                <h2 className="heading-2 max-w-[60rem]">
                  Turning Bold Ideas Into Digital Reality
                </h2>
                <p className="desc">
                  At <span className="font-medium text-primary">Webtriq</span>,
                  we're passionate about propelling your enterprise forward
                  through cutting-edge digital solutions. Combining technical
                  expertise with creative vision, we craft bespoke digital
                  products that address your specific challenges and objectives.{" "}
                  <br /> <br /> Our purpose is to transform industries through
                  strategic technology implementation, enabling organizations to
                  excel in the digital-first era. <br /> <br />
                  We champion the transformative power of innovation. Our team
                  works tirelessly to build compelling digital experiences that
                  amplify your brand voice and connect authentically with your
                  audience.
                </p>
              </div>
              <div className="w-fit mt-4 justify-start">
                <Link to="/about-us" className="primary-btn">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AllServices />
      <WorkProcess />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <TrustWorthySection />
      <Testimonials />
      <LeadForm />
      <JoinHappyCustomers />
      <WebsiteFooter />
    </>
  );
};

export default Home;
