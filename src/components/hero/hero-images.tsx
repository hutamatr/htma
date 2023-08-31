import clsx from 'clsx';
import { motion } from 'framer-motion';

import LoadingSkeleton from '@components/ui/loading-skeleton';
import Chubbs1SVG from '@components/ui/svg/Chubbs1SVG';
import Chubbs2SVG from '@components/ui/svg/Chubbs2SVG';

import { useStore } from '@store/useStore';

export default function HeroImages() {
  const isClient = useStore((state) => state.isClient);
  return (
    <section
      className={clsx(
        'relative hidden',
        'lg:mb-4 lg:flex lg:w-full lg:items-center lg:justify-evenly'
      )}
    >
      {isClient ? (
        <>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.2, duration: 0.7 },
            }}
            exit={{ opacity: 0, x: -24 }}
          >
            <Chubbs2SVG
              className={clsx(
                'w-20 text-custom-black',
                'dark:text-custom-green',
                '2xl:w-24'
              )}
              fill='currentColor'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.7 },
            }}
            exit={{ opacity: 0, x: 24 }}
          >
            <Chubbs1SVG
              className={clsx(
                'w-20 text-custom-black',
                'dark:text-custom-green',
                '2xl:w-24'
              )}
              fill='currentColor'
            />
          </motion.div>
        </>
      ) : (
        <LoadingSkeleton className={clsx('h-36 w-full')} />
      )}
    </section>
  );
}
