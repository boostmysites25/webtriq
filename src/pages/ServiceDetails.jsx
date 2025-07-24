import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { services } from "../data/services";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";
import SubHeading from "../components/SubHeading";
import "../styles/blog-content.css";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
const PageBanner = React.lazy(() => import("../components/website/PageBanner"));

const ServiceDetails = () => {
  const { title } = useParams();
  const service = services.find((item) => item.title === title);

  if (!service) {
    return <Navigate to="/services" />;
  }

  const otherServices = services.filter((item) => item.title !== title) || [];

  return (
    <>
      <WebsiteHeader />
      <PageBanner title="Service Details" />
      <div className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 relative text-primary_text min-h-screen">
        <div className="wrapper py-[5rem] relative z-10">
          {/* Hero Section */}
          <div className="mb-[4rem]">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    {service.title}
                  </div>
                </div>
                <h1
                  data-aos="fade-up"
                  className="heading-2 text-gray-900 leading-tight mb-6"
                >
                  {service.detailHeading}
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="desc text-gray-600 mb-8 leading-relaxed"
                >
                  {service.description}
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <ImageWithSkeleton
                    data-aos="fade-left"
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded-2xl object-cover aspect-[4/3] shadow-2xl"
                    skeletonClassName="rounded-2xl aspect-[4/3]"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="w-12 h-12 text-white fill-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            id="content"
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-[4rem]"
          >
            <div
              dangerouslySetInnerHTML={{ __html: service.content }}
              data-aos="fade-up"
              className="blog-content-wrapper service-content-wrapper prose prose-lg max-w-none"
            ></div>
          </div>

          {/* Other Services */}
          {otherServices.length > 0 && (
            <div className="pt-[2rem]">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-4">
                  <span>Explore More</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Other Services We Offer
                </h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Discover our comprehensive range of digital solutions designed
                  to accelerate your business growth
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {otherServices.slice(0, 3).map((item) => (
                  <ServiceCard key={item.id} service={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <WebsiteFooter />
    </>
  );
};

// Service Card Component
const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-primary/20 transform hover:-translate-y-2">
      <div className="mb-6">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-2xl w-fit group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
          <service.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
        {service.description}
      </p>
      <a
        href={`/services/${service.title}`}
        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-all duration-300 group-hover:gap-3"
      >
        <span>Learn More</span>
        <svg
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
};

export default ServiceDetails;
