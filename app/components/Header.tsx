'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DarkModeToggle from './Buttons/DarkModeToggle';

const Header = (): JSX.Element => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const logoSrc = darkMode ? '/img/logo-dark.svg' : '/img/logo-light.svg';

  return (
    <header className="w-full border-b-[1px] border-grey px-3 md:px-6 lg:px-8 flex justify-between items-center">
      <div className="md:w-1/3">
        <Image src={logoSrc} width={200} height={100} className="max-w-[100px]" alt="TraceX" />
      </div>
      <div className="md:w-1/3 text-center flex center">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <div className="md:w-1/3 flex justify-end">
        <Link href="#trace" className="bold text-[30px] border-l-[1px] border-grey py-2 pl-3 md:pl-6 lg:pl-8">
          Trace something
        </Link>
      </div>
    </header>
  );
};

export default Header;
