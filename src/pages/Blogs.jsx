import React from "react";
import { Link } from "react-router-dom";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";
import SubHeading from "../components/SubHeading";
import { blogs } from "../data/blogs";
const PageBanner = React.lazy(() => import("../components/website/PageBanner"));
const Blogs = () => {
  return ( 
    <>
      <WebsiteHeader />
      <PageBanner title="Blogs" />
      <div className="bg-secondary/5 relative text-primary_text">
        <div className="py-[5rem] flex flex-col gap-5 items-center wrapper">
          <SubHeading heading="Blogs" />
          <h4
            data-aos="fade-up"
            className="heading-2 mx-auto font-semibold leading-tight text-primary text-center"
          >
            Strategic Insights & Technological Perspectives: Navigating Digital Transformation
          </h4>
          <p data-aos="fade-up" className="text-center max-w-4xl mx-auto desc">
            Explore our curated collection of thought leadership articles, technical analyses, and industry perspectives designed to empower your organization's digital journey. Our experts share actionable insights on emerging technologies, implementation strategies, and transformative digital solutions.
          </p>
          <div className="mt-[2rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
            {blogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <WebsiteFooter />
    </>
  );
};

export default Blogs;

// blog item
export const BlogItem = ({ blog }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-secondary/10 rounded-xl p-5 text-primary_text relative z-10 group"
    >
      <Link to={`/blogs/${blog.id}`}>
        <img
          src={blog.image}
          alt=""
          width="600"
          height="400"
          className="object-cover aspect-video w-full rounded-xl group-hover:opacity-85 transition-all duration-200"
        />
      </Link>
      <div className="flex justify-start font-light mt-[0.8rem]">
        <div className="rounded-2xl bg-primary font-medium px-3 py-1 text-sm w-fit text-white">
          {blog.category}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-[1rem]">
        <Link
          to={`/blogs/${blog.id}`}
          className="text-xl hyphen-auto font-medium leading-tight line-clamp-2 text-ellipsis hover:text-primary transition-all duration-200"
        >
          {blog.title}
        </Link>
        <p className="desc leading-tight text-gray-800 line-clamp-3 text-ellipsis hyphen-auto">
          {blog.excerpt}
        </p>
      </div>

      <div className="flex justify-end font-light mt-[1.5rem]">
        <p className="text-gray-400 text-[.8rem]">{blog.date}</p>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <Link to={`/blogs/${blog.id}`} className="secondary-btn w-full">
          Read More
        </Link>
      </div>
    </div>
  );
};
