import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { testimonials } from "../constant";
import SubHeading from "./SubHeading";
import ImageWithSkeleton from "./ImageWithSkeleton";

const Testimonials = () => {
  const animation = { duration: 70000, easing: (t) => t };
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 2,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 450px)": {
        slides: {
          perView: 1,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  }, [
    (slider) => {
      let timeout;
      let mouseOver = false;
      
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.moveToIdx(slider.track.details.abs + 5, true, animation);
        }, 100); // Small delay before continuing animation
      }
      
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
          // Stop current animation
          slider.animator.stop();
        });
        
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        
        nextTimeout();
      });
      
      slider.on("animationEnded", () => {
        if (!mouseOver) {
          nextTimeout();
        }
      });
    },
  ]);
  return (
    <div className="py-[5rem]">
      <div className="flex flex-col items-start sm:items-center gap-5">
        <div className="wrapper flex flex-col items-start sm:items-center gap-5">
          <SubHeading heading="Testimonials" />
          <h2
            className="heading-2 max-w-[60rem] mx-auto text-primary_text mb-2 text-start sm:text-center"
            data-aos="fade-up"
          >
            What They Say About Us
          </h2>
        </div>
        <div className="flex items-center gap-4 w-full">
          {/* <div data-aos="fade-up">
            <button
              className="text-white w-[2.5rem] h-[2.5rem] hidden md:flex items-center justify-center rounded-full p-2 hover:bg-primary bg-secondary text-5xl transition-all duration-300"
              onClick={handlePrevClick}
              aria-label="Previous slide"
            >
              <ArrowLeft size={32} />
            </button>
          </div> */}
          <div ref={sliderRef} className="keen-slider" data-aos="fade-up">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="keen-slider__slide text-center justify-between text-primary_text p-5 bg-primary/10 rounded-xl flex flex-col gap-4"
              >
                <p className="italic text-balance">{item.desc}</p>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex flex-col items-center gap-1 h-full">
                    <ImageWithSkeleton
                      src={item.img}
                      alt={item.name}
                      className="h-[3rem] w-[3rem] rounded-full object-cover border-2 border-primary"
                      skeletonClassName="rounded-full"
                      width="48"
                      height="48"
                    />
                    <p className="font-medium mt-1">{item.name}</p>
                    <p className="text-sm">{item.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div data-aos="fade-up">
            <button
              className="text-white w-[2.5rem] h-[2.5rem] hidden md:flex items-center justify-center rounded-full p-2 hover:bg-primary bg-secondary text-5xl transition-all duration-300"
              onClick={handleNextClick}
              aria-label="Next slide"
            >
              <ArrowRight size={32} />
            </button>
          </div> */}
        </div>
        {/* <div data-aos="fade-up" className="flex items-center gap-5 self-center">
          <button
            className="text-white w-[2.5rem] h-[2.5rem] md:hidden flex items-center justify-center rounded-full p-2 bg-secondary text-5xl transition-all duration-300"
            onClick={handlePrevClick}
            aria-label="Previous slide"
          >
            <ArrowLeft size={32} />
          </button>
          <button
            className="text-white w-[2.5rem] h-[2.5rem] md:hidden flex items-center justify-center rounded-full p-2 bg-secondary text-5xl transition-all duration-300"
            onClick={handleNextClick}
            aria-label="Next slide"
          >
            <ArrowRight size={32} />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
