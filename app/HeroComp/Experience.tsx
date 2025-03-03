"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const experiences = [
  {
    id: 1,
    title: "BANK OF AMERICA",
    display: "Bank of America",
    dates: "May 2025 (Incoming)",
    job: "Incoming Software Engineer Intern",
    content: [
      "Will develop and optimize financial technology solutions using modern software engineering practices and methodologies.",
      "Expected to collaborate with cross-functional teams to implement secure, scalable applications for banking systems.",
      "Will gain experience with enterprise-level software architecture, API development, and financial data processing systems.",
      "Anticipated to participate in agile development processes and contribute to the bank's digital transformation initiatives."
    ],
  },
  {
    id: 2,
    title: "GENERAL GENOMICS",
    display: "General Genomics Inc.",
    dates: "Jun 2024 - Present",
    job: "AI Data Engineer Intern",
    content: [
      "Architected deployment-ready Convolutional Neural Networks (CNNs) and Generative Adversarial Networks (GANs) for production environments.",
      "Leveraged SparkSQL, MLlib, and Spark Streaming to process and analyze large-scale genomic datasets.",
      "Designed user interfaces and APIs utilizing Next.js, React, and PostgreSQL to create intuitive data visualization tools.",
      "Led GGI EdTech initiative 'AI4Execs' program, teaching over 50 Veterans best practices in machine learning and artificial intelligence."
    ],
 
  }, {
    id: 3,
    title: "ASSOCIATION FOR COMPUTING MACHINERY",
    display: "Association for Computing Machinery",
    dates: "Feb 2024 - Present",
    job: "Research Lead",
    content: [
      "Designed and implemented comprehensive cloud solutions utilizing AWS S3, EC2, IAM, and AWS CLI for research projects.",
      "Constructed and utilized Long Short-Term Memory networks (LSTMs), auto-encoder decoders, and GANs for optimal performance in data analysis.",
      "Led and recruited a high-performing team while refining project management skills across multiple research initiatives.",
      "Previously served as Student Researcher from February 2024 to May 2024, contributing to seasonal research projects."
    ],
    
  },
  {
    "id": 4,
    "title": "AVOLTA INC.",
    "display": "Avolta Inc.",
    "dates": "Sept 2023 - Jan 2024",
    "job": "AI/ML Volunteer",
    "content": [
      "Designed an innovative automobile authentication system using advanced facial recognition AI technology.",
      "Captured users with OpenCV and constructed a Support Vector Machine to authenticate user profiles.",
      "Utilized Jupyter Notebooks, SVM, and OpenCV to implement and refine the system."
    ]
  },
 
  {
    id: 5,
    title: "UNIVERSITY OF TEXAS AT DALLAS",
    display: "University of Texas at Dallas",
    dates: "Sep 2023 - Dec 2023",
    job: "Undergraduate Research Fellow",
    content: [
      "Collaborated with several esteemed Professors and enhanced knowledge of complex machine learning topics.",
      "Developed skills in secure and efficient tools and methods for handling sensitive data in research contexts.",
      "Gained understanding of research paper requirements and implemented best practices for academic publications.",
      "Participated in on-site research activities at Richardson, Texas campus, contributing to departmental research initiatives."
    ],

  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.3 } 
    }
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="md:pt-[25%] mx-[3%] pt-[80%] sm:pt-[75%] pb-[10%]">
      <motion.div
        className="my-[3%]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="flex">
          <div className="text-3xl font-mono pb-9">/experience</div>
          <hr className="border-slate-600 w-full my-5 ml-[5%]" />
        </div>
        
        {/* Responsive Container - Changes from row to column on smaller screens */}
        <div className="flex flex-col md:flex-row -mx-[1%] my-[2%]">
          
          {/* Tabs Section - Full width on mobile with flex wrap for multiple rows, 1/4 width on desktop */}
          <div className="relative w-full md:w-1/4 bg-base p-4 rounded-t-lg md:rounded-t-none md:rounded-l-lg mb-4 md:mb-0">
            <div className="flex flex-wrap md:flex-col">
              {experiences.map((experience) => (
                <div key={experience.id} className="relative w-1/2 sm:w-auto md:w-full">
                  <button
                    className={`w-full text-left py-3 px-4 md:pr-10 transition-all text-xs duration-300 ease-in-out transform ${
                      selectedExperience.id === experience.id
                        ? "text-primary font-semibold"
                        : "text-slate-400"
                    }`}
                    onClick={() => setSelectedExperience(experience)}
                  >
                    {experience.title}
                  </button>
                  {selectedExperience.id === experience.id && (
                    <motion.div
                      className="absolute md:top-0 md:right-0 md:w-1 md:h-full bottom-0 left-0 h-1 w-full bg-primary"
                      layoutId="indicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content Section - Full width on mobile, 3/4 width on desktop */}
          <div className="w-full md:w-3/4 px-6 py-6 bg-base rounded-b-lg md:rounded-b-none md:rounded-r-lg transition-all duration-300 ease-in-out transform overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExperience.id}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {selectedExperience.job} {" @ "}{" "}
                  <span className="text-cyan-200">
                    {selectedExperience.display}
                  </span>
                </h2>
                <p className="mt-2 text-slate-400">{selectedExperience.dates}</p>
                
                {/* Additional employment details */}
              
                
                <ul className="mt-6 text-slate-300 list-none pl-2 md:pl-6">
                  {selectedExperience.content?.map((point, index) => (
                    <motion.li
                      className="my-5 relative pl-5"
                      key={index}
                      custom={index}
                      variants={bulletVariants}
                    >
                      <motion.span 
                        className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary clip-polygon"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      />
                      <p className="ml-6">{point}</p>
                    </motion.li>
                  )) || <li>No details available.</li>}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;