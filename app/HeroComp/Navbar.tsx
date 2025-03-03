'use client'
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai'; // Correct Gmail icon
import { FaLinkedin, FaGithub, FaBars } from 'react-icons/fa'; // LinkedIn, GitHub, and Bars icon for menu

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State to handle dropdown toggle

  // Function to handle smooth scrolling to components
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
      setDropdownOpen(false); // Close dropdown after click
    }
  };

  return (
    <div className="flex text-sm justify-between fixed bg-base-300 z-50 p-5 rounded-3xl w-full sm:w-[80vw] md:w-[70vw] lg:w-[70vw] xl:w-[70vw] 2xl:w-[60vw]">
      <div className="flex text-sm">
        <div className="font-bold">Vaishnavi Pasumarthi</div>
        
        {/* Dropdown for smaller screens */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)} // Toggle dropdown on button click
            className="pl-5 my-0.5 cursor-pointer"
          >
            <FaBars size={16} /> {/* Hamburger menu icon */}
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 bg-base-100 text-base-content shadow-lg p-2 space-y-2 w-40">
              <div 
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => scrollToSection('about')}
              >
                About
              </div>
              <div 
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => scrollToSection('experience')}
              >
                Experience
              </div>
              <div 
                className="cursor-pointer hover:text-primary transition-colors"
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </div>
            </div>
          )}
        </div>

        {/* For larger screens, showing the menu inline */}
        <div className="hidden lg:flex space-x-5 pl-5">
          <div 
            className="cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection('about')}
          >
            About
          </div>
          <div 
            className="cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </div>
          <div 
            className="cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </div>
        </div>
      </div>

      {/* Social media icons */}
      <div className="flex space-x-7 scale-75">
        <a href="mailto:tvk.pasumarthi@gmail.com" className="cursor-pointer">
          <AiOutlineMail size={24} /> {/* Gmail icon */}
        </a>
        <a href="https://www.linkedin.com/in/vaishnavi-pasumarthi-683726251/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <FaLinkedin size={24} /> {/* LinkedIn icon */}
        </a>
        <a href="https://github.com/vaipos" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <FaGithub size={24} /> {/* GitHub icon */}
        </a>
      </div>
    </div>
  );
};

export default Navbar;