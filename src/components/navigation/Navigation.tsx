'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { MdGraphicEq } from 'react-icons/md';

import useDarkMode from '@hooks/useDarkMode';

export default function Navigation() {
  const { colorTheme, setTheme } = useDarkMode();
  const [darkTheme, setDarkTheme] = useState<boolean>(
    colorTheme === 'light' ? true : false
  );

  const toggleThemeHandler = () => {
    setTheme(colorTheme);
    setDarkTheme((prevState) => !prevState);
  };

  return (
    <header className='nav-height fixed top-0 z-[1090] flex w-full items-center'>
      <nav className='layout flex justify-center'>
        <div className={clsx('grid-12 gap-2', 'md:gap-6')}>
          <div className='col-start-1 flex w-fit items-center rounded bg-custom-black px-2 py-1'>
            <h1 className='whitespace-nowrap text-xl font-semibold text-custom-green'>
              HTMA
            </h1>
          </div>
          <div className='col-start-12 mx-auto block'>
            <button
              onClick={toggleThemeHandler}
              className={clsx(
                'relative z-[60] mt-1 flex flex-col items-center text-custom-black',
                'lg:text-custom-green',
                'dark:text-custom-green dark:lg:text-custom-black'
              )}
            >
              <MdGraphicEq
                className={clsx(
                  `text-3xl duration-500`,
                  `${darkTheme ? 'rotate-180' : 'rotate-45'}`
                )}
              />
              <span
                className={clsx(
                  'absolute top-10 rotate-90 text-sm',
                  'md:text-base'
                )}
              >
                {darkTheme ? 'dark' : 'light'}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
