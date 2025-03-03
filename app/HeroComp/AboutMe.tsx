"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMe = () => {
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

  const getAboutMeDimensions = () => {
    const viewportWidth = screenSize.width;
    const viewportHeight = screenSize.height;

    const width = Math.min(viewportWidth * 0.6, 1000);
    const height = Math.min(viewportHeight * 0.6, 1000);
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
      className="flex justify-center items-center w-full h-screen relative"
      style={{ fontSize: `${fontSizeFactor * 16}px` }}
    >
      <motion.div
        className="rounded-full bg-gradient-to-r from-purple-700 to-blue-700"
        style={{
          width: AboutMeDimensions.width,
          height: AboutMeDimensions.height,
          minWidth: "280px",
          minHeight: "280px",
          maxWidth: "800px",
          maxHeight: "800px",
        }}
      >
        <div className="my-[15%]">
          {/* Mock-up Code - Unchanged */}
          <motion.div
            className="mockup-code bg-base-300 h-auto pb-[5%] overflow-x-auto transition-opacity duration-700 shadow-2xl shadow-black"
            style={{
              width: screenSize.width < 900 ? "100%" : "150%",
              maxWidth: "1200px",
              position: "relative",
              right: screenSize.width < 900 ? "0%" : "25%",
              transform: "translateX(-50%)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex mx-[5vw] mr-[5vw] gap-[10%] my-[4%] flex-row-reverse">
              {/* Image */}
              <motion.div
                className="flex-shrink-0 hidden lg:block"
                style={{
                  width: `${fontSizeFactor * 250}px`,
                }}
              >
                <Image
                  src="/DSC 0236.jpg"
                  alt="profilepic"
                  width={250}
                  height={250}
                  className="w-full mt-[20%] h-auto object-contain rounded-full"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </motion.div>

              {/* Text Content */}
              <div className="flex flex-col justify-center items-start w-full">
                <motion.div
                  className="my-[3%] font-mono"
                  style={{ fontSize: `${fontSizeFactor * 27}px` }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  /about-me
                </motion.div>
                <motion.p
                  className="font-mono z-60 space-y-96 leading-relaxed"
                  style={{ fontSize: `${fontSizeFactor * 14}px` }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                >
                  I&apos;m an upcoming{" "}
                  <span className="text-primary">Software Engineer Intern</span>{" "}
                  at <span className="text-primary">Bank of America</span> in{" "}
                  <span className="text-primary">
                    Corporate Audit Technology & Automation
                  </span>
                  . At <span className="text-primary">General Genomics</span>,
                  I&apos;ve worked as an{" "}
                  <span className="text-primary">AI Data Engineer Co-op</span>,
                  building synthetic data generation models while utilizing a
                  data lake. I also lead undergraduate research in medical
                  mobility-based diagnostic and generative models at the{" "}
                  <span className="text-primary">
                    University of Texas at Dallas
                  </span>
                  .
                </motion.p>

                <motion.p
                  className="font-mono z-60 mt-[2%] space-y-7 leading-relaxed font-bold"
                  style={{ fontSize: `${fontSizeFactor * 14}px` }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                >
                  Tools I have been working with:
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  {[
                    [
                      "React.js",
                      "Next.js",
                      "SQL Server",
                    ],
                    [
                      "Tensorflow",
                      "PyTorch",
                      "Spark MLlib",
                    ],
                    [
                      "Spark Streaming",
                      "REST API",
                      "Prisma",
                    ],
                    [
                      "AWS",
                      "SparkSQL",
                      "Tableau",
                    ],
                
                  ].map((list, index) => (
                    <motion.div
                      key={index}
                      className="space-y-96 font-mono"
                      style={{ fontSize: `${fontSizeFactor * 14}px` }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: 0.5 + index * 0.1,
                      }}
                    >
                      <ul className="list-disc pl-5">
                        {list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;