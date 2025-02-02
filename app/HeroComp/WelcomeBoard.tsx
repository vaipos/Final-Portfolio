'use client'
import React, { useState, CSSProperties, useEffect } from 'react';

const WelcomeBoard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  const globalSpotlightStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    background: `radial-gradient(circle 180px at ${mousePosition.x}px ${mousePosition.y}px, 
      rgba(147, 197, 253, 0.15) 0%, 
      rgba(147, 197, 253, 0.05) 40%,
      transparent 80%)`,
    transition: 'background 100ms ease-out'
  };

  return (
    <div className="min-h-screen relative">
      <div style={globalSpotlightStyle} />
      
      <div className="items-center  relative z-10">
        <div className="mt-[12vw] bg--900 text-7xl font-bold">
          Hi there,
          <div className="flex my-[2vw]">
            <div className="text-secondary bg--900 text-7xl font-bold">
              Vaishnavi
            </div>
            <div className="pl-4 bg--900 text-7xl font-bold">here!</div>
          </div>
        </div>
        <div className="text-lg font-bold">
          Web development, Machine Learning, and Data Analytics is my Jam
        </div>
        <div className="mt-4 mr-96">
          <div className="relative overflow-hidden rounded-lg group">
            <p className="text-[#3d4451] leading-relaxed max-w-2xl space-y-2">
              <span className="block transition-all duration-500 ease-in-out hover:text-primary">
                I am fascinated by high-impact technologie, I have learnt over{' '}  <span className="font-bold text-white">25+ ML algorithms</span> and contributed to{' '}
                <span className="font-bold text-white">15+ machine learning</span> projects.
              </span>
              <span className="block transition-all duration-500 ease-in-out hover:text-primary">
                Led{' '}
                <span className="font-bold text-white">5+ teams</span> in{' '}
                <span className="font-bold text-white">web development.</span> 
              </span>
              <span className="block transition-all duration-500 ease-in-out hover:text-primary">
                Experienced with{' '}
                <span className="font-bold text-white">AWS cloud computing</span> and{' '}
                <span className="font-bold text-white">Apache ecosystem</span> for data analysis/processing.
              </span>
              <span className="block transition-all duration-500 ease-in-out hover:text-primary">
                All accomplished within{' '}
                <span className="font-bold text-white">3 years</span> of professional experience.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Animated Design on the right */}

    </div>
  );
};

export default WelcomeBoard;
