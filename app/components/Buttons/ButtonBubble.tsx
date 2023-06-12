'use client'

import React, { useEffect } from 'react';

function ButtonBubble() {
  useEffect(() => {
    // Dynamically generate keyframe animations with random values
    function generateKeyframes() {
      for (let bubble = 1; bubble <= 10; bubble++) {
        const randomOffset = Math.floor(Math.random() * 80 + 50);
        const animationDelay = bubble * 0.2;
        const keyframe = `
          @keyframes move-${bubble} {
            0% {
              transform: translate(0, 0);
            }
            99% {
              transform: translate(0, -${randomOffset}px);
            }
            100% {
              transform: translate(0, 0);
              opacity: 0;
            }
          }
        `;

        const style = document.createElement('style');
        style.innerHTML = keyframe;
        document.head.appendChild(style);
      }
    }

    generateKeyframes();
  }, []);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className='pointer-events-none bubble-btn-svg'>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="highContrastGraphic"
            />
            <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
          </filter>
        </defs>
      </svg>

      <a href='#trace' id="gooey-button" className='bg-grad-light-2 px-[15px] py-[12px] bold relative z-[1] cursor-pointer dark:text-black select-none'>
        Trace something
        <span className="bubbles">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              className="bubble bg-grad-light-2"
              key={index}
              style={{
                left: `calc(${Math.floor(Math.random() * 90) + 0}% + 0px)`,
                width: '25px',
                height: '25px',
                animation: `move-${index + 1} ${3 + (index + 1) * 0.02}s infinite`,
                animationDelay: `${(index + 1) * 0.2}s`,
              }}
            ></span>
          ))}
        </span>
      </a>
    </>
  );
}

export default ButtonBubble;
