import { Minus } from "lucide-react";
import React from "react";

const SubHeading = ({ heading, className }) => {
  return (
    <div data-aos="fade-up" className={`${className} section-heading flex items-center gap-1 !text-2xl`}>
      <Minus size={30} /> {heading}
    </div>
  );
};

export default SubHeading;
