"use client";
import { motion } from "framer-motion";

import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Neuro Guide",
    description: "Designed an innovative automobile authentication system using advanced facial recognition AI technology.",
    image: "/d.png",
    link: "https://github.com/vaipos/Neuro-Guide",
  },
  {
    title: "Bug Tracker",
    description: "Designed an innovative automobile authentication system using advanced facial recognition AI technology.",
    image: "/a.png",
    link: "https://github.com/vaipos/Bug-Tracker-CS-3354",
  },
  {
    title: "Pulmo",
    description:
      "Designed an innovative automobile authentication system using advanced facial recognition AI technology.",
    image: "/b.png",
    link: "https://github.com/AnishG-git/Axxess2024",
  },
  {
    title: "3D Graphics",
    description: "Designed an innovative automobile authentication system using advanced facial recognition AI technology.",
    image: "/c.png",
    link: "https://github.com/vaipos/3D-Project-Collection",
  },
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <motion.div
    className="py-[15%] mx-[3%] "
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
        <div className="w-[70vw]  ">
      <div className="flex items-center mb-8">
        <h2 className="text-3xl font-mono">/projects</h2>
        <div className="h-px bg-slate-600 flex-1 ml-8 mr-[20%]" />
      </div>

      <div className="relative overflow-visible  overflow-hidden-over pt-10  sm:pb-[3%] items-center">
        <div
          className="flex transition-transform duration-700 ease-in-out "
          style={{
            transform: `translateX(calc(${-currentIndex * 50}% + 25%))`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[70%] "
              style={{
                opacity: index === currentIndex ? "1" : "0.5",
                transform: index === currentIndex ? "scale(1)" : "scale(0.8)",
                transition: "all 500ms ease-in-out",
              }}
            >
              <div className=" bg-base-300 w-[50vw] shadow-2xl rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row h-[30vh]">
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 text-sm mb-6">{project.description}</p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors w-fit"
                    >
                      <FaGithub className="text-xl" /> View on GitHub
                    </a>
                  </div>

                  <div className="md:w-1/2 relative h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-base-300 via-base-300/10 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-[15rem] hidden top-96 md:top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full backdrop-blur-sm transition-colors text-xl font-bold z-10"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[15rem] hidden top-auto md:top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full backdrop-blur-sm transition-colors text-xl font-bold z-10"
        >
          →
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6 mb-[7%] items-center">
      <button
      className="mr-[5%]  bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full backdrop-blur-sm transition-colors text-xl font-bold z-10"
          onClick={prevSlide}
        >
          ←
        </button>
   
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 my-[2%] ${
              index === currentIndex
                ? "w-8 bg-blue-500"
                : "w-4 bg-slate-600 hover:bg-slate-500"
            }`}
          />
        ))}
             <button
                   className=" ml-[5%]  bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full backdrop-blur-sm transition-colors text-xl font-bold z-10"

          onClick={nextSlide}
        >
          →
        </button>
      </div>
    </div>
    </motion.div>
  );
};

export default ProjectCarousel;
