'use client';

import clsx from 'clsx';
import { MdArrowForward } from 'react-icons/md';

import Card from '@components/ui/card-base';
import NextImage from '@components/ui/next-image';

import { useStore } from '@store/useStore';

import { portfolioData } from '@utils/portfolio-data';

export default function Portfolio() {
  const { addPortfolio, showModalHandler } = useStore((state) => state);

  const portfolioHandler = (portfolio: IPortfolio) => {
    addPortfolio(portfolio);
    showModalHandler();
  };

  return (
    <>
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
        <ul className='mx-4 grid grid-cols-1 gap-[0.65rem] md:grid-cols-12 md:grid-rows-[7]'>
          {portfolioData.map(({ id, image, title, url }, index) => {
            return (
              <li
                key={id}
                className={clsx(
                  index === 0 &&
                    'md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-5',
                  index === 2 &&
                    'md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-3',
                  index === 3 &&
                    'md:col-start-9 md:col-end-13 md:row-start-3 md:row-end-5',
                  index === 4 &&
                    'md:col-start-1 md:col-end-5 md:row-start-5 md:row-end-7',
                  index === 1 &&
                    'md:col-start-5 md:col-end-13 md:row-start-5 md:row-end-7',
                  index === 5 &&
                    'md:col-start-1 md:col-end-5 md:row-start-6 md:row-end-7'
                )}
              >
                <button
                  onClick={portfolioHandler.bind(null, {
                    id,
                    image,
                    title,
                    url,
                  })}
                >
                  <Card
                    className={clsx(
                      'group/card relative w-full cursor-pointer overflow-hidden shadow-custom-shadow duration-500',
                      'hover:-translate-x-[0.2rem] hover:-translate-y-[0.2rem] hover:border hover:border-custom-black hover:shadow-[0.25rem_0.25rem_#24282C]',
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
                          'group-hover/card:items-center group-hover/card:text-lg group-hover/card:text-custom-black'
                        )}
                      >
                        {title}
                      </h2>
                    </div>
                  </Card>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
