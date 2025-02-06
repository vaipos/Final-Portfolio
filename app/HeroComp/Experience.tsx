"use client";
import React, { useState } from "react";

const experiences = [
  {
    id: 1,
    title: "BANK OF AMERICA",
    display: "Bank of America",
    dates: "May 2025 (Incoming)",
    job: "Incoming Software Engineer Intern",
    content: ["Details to be added once the internship starts."],
  },
  {
    id: 2,
    title: "GENERAL GENOMICS",
    display: "General Genomics",
    dates: "Jun 2024 - Present",
    job: "AI Data Engineering Intern",
    content: [
      "Architected and implemented a high-performance, scalable data lake leveraging Google Cloud Platform’s suite of big data services.",
      "Creating an LLM model that facilitates client communication with data lake, predicted to have a 42% increase in user traffic.",
    ],
  },
  {
    id: 3,
    title: "UNIVERSITY OF TEXAS AT DALLAS",
    display: "University of Texas at Dallas",
    dates: "Jan 2024 - Present",
    job: "Undergraduate Research Fellow",
    content: [
      "Conducted research on the applications of AI in managing hospitalization durations for patients.",
      "Founded and constructed an optimal model via LSTMs paired with RNNs resulting in an 89% accuracy.",
    ],
  },
  {
    id: 4,
    title: "AVOLTA INC.",
    display: "Avolta Inc.",
    dates: "Sept 2023 - Jan 2024",
    job: "ML Engineer Volunteer",
    content: [
      "Designed an innovative automobile authentication system using advanced facial recognition AI technology.",
      "Captured users with OpenCV and constructed a Support Vector Machine to authenticate user’s profile.",
    ],
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <div className="py-36 mx-[3%]">
      <div className="flex">
        <div className="text-3xl font-mono pb-9">/experience</div>
        <hr className="border-slate-600 w-full my-5 ml-[5%]" />
      </div>
      <div className="flex -mx-[1%] my-[2%]">
        <div className="relative w-1/4 bg-base p-4 space-y-4 rounded-lg">
          {experiences.map((experience) => (
            <button
              key={experience.id}
              className={`w-full text-left py-3 pr-10 transition-all text-xs duration-300 ease-in-out transform ${
                selectedExperience.id === experience.id
                  ? "text-primary font-semibold"
                  : "text-slate-400"
              }`}
              onClick={() => setSelectedExperience(experience)}
            >
              {experience.title}
            </button>
          ))}
          <div
            className="absolute top-0 left-[85%] w-1 h-[40px] bg-primary transition-all duration-300 ease-in-out"
            style={{
              transform: `translateY(${(selectedExperience.id - 1) * 145}%)`,
            }}
          />
        </div>

        <div className="w-3/4 px-6 bg-base rounded-lg transition-all duration-300 ease-in-out transform">
          <h2 className="text-2xl font-semibold text-white">
            {selectedExperience.job} {" @ "}{" "}
            <span className="text-cyan-200">{selectedExperience.display}</span>
          </h2>
          <p className="mt-4 text-slate-400">{selectedExperience.dates}</p>
          <ul className="mt-4 text-slate-300 list-disc list-inside">
            {selectedExperience.content?.map((point, index) => (
              <li key={index}>{point}</li>
            )) || <li>No details available.</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
