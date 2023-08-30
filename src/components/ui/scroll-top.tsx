import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { MdDoubleArrow } from 'react-icons/md';

import { useStore } from '@store/useStore';

const ScrollTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { isClient, clientHandler } = useStore((state) => state);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    clientHandler();
  }, [clientHandler]);

  const scrollTopHandler = () => {
    isClient && window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={clsx(
        `${
          isClient && scrollPosition > window.innerHeight / 4
            ? ''
            : 'translate-y-[999px]'
        }`,
        'fixed bottom-[5%] rounded bg-custom-black p-2 duration-700',
        'lg:bg-custom-green',
        'hover:-translate-y-1 hover:opacity-100',
        'dark:bg-custom-green dark:lg:bg-custom-black'
      )}
      onClick={scrollTopHandler}
      type='button'
    >
      <MdDoubleArrow
        className={clsx(
          '-rotate-90 text-2xl text-custom-green',
          'lg:text-custom-black',
          'dark:text-custom-black dark:lg:text-custom-green'
        )}
      />
    </button>
  );
};

export default ScrollTop;
