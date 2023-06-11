'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DarkModeToggle from './Buttons/DarkModeToggle';

const Header = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedPreference = localStorage.getItem('darkMode');
    setDarkMode(storedPreference ? JSON.parse(storedPreference) : window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
      if (darkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  }, [darkMode, isClient]);

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const logoSrc = darkMode ? '/img/logo-dark.svg' : '/img/logo-light.svg';

  return (
    <header className="w-full border-b-[1px] border-grey px-3 md:px-6 lg:px-8 flex justify-between items-center">
      <div className="md:w-1/3">
        <Image src={logoSrc} width={200} height={100} className="max-w-[100px] select-none" alt="TraceX" />
      </div>
      <div className="md:w-1/3 text-center flex center">
        <DarkModeToggle darkMode={darkMode} setDarkMode={handleDarkModeToggle} />
      </div>
      <div className="md:w-1/3 flex justify-end">
        <Link href="#trace" className="bold text-[20px] md:text-[30px] border-l-[1px] border-grey py-2 pl-3 md:pl-6 lg:pl-8 select-none leading-8">
          Trace something
        </Link>
      </div>
    </header>
  );
};

export default Header;
