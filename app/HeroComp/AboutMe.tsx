"use client";

import React, { useEffect, useState, useRef } from "react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [screenSize, setScreenSize] = useState({
    width: 1640,
    height: 1040,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const baseWidth = 1640;
  const baseHeight = 1040;

  const scaleFactor = Math.min(
    screenSize.width / baseWidth,
    screenSize.height / baseHeight
  );
  const minScaleFactor = 1;
  const fontSizeFactor = Math.max(scaleFactor, minScaleFactor);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Ensure animation only happens once
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Calculate AboutMe dimensions based on viewport
  const getAboutMeDimensions = () => {
    const viewportWidth = screenSize.width;
    const viewportHeight = screenSize.height;

    let width = Math.min(viewportWidth * 0.6, 1000);
    let height = Math.min(viewportHeight * 0.6, 1000);
    const size = Math.min(width, height);

    if (viewportWidth < 640) {
      return {
        width: `${Math.min(85, size)}vw`,
        height: `${Math.min(85, size)}vw`,
      };
    } else if (viewportWidth < 1024) {
      return {
        width: `${Math.min(75, size)}vw`,
        height: `${Math.min(75, size)}vw`,
      };
    } else {
      return {
        width: `${Math.min(60, size)}vw`,
        height: `${Math.min(60, size)}vw`,
      };
    }
  };

  const AboutMeDimensions = getAboutMeDimensions();

  return (
    <div
      ref={sectionRef}
      className="flex justify-center items-center w-full h-screen relative"
      style={{ fontSize: `${fontSizeFactor * 16}px` }}
    >
      {/* AboutMe */}
      <div
        className="rounded-full bg-gradient-to-r  from-purple-700 to-blue-700"
        style={{
          width: AboutMeDimensions.width,
          height: AboutMeDimensions.height,
          minWidth: "280px",
          minHeight: "280px",
          maxWidth: "800px",
          maxHeight: "800px",
        }}
      >
        {/* Mock-up Code - Unchanged */}
        <div
          className={`mockup-code bg-gray-900 top-[13%] w-[160%] -mx-[30%] h-auto pb-[5%] overflow-x-auto transition-opacity duration-700 shadow-2xl shadow-black ${
            isVisible ? "opacity-100 animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="flex mx-[5vw] mr-[5vw] gap-[10%] my-[4%] flex-row-reverse">
            {/* Image */}
            <div
              className="flex-shrink-0 hidden lg:block"
              style={{
                width: `${fontSizeFactor * 250}px`,
              }}
            >
              <img
                src="/DSC 0236.jpg"
                alt="profilepic"
                className="w-full mt-[20%] h-auto object-contain rounded-full"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Text Content */}
            <div className=" flex flex-col justify-center items-start w-full">
              <div
                className="my-[3%] font-mono"
                style={{ fontSize: `${fontSizeFactor * 27}px` }}
              >
                /about-me
              </div>
              <p
                className="font-mono z-60 space-y-96 leading-relaxed"
                style={{ fontSize: `${fontSizeFactor * 14}px` }}
              >
                I'm an upcoming{" "}
                <span className="text-primary">Software Engineer Intern</span>{" "}
                at <span className="text-primary">Bank of America</span> in{" "}
                <span className="text-primary">
                  Corporate Audit Technology & Automation
                </span>
                . At <span className="text-primary">General Genomics</span>,
                I've worked as an{" "}
                <span className="text-primary">AI Data Engineer Co-op</span>,
                building synthetic data generation models while utilizing a data
                lake. I also lead undergraduate research in medical
                mobility-based diagnostic and generative models at the{" "}
                <span className="text-primary">
                  University of Texas at Dallas
                </span>
                .
              </p>
              <p
                className="font-mono z-60 mt-[2%] space-y-7 leading-relaxed font-bold"
                style={{ fontSize: `${fontSizeFactor * 14}px` }}
              >
                Tools I have been working with:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                <div
                  className="space-y-96 font-mono"
                  style={{ fontSize: `${fontSizeFactor * 14}px` }}
                >
                  <ul className="list-disc pl-5">
                    <li>Collaborative problem solving</li>
                    <li>AI model development</li>
                    <li>Data engineering solutions</li>
                  </ul>
                </div>
                <div
                  className="space-y-96 font-mono"
                  style={{ fontSize: `${fontSizeFactor * 14}px` }}
                >
                  <ul className="list-disc pl-5">
                    <li>Machine learning applications</li>
                    <li>Data lake architecture</li>
                    <li>Research leadership</li>
                  </ul>
                </div>
                <div
                  className="space-y-96 font-mono"
                  style={{ fontSize: `${fontSizeFactor * 14}px` }}
                >
                  <ul className="list-disc pl-5">
                    <li>Healthcare innovations</li>
                    <li>Technical research analysis</li>
                    <li>Cross-functional collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
