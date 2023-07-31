import clsx from 'clsx';
import { MdArrowForward } from 'react-icons/md';

import Card from '@components/ui/Card';
import NextImage from '@components/ui/NextImage';

import { portfolioData } from '@utils/dummy';

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
      <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {portfolioData.map(({ id, image, title }) => {
          return (
            <li key={id}>
              <Card
                className={clsx(
                  'group/card cursor-pointer duration-500',
                  'hover:bg-custom-black'
                )}
              >
                <NextImage
                  src={image}
                  alt={title}
                  width={600}
                  height={600}
                  className='w-full'
                />
                <div className='w-full'>
                  <h2 className='text-lg text-custom-black group-hover/card:text-custom-green'>
                    {title}
                  </h2>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
