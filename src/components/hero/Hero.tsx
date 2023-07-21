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
        'md:col-start-2 md:col-end-4'
      )}
    >
      <div
        className={clsx(
          'mb-20 mt-44 flex h-full flex-col-reverse justify-between',
          'md:mb-0 md:mt-20 md:flex-col md:justify-center md:gap-y-8'
        )}
      >
        <div className={clsx('w-full -rotate-90', 'md:rotate-0')}>
          <div className='flex flex-row'>
            <span className={clsx('text-xs text-custom-green', 'md:text-lg')}>
              /
            </span>
            <h1
              className={clsx('nameBaffle text-xs font-normal', 'md:text-lg')}
            >
              Hello, I'm
            </h1>
          </div>
          <h1
            className={clsx(
              'nameBaffle whitespace-nowrap text-lg font-bold',
              'md:whitespace-normal md:text-5xl'
            )}
          >
            Hutama Trirahmanto.
          </h1>
          <p
            className={clsx(
              'w-fit whitespace-nowrap rounded-sm bg-custom-black px-1 text-base font-light text-custom-green',
              'md:whitespace-normal md:bg-transparent md:text-xl md:font-thin md:text-custom-black'
            )}
          >
            I am a frontend developer
          </p>
        </div>
        <section className={clsx('relative hidden', 'md:block')}>
          <div className='relative w-fit rounded-sm border-2 border-b-8 border-custom-black'>
            <Image
              src={patternOne.src}
              alt='pattern-1'
              width={150}
              height={150}
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
              'absolute left-24 top-20 -z-10 hidden h-fit max-w-fit rounded-sm border-2 border-t-8 border-custom-black',
              'md:block'
            )}
          >
            <Image src={patternTwo} alt='pattern-2' width={100} height={100} />
          </div>
          <div
            className={clsx(
              'absolute right-[4.5rem] top-12 -z-20 hidden h-fit max-w-fit rounded-sm border-2 border-r-8 border-custom-black',
              'md:block'
            )}
          >
            <Image src={patternThree} alt='pattern-3' width={75} height={75} />
          </div>
        </section>
        <ul
          className={clsx(
            'flex -rotate-90 justify-center',
            'md:rotate-0 md:py-8'
          )}
        >
          {socials.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={clsx(
                  'bg-transparent px-3 py-2 text-xs text-custom-black transition-all duration-300',
                  'md:p-[clamp(0.875rem,_0.6544rem_+_0.2941vw,_1.125rem)_clamp(1.5rem,_1.0588rem_+_0.5882vw,_2rem)] md:pl-8 md:text-base',
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
