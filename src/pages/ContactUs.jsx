import React, { lazy } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { companyDetails } from "../constant";
import { Link } from "react-router-dom";
const WebsiteHeader = lazy(() => import("../components/website/WebsiteHeader"));
const PageBanner = lazy(() => import("../components/website/PageBanner"));
const WebsiteFooter = lazy(() => import("../components/website/WebsiteFooter"));
const LeadForm = lazy(() => import("../components/LeadForm"));

const ContactUs = () => {
  return (
    <>
      <WebsiteHeader />
      <PageBanner title="Contact Us" />
      <div className="pt-[3rem]">
        <div className="wrapper">
          <div className="text-center max-w-3xl mx-auto mb-[3rem]">
            <h2 data-aos="fade-up" className="heading-2 text-primary mb-4">
              Initiate Your Digital Transformation Journey
            </h2>
            <p data-aos="fade-up" className="desc mb-8">
              Connect with our team of experts to discuss how our tailored
              solutions can address your unique business challenges. Whether
              you're looking to develop a sophisticated web platform, create an
              innovative mobile application, implement AI-driven systems, or
              explore blockchain technologies, we're here to transform your
              vision into reality.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto mb-[3rem]">
            <div
              data-aos="fade-up"
              className="bg-primary/5 flex flex-col gap-3 text-primary items-center justify-center rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:bg-primary/10"
            >
              <div className="bg-primary/10 p-3 rounded-full mb-2">
                <MapPin strokeWidth={2} size={40} className="inline" />
              </div>
              <h3 className="font-semibold text-lg">Visit Our Office</h3>
              <span className="text-center font-medium">
                {companyDetails.address}
              </span>
            </div>
            <Link
              to={`mailto:${companyDetails.email}`}
              data-aos="fade-up"
              className="bg-primary/5 flex flex-col gap-3 text-primary items-center justify-center rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:bg-primary/10"
            >
              <div className="bg-primary/10 p-3 rounded-full mb-2">
                <Mail strokeWidth={2} size={40} className="inline" />
              </div>
              <h3 className="font-semibold text-lg">Email Us</h3>
              <span className="text-center font-medium">
                {companyDetails.email}
              </span>
            </Link>
            <Link
              to={`tel:${companyDetails.phone}`}
              data-aos="fade-up"
              className="bg-primary/5 flex flex-col gap-3 text-primary items-center justify-center rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:bg-primary/10"
            >
              <div className="bg-primary/10 p-3 rounded-full mb-2">
                <Phone strokeWidth={2} size={40} className="inline" />
              </div>
              <h3 className="font-semibold text-lg">Call Us</h3>
              <span className="text-center font-medium">
                {companyDetails.phone}
              </span>
            </Link>
          </div>
        </div>
        <LeadForm />
      </div>
      <WebsiteFooter />
    </>
  );
};

export default ContactUs;
