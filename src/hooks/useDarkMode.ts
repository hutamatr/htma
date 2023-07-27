'use client';

import { useEffect, useState } from 'react';

import { getLocalStorage } from '@components/utils/getLocalStorage';

const useDarkMode = () => {
  const [theme, setTheme] = useState(() => getLocalStorage('htma-theme'));
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const docElement = document.documentElement;
    docElement.classList.remove(colorTheme);
    docElement.classList.add(theme as string);

    localStorage.setItem('htma-theme', theme as string);
  }, [theme, colorTheme]);

  return { colorTheme, setTheme, theme };
};

export default useDarkMode;
