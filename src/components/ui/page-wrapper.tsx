'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

interface IPageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: IPageWrapperProps) {
  return (
    <motion.section
      className={clsx(
        'z-[1000] col-start-3 col-end-12 h-full overflow-hidden overflow-y-visible px-4 will-change-transform',
        'md:px-0',
        'lg:col-start-5'
      )}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, y: 24 }}
    >
      {children}
    </motion.section>
  );
}
