'use client';

import { Metadata } from 'next';
import { useEffect } from 'react';

import Footer from '@components/footer/footer-section';
import PageWrapper from '@components/ui/page-wrapper';

import About from '@modules/home-page/about';
import Portfolio from '@modules/home-page/portfolio';
import Skills from '@modules/home-page/skills';

export const metadata: Metadata = {
  title: 'htma',
  description: 'hutamatr portfolio website',
};

export default function HomePage() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      // eslint-disable-next-line no-unused-vars
      const _locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.05,
          smoothWheel: true,
          smoothTouch: true,
        },
      });
    })();
  }, []);

  return (
    <PageWrapper>
      <div className='mb-8 flex flex-wrap pt-[clamp(5.875rem,_0.0294rem_+_7.7941vw,_12.5rem)]'>
        <div className='w-full'>
          <About />
          <Skills />
          <Portfolio />
          <Footer />
        </div>
      </div>
    </PageWrapper>
  );
}
