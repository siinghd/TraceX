'use client'

import React, { useEffect, useRef } from 'react';

const Hero = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const filtersRef = useRef<SVGSVGElement>(null);

  const texts = [
    'Record',
    'Protect',
    'Trace',
    'Blockchain',
    'Security',
    'Immutable',
    'Empower',
  ];

  let textIndex = texts.length - 1;
  let time: number = Date.now();
  let morph = 0;
  let cooldown = 0.25;

  useEffect(() => {
    const container = containerRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / 1;

      if (fraction > 1) {
        cooldown = 0.25;
        fraction = 1;
      }

      setMorph(fraction);
    };

    const setMorph = (fraction: number) => {
      if (text2) {
        text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        text2.textContent = texts[(textIndex + 1) % texts.length];
      }

      if (text1) {
        fraction = 1 - fraction;
        text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        text1.textContent = texts[textIndex % texts.length];
      }
    };

    const doCooldown = () => {
      morph = 0;

      if (text2) {
        text2.style.filter = '';
        text2.style.opacity = '100%';
      }

      if (text1) {
        text1.style.filter = '';
        text1.style.opacity = '0%';
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);

      const newTime: number = Date.now();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime - time) / 3000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    };

    animate();
  }, []);

  return (
    <>
        <div id="hero-text-container" className='min-h-[55px] lg:min-h-[100px] xl:min-h-[130px] mb-12' ref={containerRef}>
            <span className='bold text-[65px] lg:text-[120px] xl:text-[150px] leading-[55px] lg:leading-[100px] xl:leading-[130px] select-none' id="hero-text1" ref={text1Ref}>Record</span>
            <span className='bold text-[65px] lg:text-[120px] xl:text-[150px] leading-[55px] lg:leading-[100px] xl:leading-[130px] select-none' id="hero-text2" ref={text2Ref}>Record</span>
        </div>

        <svg id="filters" ref={filtersRef} className='hidden'>
            <defs>
            <filter id="threshold">
                <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 255 -140"
                />
            </filter>
            </defs>
        </svg>


        <p aria-label="The best tool to trace" className='semibold text-[30px] select-none'>
           The best tool to <span className="typewriter thick text-gradient"></span>
        </p>
    </>
  );
};

export default Hero;
