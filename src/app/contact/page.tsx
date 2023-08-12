import clsx from 'clsx';
import { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

import Footer from '@components/footer/footer';

import Contact from '@modules/contact-page/contact';

export const metadata: Metadata = {
  title: 'contact',
  description: 'hutamatr portfolio website - contact',
};

export default function ContactPage() {
  return (
    <>
      <Toaster position='top-center' />
      <section
        className={clsx(
          'z-[1000] col-start-3 col-end-12 h-full overflow-y-visible px-4',
          'md:px-0',
          'lg:col-start-5'
        )}
      >
        <div className='mb-8 flex flex-wrap pt-[clamp(5.875rem,_0.0294rem_+_7.7941vw,_12.5rem)]'>
          <div className='w-full'>
            <Contact />
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
