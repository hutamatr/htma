'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useEffect } from 'react';

import { Chubbs1SVG, Chubbs2SVG } from '@components/ui/svg/ChubbsSVG';
import LampSVG from '@components/ui/svg/LampSVG';

import useBaffle from '@hooks/useBaffle';

const socials = [
  {
    id: '01',
    title: 'Github',
    href: 'https://github.com/hutamatr',
  },
  {
    id: '02',
    title: 'Twitter',
    href: 'https://twitter.com/huutamatr',
  },
];

export default function Hero() {
  const { newBaffle } = useBaffle('.nameBaffle');

  useEffect(() => {
    const timer = setTimeout(() => {
      newBaffle();
    }, 500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className={clsx(
        'sticky top-0 z-[1080] col-start-1 col-end-3 flex h-screen flex-col items-center',
        'lg:col-start-2 lg:col-end-4'
      )}
    >
      <div
        className={clsx(
          'mb-20 mt-44 flex h-full flex-col-reverse justify-between',
          'md:mb-36 md:mt-52',
          'lg:mb-0 lg:mt-20 lg:flex-col lg:justify-center lg:gap-y-4'
        )}
      >
        <div className={clsx('w-full -rotate-90', 'lg:rotate-0')}>
          <h1
            className={clsx(
              'text-xs font-normal text-custom-black',
              'md:text-base',
              'lg:text-lg',
              'dark:text-custom-green'
            )}
          >
            hello, I'm
          </h1>

          <h1
            className={clsx(
              'nameBaffle relative z-[1200] whitespace-nowrap text-lg font-bold text-custom-black',
              'md:text-4xl',
              'lg:whitespace-normal lg:text-6xl',
              'dark:text-custom-green'
            )}
          >
            hutama trirahmanto
          </h1>
          <h3
            className={clsx(
              'w-fit whitespace-nowrap rounded bg-custom-black px-1 text-base font-light text-custom-green',
              'md:text-lg',
              'lg:whitespace-normal lg:bg-transparent lg:text-2xl lg:font-thin lg:text-custom-black',
              'dark:text-custom-white-2'
            )}
          >
            --frontend developer
          </h3>
        </div>
        <section
          className={clsx(
            'relative hidden',
            'lg:mb-4 lg:flex lg:w-full lg:items-center lg:justify-evenly'
          )}
        >
          <Chubbs2SVG
            className={clsx('w-20 text-custom-black', 'dark:text-custom-green')}
            fill='currentColor'
          />
          <LampSVG
            className={clsx(
              'absolute -top-6 w-10 text-transparent',
              'dark:text-custom-green'
            )}
            fill='currentColor'
          />
          <Chubbs1SVG
            className={clsx('w-20 text-custom-black', 'dark:text-custom-green')}
            fill='currentColor'
          />
        </section>
        <ul
          className={clsx(
            'flex w-full -rotate-90 items-center justify-evenly',
            'lg:rotate-0 lg:py-8'
          )}
        >
          {socials.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className={clsx(
                  'rounded-3xl p-2 text-sm text-custom-black duration-300',
                  'md:text-lg',
                  'lg:p-[clamp(0.875rem,_0.6544rem_+_0.2941vw,_1.125rem)_clamp(1.5rem,_1.0588rem_+_0.5882vw,_2rem)]',
                  'hover:bg-custom-green',
                  'dark:text-custom-green dark:hover:text-custom-black'
                )}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
