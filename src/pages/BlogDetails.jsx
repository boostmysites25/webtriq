import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";
import SubHeading from "../components/SubHeading";
import { BlogItem } from "./Blogs";
import ImageWithSkeleton from "../components/ImageWithSkeleton";
import SEO from "../components/SEO";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  
  const latestBlogs = blogs.filter((item) => item.id !== blog.id).slice(0, 3);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <SEO 
        title={`${blog.title} - Webtriq Technologies Blog`}
        description={blog.excerpt}
        keywords={`${blog.category}, technology, ${blog.title.toLowerCase()}, webtriq technologies, digital transformation`}
        canonical={`/blogs/${blog.id}`}
        ogType="article"
        ogImage="/logo.png"
        publishedTime={blog.date}
        section={blog.category}
        tags={[blog.category, 'technology', 'digital transformation']}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blog.title,
          "description": blog.excerpt,
          "image": "https://webtriq.com/logo.png",
          "datePublished": blog.date,
          "dateModified": blog.date,
          "author": {
            "@type": "Organization",
            "name": "Webtriq Technologies",
            "url": "https://webtriq.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Webtriq Technologies",
            "logo": {
              "@type": "ImageObject",
              "url": "https://webtriq.com/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://webtriq.com/blogs/${blog.id}`
          },
          "articleSection": blog.category
        }}
      />
      <WebsiteHeader />
      <div className="bg-primary/5 relative text-primary_text">
        <div className="wrapper py-[5rem] relative z-10">
          <div className="flex flex-col gap-2 pb-[3rem] p-3 sm:p-5 bg-secondary/10 rounded-xl mb-[3rem]">
            <ImageWithSkeleton
              data-aos="fade-up"
              src={blog.image}
              alt=""
              className="w-full rounded-xl object-cover aspect-[4/3] max-h-[70vh]"
              skeletonClassName="rounded-xl aspect-[4/3] max-h-[70vh]"
            />
            <div className="flex flex-col gap-2">
              <div
                data-aos="fade-up"
                className="flex justify-between items-center font-light mt-[0.8rem]"
              >
                <div className="rounded-2xl bg-primary text-white font-medium px-3 py-1 text-sm w-fit">
                  {blog.category}
                </div>
                <p className="text-gray-800 text-[.8rem]">{blog.date}</p>
              </div>
              <h4
                data-aos="fade-up"
                className="heading-2_1 leading-tight mt-[1rem] pb-[1.5rem]"
              >
                {blog.title}
              </h4>
              <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                data-aos="fade-up"
                className="hyphen-auto leading-relaxed text-gray-800 border-t border-primary/30 pt-[2rem] blog-content-wrapper"
              ></div>
            </div>
          </div>
          {latestBlogs.length > 0 && (
            <div className="pt-[3rem]">
              <SubHeading heading="Recent Blogs" />
              <div className="mt-[1.5rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
                {blogs
                  .filter((item) => item.id !== blog.id)
                  .slice(0, 3)
                  .map((item) => (
                    <BlogItem key={item.id} blog={item} />
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

export default BlogDetails;
