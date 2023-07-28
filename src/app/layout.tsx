import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Layout from '@components/layout/Layout';
import { ThemeProvider } from '@components/provider/theme-provider';

import '@styles/globals.css';

const kataGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/KataGrotesk-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/KataGrotesk-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/KataGrotesk-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/KataGrotesk-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: '// htma',
  description: 'hutama trirahmanto portfolio website',
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={clsx(
          kataGrotesk.className,
          'bg-custom-white-2',
          'dark:bg-custom-black'
        )}
      >
        <ThemeProvider attribute='class' storageKey='htma-theme'>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
