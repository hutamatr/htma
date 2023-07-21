import clsx from 'clsx';

import Hero from '@components/hero/Hero';
import Navigation from '@components/navigation/Navigation';
import Sidebar from '@components/sidebar/Sidebar';

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Navigation />
      <main>
        <section className='layout flex justify-center'>
          <div className={clsx('grid-12 gap-2', 'md:gap-6')}>
            <Hero />
            {children}
            <Sidebar />
          </div>
        </section>
      </main>
    </>
  );
}
