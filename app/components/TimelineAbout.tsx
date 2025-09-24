import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const timelineSteps = [
  {
    stage: "2023",
    title: "FIRST STEPS",
    description: "Began my journey into web development by learning HTML and CSS. Focused on building solid foundations in layout and styling.",
  },
  {
    stage: "2024",
    title: "LEVELING UP",
    description: "Dived deeper into JavaScript and started building dynamic websites. Also started working with React and Express.js to create full-stack applications.",
  },
  {
    stage: "2025",
    title: "FULL-STACK FOCUS",
    description: "Focused on full-stack development with Next.js. Building performant, scalable web apps using modern frameworks and best practices.",
  },
];

const Timeline = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <>
      <motion.h1 ref={ref} initial={{ y: 50, opacity: 0, backdropFilter: 'blur(15px)' }} animate={ inView ? { y: 0, opacity: 1, backdropFilter: 'blur(0px)' } : { y: 50, opacity: 0, backdropFilter: 'blur(15px)' }} transition={{ duration: .3 }} className="-mt-10 text-center text-6xl max-sm:-mt-30 sm:-mt-30 md:-mt-30 sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-white leading-tight">My Journey</motion.h1>
      <motion.div ref={ref} initial={{ y: 50, opacity: 0, backdropFilter: 'blur(15px)' }} animate={ inView ? { y: 0, opacity: 1, backdropFilter: 'blur(0px)' } : { y: 50, opacity: 0, backdropFilter: 'blur(15px)' }} transition={{ duration: .3 }} className="w-full relative px-4 md:px-0 min-h-screen mt-20">
          {/* Vertical lines */}
          <div className="absolute left-0 translate-x-0 h-full z-0 w-[3px] bg-gradient-to-b from-emerald-600/0 via-emerald-600/50 to-emerald-600/0 blur-sm hidden md:block"></div>
          <div className="absolute left-0 translate-x-0 h-full z-0 w-[1px] bg-emerald-600/20"></div>
          <div className="absolute left-0 translate-x-0 w-[2px] z-0 bg-gradient-to-b from-emerald-600 via-blue-400 to-emerald-400 origin-top" style={{ height: "100%", transform: "scaleY(1)" }} ></div>

          {/* Steps */}
          {timelineSteps.map((step, index) => (
              <div key={index} data-step={index} className="timeline-step relative mb-16 md:mb-24 last:mb-0 group" style={{ opacity: 1, transform: "none" }} >
                  <div className={`absolute left-0 -translate-x-[22px] md:-translate-x-2 xl:-translate-x-2 w-[14px] h-[14px] md:w-[20px] md:h-[20px] rounded-full transition-all duration-200 scale-110 md:scale-125 shadow-md md:shadow-lg shadow-emerald-600/30 md:shadow-emerald-600/50`}style={{zIndex: 2,background: "linear-gradient(45deg, rgb(94, 233, 181), rgb(94, 233, 181))",border: "2px solid rgb(94, 233, 181)",}}>
                  <div className={`absolute inset-0 rounded-full bg-emerald-600/50 blur-md transition-opacity duration-300 hidden md:block opacity-100`}></div>
              </div>
                  <div className="w-full md:w-[98%] ml-5 xl:ml-12 max-md:ml-7 md:ml-7">
                  <div className="p-4 md:p-8 rounded-2xl transition-all duration-300" style={{ background: "rgba(94, 233, 181, 0.5)", border: "1px solid rgb(94, 233, 181)" }} >
                      <span className={`inline-block px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-4 bg-emerald-100/20 text-slate-300`}>{step.stage}</span>
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                          <h3 className={`text-lg md:text-3xl font-bold transition-colors duration-300 text-white"`}>{step.title}</h3>
                      </div>
                      <p className={`text-sm md:text-base transition-colors duration-300 text-white/80`}>
                          {step.description}
                      </p>
                  </div>
              </div>
            </div>
          ))}
      </motion.div>
    </>
);

};

export default Timeline;