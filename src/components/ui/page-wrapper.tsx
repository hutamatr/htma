'use client';

import clsx from 'clsx';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';

interface IPageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: IPageWrapperProps) {
  const [pageHeight, setPageHeight] = useState(0);
  const scrollRef = useRef<HTMLElement | null>(null);

  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      setPageHeight(entry.contentRect.height - entry.contentRect.bottom);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    scrollRef && resizeObserver.observe(scrollRef.current as HTMLElement);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 10, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <motion.section
        ref={scrollRef}
        style={{ y: spring }}
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
      {/* <div style={{ height: pageHeight }} /> */}
    </>
  );
}
