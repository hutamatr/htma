import clsx from 'clsx';

import Hero from '@components/hero/hero-section';
import Navigation from '@components/navigation/navigation';
import Sidebar from '@components/sidebar/sidebar';
import CustomCursor from '@components/ui/custom-cursor';

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
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
