'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;

    document.addEventListener('mousemove', (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        'style',
        'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px;'
      );
    });

    let timer: unknown = null;
    document.addEventListener('click', () => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add('expand');

      timer = setTimeout(() => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.remove('expand');
      }, 500);
    });

    return () => {
      document.removeEventListener('mousemove', () => {});
      document.removeEventListener('click', () => {
        clearTimeout(timer as number);
      });
    };
  }, []);

  return <div className='cursor' ref={cursorRef}></div>;
}
