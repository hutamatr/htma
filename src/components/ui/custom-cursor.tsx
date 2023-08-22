'use client';

import { motion, useSpring } from 'framer-motion';

import useCursorPosition from '@hooks/useCursorPosition';

export default function CustomCursor() {
  const { cursorX, cursorY } = useCursorPosition();

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  return (
    <motion.div
      className='cursor'
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // transition={{ type: 'tween', ease: 'backOut', duration: 0.3 }}
    ></motion.div>
  );
}
