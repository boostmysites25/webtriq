import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/aboutus-img1.webp";
import aboutImg2 from "../assets/images/aboutus-img2.webp";
import aboutImg3 from "../assets/images/home-about-img.jpeg";
// import teamImg1 from "../assets/images/team1.jpeg";
// import teamImg2 from "../assets/images/team2.jpeg";
// import teamImg3 from "../assets/images/team3.jpeg";
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  // const [selectedImg, setSelectedImg] = React.useState(0);
  // const images = [teamImg1, teamImg2, teamImg3];

  // const imgChangeInterval = setInterval(() => {
  //   setSelectedImg(selectedImg === 2 ? 0 : selectedImg + 1);
  // }, 1000);

  // useEffect(() => {
  //   return () => clearInterval(imgChangeInterval);
  // }, [imgChangeInterval]);
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="About Us" />
      <section className="text-primary_text wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg1}
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Architecting Digital Excellence Through Strategic Innovation
              </h2>
              <p className="desc">
                At{" "}
                <span className="font-semibold text-primary">
                  Webtriq
                </span>
                , we transcend conventional development paradigms to create transformative digital solutions that propel organizations toward their strategic objectives. With a sophisticated blend of technical expertise and visionary thinking, we craft bespoke digital ecosystems precisely calibrated to address your most complex challenges. <br />
                <br />
                Our mission is to catalyze industry evolution through strategic technology implementation, empowering enterprises to excel in an increasingly digital-centric landscape. We leverage cutting-edge frameworks and methodologies to deliver solutions that not only meet current requirements but anticipate future needs. <br />
                <br /> 
                We champion the transformative potential of purposeful innovation. Our multidisciplinary team collaborates to create compelling digital experiences that authentically articulate your brand narrative and forge meaningful connections with your target audience.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="mt-[3rem]">
          <h2 data-aos="fade-up" className="heading-2 text-center">
            Our Strategic Vision
          </h2>
          <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 mt-7">
            <div
              data-aos="fade-up"
              className="flex h-full items-center md:items-start flex-col gap-7"
            >
              <p className="desc">
                Our comprehensive expertise encompasses a diverse spectrum of technological domains, 
                enabling organizations across industries to leverage advanced solutions in web development, 
                mobile applications, custom software, artificial intelligence, IoT, blockchain, and game development. <br />
                <br /> 
                Whether you're establishing a sophisticated digital presence, developing intelligent systems, 
                implementing secure blockchain infrastructure, or creating immersive interactive experiences, 
                our multidisciplinary approach transforms conceptual innovations into tangible digital assets 
                that deliver measurable business outcomes. <br />
                <br /> 
                Our methodology integrates data-driven insights with strategic innovation, ensuring each 
                solution we implement not only addresses immediate requirements but establishes foundations 
                for sustainable growth and competitive differentiation in rapidly evolving markets.
              </p>
            </div>
            <div data-aos="fade-up" className="h-full">
              <img
                loading="lazy"
                src={aboutImg2}
                className="object-cover w-full max-h-[20rem] rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div> */}
      </section>
      {/* <section className="wrapper py-[3rem]">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="h-full">
            <img
              loading="lazy"
              src={aboutImg3}
              className="object-cover h-full w-full max-h-[20rem] rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex items-center lg:items-start flex-col gap-7"
          >
            <p className="desc">
              Our mission is to orchestrate transformative digital evolution across industries through 
              solutions anchored in technical excellence and ethical responsibility. We recognize that 
              meaningful innovation transcends technological sophistication—it must be guided by principles 
              that foster trust, transparency, and sustainable value creation. Through our comprehensive 
              expertise in web development, mobile applications, custom software, artificial intelligence, 
              IoT, blockchain, and interactive experiences, we catalyze organizational transformation. 
              By implementing these advanced technological frameworks with strategic precision, we address 
              complex challenges, unlock new growth vectors, and deliver solutions that optimize operational 
              efficiency while maintaining unwavering commitment to the highest standards of professional integrity.
            </p>
          </div>
        </div>
      </section> */}
      <WhyChooseUs />
      <TrustWorthySection />
      {/* <section className="text-primary_text wrapper py-[3rem]">
        <div className="grid md:grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="Our Leadership Team" />
              <h2 className="heading-2">The Minds Behind Our Innovation</h2>
              <p className="desc">
                At <b>Webtriq</b>, our exceptional team forms the foundation of every solution we deliver. 
                Uniting advanced technical expertise, strategic vision, and unwavering commitment to client success, 
                our professionals excel at transforming multifaceted challenges into elegant, intuitive experiences. 
                From software architects and development specialists to UX strategists and implementation consultants, 
                each team member contributes distinctive capabilities that advance our mission of digital excellence. 
                Discover the visionary talent driving the next generation of transformative digital solutions that 
                empower organizations to thrive in an increasingly complex technological landscape.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="h-full w-full">
            <div
              className={`h-full grid gap-3 grid-cols-4
            `}
            >
              {images.map((img, id) => (
                <div
                  className={`
                    relative w-full h-full aspect-[4/5] rounded-xl overflow-hidden
                    ${
                      selectedImg === id
                        ? "col-span-2 shadow-large shadow-primary/50"
                        : "col-span-1"
                    }
                  `}
                  key={id}
                >
                  {selectedImg !== id && (
                    <div className="absolute top-0 w-full h-full bg-secondary/80 z-0"></div>
                  )}
                  <img
                    loading="lazy"
                    src={img}
                    className="-z-10 h-full w-full object-cover"
                    alt=""
                  />
                  {selectedImg === id && (
                    <div className="rounded-lg absolute p-2 bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-primary text-center text-primary_text">
                      <h6 className="font-medium">Liam Smith</h6>
                      <p className="text-primary text-[.8rem]">
                        CEO & Co-Founder
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default AboutUs;
