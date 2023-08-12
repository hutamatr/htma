'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { MdGraphicEq } from 'react-icons/md';
import { shallow } from 'zustand/shallow';

import LoadingSpin from '@components/ui/loading-spin';

import { useStore } from '@store/useStore';

export default function Navigation() {
  const { theme, setTheme } = useTheme();
  const { isClient, clientHandler } = useStore(
    (state) => ({
      isClient: state.isClient,
      clientHandler: state.clientHandler,
    }),
    shallow
  );

  useEffect(() => {
    clientHandler();
  }, [clientHandler]);

  const toggleThemeHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!isClient) {
    return (
      <header className='nav-height fixed top-0 z-[1090] flex w-full items-center'>
        <nav className='layout flex justify-center'>
          <div className={clsx('grid-12 gap-2', 'md:gap-6')}>
            <div
              className={clsx(
                'col-start-1 flex h-9 w-[4.5rem] animate-pulse items-center rounded bg-custom-black px-2 py-1',
                'dark:bg-custom-green'
              )}
            ></div>
            <div className='col-start-12 mx-auto block'>
              <div
                className={clsx(
                  'relative z-[60] mt-1 flex animate-pulse flex-col items-center text-custom-black',
                  'lg:text-custom-green',
                  'dark:text-custom-green dark:lg:text-custom-black'
                )}
              >
                <LoadingSpin className='h-8 w-8' />
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className='nav-height fixed top-0 z-[1090] flex w-full items-center'>
      <nav className='layout flex justify-center'>
        <div className={clsx('grid-12 gap-2', 'md:gap-6')}>
          <div className='col-start-1 flex w-fit items-center rounded bg-custom-black px-2 py-1'>
            <Link
              href='/'
              className='whitespace-nowrap text-xl font-semibold text-custom-green'
            >
              HTMA
            </Link>
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
                  `${theme === 'dark' ? 'rotate-180' : 'rotate-45'}`
                )}
              />
              <span
                className={clsx(
                  'absolute top-10 rotate-90 text-sm',
                  'md:text-base'
                )}
              >
                {theme === 'light' ? 'light' : 'dark'}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
