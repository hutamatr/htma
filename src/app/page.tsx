import clsx from 'clsx';
import { Metadata } from 'next';

import Footer from '@components/footer/footer-section';

import About from '@modules/home-page/about';
import Portfolio from '@modules/home-page/portfolio';
import Skills from '@modules/home-page/skills';

export const metadata: Metadata = {
  title: 'htma',
  description: 'hutamatr portfolio website',
};

export default function HomePage() {
  return (
    <section
      className={clsx(
        'z-[1000] col-start-3 col-end-12 h-full overflow-y-visible px-4',
        'md:px-0',
        'lg:col-start-5'
      )}
    >
      <div className='mb-8 flex flex-wrap pt-[clamp(5.875rem,_0.0294rem_+_7.7941vw,_12.5rem)]'>
        <div className='w-full'>
          <About />
          <Skills />
          <Portfolio />
          <Footer />
        </div>
      </div>
    </section>
  );
}
