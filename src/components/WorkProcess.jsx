import SubHeading from "./SubHeading";
import { ReactComponent as Icon1 } from "../assets/svgs/Consult & Strategize.svg";
import { ReactComponent as Icon2 } from "../assets/svgs/Design & Develop.svg";
import { ReactComponent as Icon3 } from "../assets/svgs/Testing & Launch.svg";
import { ReactComponent as Icon4 } from "../assets/svgs/Ongoing Support & Maintenance.svg";

let workflow = [
  {
    id: 1,
    icon: Icon1,
    title: "Discovery & Strategic Planning",
    desc: "We collaborate closely to understand your vision, collect comprehensive requirements, establish project parameters, and create a strategic roadmap that aligns with your business objectives.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Creative Design & Prototyping",
    desc: "Our team crafts intuitive architectures and engaging interfaces, develops interactive mockups, and incorporates your feedback to refine the user experience before development begins.",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Agile Development & Quality Assurance",
    desc: "We build your solution using iterative development cycles, implement rigorous testing protocols, and maintain transparent communication throughout the entire process.",
  },
  {
    id: 4,
    icon: Icon4,
    title: "Launch & Continuous Enhancement",
    desc: "Following comprehensive pre-launch verification, we orchestrate a smooth deployment and provide ongoing technical support, performance monitoring, and evolutionary updates to maximize your investment.",
  },
];

const WorkProcess = () => {
  return (
    <div className="py-[3rem] flex justify-center relative">
      <div className="blurred-blue left-[-10%] bottom-[-10%]"></div>
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col items-start sm:items-center gap-5 z-10 py-10"
      >
        <SubHeading heading="Our Methodology" />
        <h1
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-start sm:text-center"
        >
          The Journey From Concept to Reality
        </h1>
        <div className="z-10 grid grid-cols-1 mt-4 sm:grid-cols-2 gap-4 sm:gap-10 mx-auto max-w-6xl">
          {workflow.map((item) => (
            <div key={item.id} className="relative shadow-inner shadow-primary/40 bg-primary/5 hover:bg-primary/10 rounded-lg p-6 overflow-hidden">
              <div className="absolute left-3 top-3 text-[2rem] transition-all duration-300 -z-0 flex justify-center items-center h-[3rem] w-[3rem] rounded-full bg-secondary">
                <span className="text-white font-extrabold">{item.id}</span>
              </div>
              <div className="hover:scale-[95%] transition-all duration-300 flex flex-col gap-2 items-center">
                <item.icon className="z-10 w-[4rem] h-[4rem] fill-primary" />
                <h6 className="z-10 font-medium text-2xl text-center">
                  {item.title}
                </h6>
                <p className="z-10 text-primary_text text-center">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
