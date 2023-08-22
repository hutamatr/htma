'use client';

import { useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export default function useCursorPosition() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateMousePosition = (e: any) => {
    cursorX.set(e.clientX - 16);
    cursorY.set(e.clientY - 16);
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { cursorX, cursorY };
}
