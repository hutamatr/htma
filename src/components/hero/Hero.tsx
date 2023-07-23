'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import useBaffle from '@hooks/useBaffle';

import patternOne from '@public/assets/images/pattern-1.webp';
import patternTwo from '@public/assets/images/pattern-2.webp';
import patternThree from '@public/assets/images/pattern-3.webp';

const socials = [
  {
    id: '01',
    title: 'Github',
    href: '',
  },
  {
    id: '01',
    title: 'Twitter',
    href: '',
  },
  {
    id: '01',
    title: 'LinkedIn',
    href: '',
  },
];

export default function Hero() {
  const { newBaffle } = useBaffle('.nameBaffle');

  useEffect(() => {
    newBaffle();
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
          'lg:mb-0 lg:mt-20 lg:flex-col lg:justify-center lg:gap-y-8'
        )}
      >
        <div className={clsx('w-full -rotate-90', 'lg:rotate-0')}>
          <div className='flex flex-row'>
            <span
              className={clsx(
                'text-xs text-custom-green',
                'md:text-base',
                'lg:text-lg'
              )}
            >
              /
            </span>
            <h1
              className={clsx(
                'nameBaffle text-xs font-normal',
                'md:text-base',
                'lg:text-lg'
              )}
            >
              Hello, I'm
            </h1>
          </div>
          <h1
            className={clsx(
              'nameBaffle whitespace-nowrap text-lg font-bold',
              'md:text-4xl',
              'lg:whitespace-normal lg:text-5xl'
            )}
          >
            Hutama Trirahmanto.
          </h1>
          <p
            className={clsx(
              'w-fit whitespace-nowrap rounded-sm bg-custom-black px-1 text-base font-light text-custom-green',
              'md:text-lg',
              'lg:whitespace-normal lg:bg-transparent lg:text-xl lg:font-thin lg:text-custom-black'
            )}
          >
            I am a frontend developer
          </p>
        </div>
        <section className={clsx('relative hidden', 'lg:block')}>
          <div className='relative w-fit rotate-45 rounded-sm border-2 border-custom-black'>
            <Image
              src={patternOne.src}
              alt='pattern-1'
              width={100}
              height={100}
            />
            {/* <ImageArrow
              positionOne=''
              positionTwo='top-0'
              rotate='rotate-[-135deg] hover:rotate-[45deg]'
            />
            <ImageArrow
              positionOne='left-[1.5rem]'
              positionTwo='top-0'
              rotate='rotate-[-135deg] hover:rotate-[45deg]'
            />
            <ImageArrow
              positionOne='left-12'
              positionTwo='top-0'
              rotate='rotate-[-135deg] hover:rotate-[45deg]'
            />
            <ImageArrow
              positionOne='left-[4.5rem]'
              positionTwo='top-0'
              rotate='rotate-[-135deg] hover:rotate-[45deg]'
            />
            <ImageArrow
              positionOne='left-[6rem]'
              positionTwo='top-0'
              rotate='rotate-[-135deg] hover:rotate-[45deg]'
            />
            <ImageArrow
              positionOne='left-[7.5rem]'
              positionTwo='top-0'
              rotate='rotate-[-135deg] hover:rotate-[45deg]'
            /> */}
          </div>
          <div
            className={clsx(
              'absolute left-20 top-4 -z-10 hidden h-fit max-w-fit rotate-45 rounded-sm border-2 border-custom-black',
              'lg:block'
            )}
          >
            <Image src={patternTwo} alt='pattern-2' width={75} height={75} />
          </div>
          <div
            className={clsx(
              'absolute left-36 top-8 -z-20 hidden h-fit max-w-fit rotate-45 rounded-sm border-2 border-custom-black',
              'lg:block'
            )}
          >
            <Image src={patternThree} alt='pattern-3' width={50} height={50} />
          </div>
        </section>
        <ul
          className={clsx(
            'flex -rotate-90 justify-center',
            'lg:rotate-0 lg:py-8'
          )}
        >
          {socials.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={clsx(
                  'bg-transparent px-3 py-2 text-xs text-custom-black transition-all duration-300',
                  'md:text-lg',
                  'lg:p-[clamp(0.875rem,_0.6544rem_+_0.2941vw,_1.125rem)_clamp(1.5rem,_1.0588rem_+_0.5882vw,_2rem)] lg:pl-8',
                  'hover:rounded-3xl hover:bg-custom-green'
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
