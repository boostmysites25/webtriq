import React from "react";
import bannerImg from "../../assets/images/banner.webp";
import ImageWithSkeleton from "../ImageWithSkeleton";

const PageBanner = ({ title, desc }) => {
  return (
    <div className="w-full min-h-[65vh] h-fit py-[1rem] bg-cover bg-top relative flex items-center justify-center">
      <div className="absolute inset-0 h-full w-full">
        <ImageWithSkeleton
          src={bannerImg}
          className="object-cover h-full absolute top-0 left-0 w-full"
          skeletonClassName="h-full absolute top-0 left-0 w-full"
          alt=""
          containerStyles="h-full"
        />
      </div>
      <div className="absolute top-0 w-full h-full bg-primary/50"></div>
      <div className="w-full translate-y-[20%] text-white">
        <div data-aos="fade-up" className="wrapper text-center">
          <h1 className="heading-1">{title}</h1>
          {desc && <p className="desc mt-3 max-w-[55rem] mx-auto">{desc}</p>}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
