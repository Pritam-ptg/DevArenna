import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [tick, setTick] = useState(0);
  
  const countdownRef = useRef({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const countdownElements = useRef([
    { label: 'Days', value: 0 },
    { label: 'Hours', value: 0 },
    { label: 'Minutes', value: 0 },
    { label: 'Seconds', value: 0 }
  ]);

  useEffect(() => {
    // Update function that recalculates time and updates refs
    const updateCountdown = () => {
      const currentDate = new Date();
      const eventDate = new Date("2025-05-14T00:00:00Z");
      const timeDifference = eventDate.getTime() - currentDate.getTime();
      
      const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
      
      // Update the countdown ref
      countdownRef.current = {
        days: daysLeft,
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft
      };
      
      // Update the elements ref
      countdownElements.current = [
        { label: 'Days', value: daysLeft },
        { label: 'Hours', value: hoursLeft },
        { label: 'Minutes', value: minutesLeft },
        { label: 'Seconds', value: secondsLeft }
      ];
      
      // Force re-render
      setTick(prev => prev + 1);
    };
    
    // Initial update
    updateCountdown();
    
    // Set up the interval
    const intervalId = setInterval(updateCountdown, 1000);
    
    // Clean up
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="min-h-screen font-squid bg-black text-white relative overflow-hidden flex items-center justify-center antialiased">
      {/* Gradient background */}
      <div 
        className="absolute inset-0" 
        style={{
          background: "linear-gradient(to right, #A2336D, #3A79A4, #37759F)",
          opacity: 0.2
        }}
      ></div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080808] to-[#1a1a1a] opacity-90"></div>
      
      {/* Decorative shapes inspired by Squid Game */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-pink-600/20 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-600/20 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-6">
        <h1
          className="text-6xl md:text-8xl font-bold mb-4 font-squid tracking-tight leading-none select-none"
          style={{
            background: "linear-gradient(to right, #A2336D, #3A79A4, #37759F)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            // Enhanced font rendering
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale"
          }}
        >
          DEVARENA 2025
        </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 tracking-wide">
            A three-day tech extravaganza inspired by Squid Game
          </p>
        </div>
        
        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 px-2">
          {countdownElements.current.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#080808] border border-pink-600/30 rounded-lg p-2 sm:p-4 text-center shadow-sm flex-grow flex-shrink-0 max-w-[90px] sm:max-w-[120px]"
            >
              <span className="text-2xl sm:text-4xl font-bold text-pink-500 tracking-tighter">
                {item.value}
              </span>
              <p className="text-xs sm:text-sm text-white/60 tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <a 
            href="https://lu.ma/0hrz9481" 
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium tracking-wider"
          >
            REGISTER NOW
          </a>
          <a 
            href="#events" 
            className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300 font-medium tracking-wider"
          >
            EXPLORE EVENTS
          </a>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/60 hover:text-white transition-colors duration-300">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;