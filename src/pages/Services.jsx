import React from "react";
import SEO from "../components/SEO";
const WebsiteHeader = React.lazy(() => import("../components/website/WebsiteHeader"));
const PageBanner = React.lazy(() => import("../components/website/PageBanner"));
const AllServices = React.lazy(() => import("../components/website/AllServices"));
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() => import("../components/JoinHappyCustomers"));
const WebsiteFooter = React.lazy(() => import("../components/website/WebsiteFooter"));

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Services - Webtriq Technologies | Web Development, App Development, AI Solutions"
        description="Explore our comprehensive technology services including web development, app development, AI solutions, IoT, blockchain, and game development. Transform your business with our expert solutions."
        keywords="web development services, app development services, AI development services, IoT solutions, blockchain development, game development, custom software development, technology services"
        canonical="/services"
        ogImage="/logo.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Webtriq Technologies Services",
          "description": "Comprehensive technology solutions including web development, app development, AI, IoT, and blockchain",
          "itemListElement": [
            {
              "@type": "Service",
              "position": 1,
              "name": "Web Development",
              "description": "Create captivating, performance-optimized websites that showcase your unique brand identity"
            },
            {
              "@type": "Service",
              "position": 2,
              "name": "App Development",
              "description": "Build intuitive, feature-rich mobile applications for iOS and Android"
            },
            {
              "@type": "Service",
              "position": 3,
              "name": "AI Development",
              "description": "Leverage advanced AI technologies including machine learning and natural language processing"
            },
            {
              "@type": "Service",
              "position": 4,
              "name": "IoT Solutions",
              "description": "Connect devices, gather valuable data, and create smart environments"
            },
            {
              "@type": "Service",
              "position": 5,
              "name": "Blockchain Development",
              "description": "Build secure, transparent, and decentralized applications"
            },
            {
              "@type": "Service",
              "position": 6,
              "name": "Game Development",
              "description": "Creating immersive and engaging gaming experiences"
            }
          ]
        }}
      />
      <WebsiteHeader />
      <PageBanner
        title="Our Services"
      />
      <AllServices />
      <OurValue />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <WebsiteFooter />
    </>
  );
};

export default Services;
