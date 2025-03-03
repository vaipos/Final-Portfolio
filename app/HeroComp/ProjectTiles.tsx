import { FaGithub } from "react-icons/fa";

const projectsTiles = [
  {
    title: "Blue Blood",
    description: "Predicting changes in blood profiles after drug administration.",
    github: "https://github.com/vaipos/opensearch-py-ml",
    tools: "LSTM, Transfer Learning, Drug Databases"
  },
  {
    title: "ChemoCraft",
    description: "Deep learning model for segmenting brain tumors from MRI scans.",
    github: "https://github.com/vaipos/ChemoCraft-2024",
    tools: "Python, TensorFlow, BraTS Dataset"
  },
  {
    title: "ML Commons",
    description: "Open source code contribution tackling various different ML based solutions.",
    github: "https://github.com/vaipos/ml-commons",
    tools: "Tensorflow, MLlib, Python"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects and blogs.",
    github: "https://github.com/vaipos/react-portfolio",
    tools: "React, Tailwind, Next"
  },
  {
    title: "ML Specialization",
    description: "A documentation of each project, each skill set, and new algorithm I learned throughout my time studying Machine Learning",
    github: "https://github.com/vaipos/ML-Specialization",
    tools: "Math behind ML, Pandas, Numpy"
  },
  {
    title: "Data Structure and Algorithm Implementation",
    description: "Leading a research project on machine learning applications in medicine.",
    github: "https://github.com/vaipos/Individual-Learning",
    tools: "Java"
  }
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mb-[10%] overflow-x-hidden">
      {projectsTiles.map((project, index) => (
        <div key={index} className="card bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-xl p-6 rounded-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <div className="card-body">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <p className="text-sm font-medium mb-4">Tools: {project.tools}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline bg-transparent text-white hover:bg-blue-600 hover:border-blue-600 mt-4 flex items-center gap-2 w-full sm:w-auto justify-center transition-all duration-200"
            >
              {/* Hide the text on smaller screens */}
              <span className="hidden sm:inline">View on GitHub</span>
              {/* Show only the logo on smaller screens */}
              <FaGithub className="sm:hidden text-xl" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
