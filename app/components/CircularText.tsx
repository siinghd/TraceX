'use client'

import React, { useEffect, useRef } from 'react';

interface CircularTextProps {
  text: string;
}

const CircularText: React.FC<CircularTextProps> = ({ text }) => {
    const containerRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const container = containerRef.current;
      if (container) {
        const radius = container.clientWidth / 2;
        const angleIncrement = (2 * Math.PI) / text.length;
        const rotationOffset = -Math.PI / 2; // Adjust the rotation offset if needed
  
        const characters = container.querySelectorAll('.circular-text-character');
        characters.forEach((character, index) => {
          const angle = angleIncrement * index + rotationOffset;
          const x = Math.round(radius * Math.cos(angle));
          const y = Math.round(radius * Math.sin(angle));
  
          const translateX = x - character.clientWidth / 2;
          const translateY = y - character.clientHeight / 2;
          const rotate = angle + Math.PI / 2; // Adjust the rotation angle if needed
  
          (character as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}rad)`;
        });
      }
    }, [text]);
  
    return (
      <div className="circular-text-container w-[55px] md:w-[70px]" ref={containerRef}>
        {text.split('').map((char, index) => (
          <span key={index} className="circular-text-character text-[10px] md:text-[12px]">
            {char}
          </span>
        ))}
      </div>
    );
  };

export default CircularText;
