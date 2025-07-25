import React from "react";
import ourValuesIcon1 from "../../assets/images/icons/innovation&excellence.png";
import ourValuesIcon2 from "../../assets/images/icons/integrity&transparency.png";
import SubHeading from "../SubHeading";
import ImageWithSkeleton from "../ImageWithSkeleton";

const OurValue = () => {
  return (
    <section className="bg-secondary/10 py-[5rem]">
      <div className="wrapper grid md:grid-cols-2 items-center gap-7">
        <div className="flex flex-col items-start gap-5">
          <SubHeading heading="Our Principles" />
          <h2 data-aos="fade-up" className="heading-2 mx-0">
            Excellence in Every Pixel,
            <br /> Trust in Every Interaction
          </h2>
          <p data-aos="fade-up" className="desc">
            Our multidisciplinary expertise empowers organizations from startups to 
            enterprises to leverage state-of-the-art technologies across Digital 
            Experience Design, Custom Software Engineering, E-Commerce Solutions, 
            and Intelligent System Development.
          </p>
          <div data-aos="fade-up" className="flex gap-5 mt-2">
            <div className="min-w-[4rem] h-[4rem] bg-secondary rounded-full flex items-center justify-center">
              <ImageWithSkeleton
                src={ourValuesIcon1}
                className="w-[2rem] object-contain"
                skeletonClassName="w-[2rem] h-[2rem] rounded"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-lg font-medium">Visionary Innovation</h6>
              <p className="desc">
                Pioneering tomorrow's digital landscape with forward-thinking solutions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="flex gap-5">
            <div className="min-w-[4rem] h-[4rem] bg-secondary rounded-full flex items-center justify-center">
              <ImageWithSkeleton
                src={ourValuesIcon2}
                className="w-[2rem] object-contain"
                skeletonClassName="w-[2rem] h-[2rem] rounded"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <h6 className="text-lg font-medium">
                Authentic Partnership
              </h6>
              <p className="desc">
                Cultivating transparent relationships, honoring commitments, and 
                delivering measurable results.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="bg-primary text-white flex flex-col gap-6 h-full justify-center rounded-xl p-10"
        >
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="">Digital Experience Design</p>
              <p className="">95%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-[95%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="">Mobile Innovation</p>
              <p className="">98%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-[98%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="">Intelligent Systems</p>
              <p className="">92%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-[92%]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-4">
              <p className="">Strategic Technology Consulting</p>
              <p className="">90%</p>
            </div>
            <div className="w-full bg-white h-2 rounded-full overflow-hidden">
              <div className="bg-secondary h-full w-[90%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
