'use client';

import clsx from 'clsx';

import Hero from '@components/hero/hero-section';
import Navigation from '@components/navigation/navigation-section';
import Sidebar from '@components/sidebar/sidebar-section';
import CustomCursor from '@components/ui/custom-cursor';
import Modal from '@components/ui/modal';

import { useStore } from '@store/useStore';

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  const { portfolioData } = useStore((state) => state);

  return (
    <>
      <div
        className={clsx(
          'mask-top visible fixed top-0 z-[1030] h-[8%] w-full bg-custom-white-2',
          'dark:bg-custom-black'
        )}
      ></div>
      <Navigation />
      <main>
        <CustomCursor />
        <section className='layout flex justify-center'>
          <div className={clsx('grid-12 gap-2', 'md:gap-6')}>
            <Hero />
            {children}
            <Sidebar />
            <Modal {...(portfolioData as IPortfolio)} />
          </div>
        </section>
      </main>
      <div
        className={clsx(
          'mask-bottom visible fixed bottom-0 z-[1050] h-[8%] w-full bg-custom-white-2',
          'dark:bg-custom-black'
        )}
      ></div>
    </>
  );
}
