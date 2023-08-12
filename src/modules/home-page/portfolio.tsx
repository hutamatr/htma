import clsx from 'clsx';
import Link from 'next/link';
import { MdArrowForward } from 'react-icons/md';

import Card from '@components/ui/card';
import NextImage from '@components/ui/next-image';

import { portfolioData } from '@utils/portfolio-data';

export default function Portfolio() {
  return (
    <section
      className={clsx(
        'group/portfolio flex cursor-default flex-col gap-y-6 border-b border-b-custom-black/50 py-6',
        'dark:border-b-custom-white-2/50'
      )}
    >
      <div
        className={clsx(
          'relative flex h-full w-fit items-center gap-x-1 bg-transparent pr-2 pt-1 duration-300',
          'group-hover/portfolio:rounded group-hover/portfolio:bg-custom-black'
        )}
      >
        <MdArrowForward
          className={clsx(
            'relative -top-1 text-3xl text-custom-green duration-500',
            'group-hover/portfolio:-rotate-45'
          )}
        />
        <h1
          className={clsx(
            'text-3xl text-custom-black',
            'group-hover/portfolio:text-custom-green',
            'lg:text-4xl',
            'dark:text-custom-green'
          )}
        >
          portfolio
        </h1>
      </div>
      <ul className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {portfolioData.map(({ id, image, title, url }) => {
          return (
            <li key={id}>
              <Link href={url} target='_blank' rel='noreferrer'>
                <Card
                  className={clsx(
                    'group/card relative w-full cursor-pointer overflow-hidden shadow-custom-shadow duration-500',
                    'hover:-translate-x-1 hover:-translate-y-1  hover:border hover:border-custom-black hover:shadow-[0.25rem_0.25rem_#24282C]',
                    'dark:hover:border-custom-black dark:hover:shadow-[0.25rem_0.25rem_#EAE9E2] dark:active:shadow-none',
                    'active:translate-x-0 active:translate-y-0 active:shadow-none'
                  )}
                >
                  <NextImage
                    src={image}
                    alt={title}
                    width={600}
                    height={600}
                    className={clsx(
                      'w-full duration-500',
                      'group-hover/card:scale-105'
                    )}
                  />
                  <div
                    className={clsx(
                      'absolute bottom-0 w-full bg-custom-black/70 px-2 py-1 duration-500',
                      'group-hover/card:h-12 group-hover/card:bg-custom-green/50'
                    )}
                  >
                    <h2
                      className={clsx(
                        'flex h-full text-base text-custom-green duration-500',
                        'group-hover/card:items-center group-hover/card:text-xl group-hover/card:text-custom-black'
                      )}
                    >
                      {title}
                    </h2>
                  </div>
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
