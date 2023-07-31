import clsx from 'clsx';
import { MdArrowForward } from 'react-icons/md';

import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section
      className={clsx(
        'group flex cursor-default flex-col gap-y-6 border-y border-y-custom-black/50 py-6',
        'dark:border-y-custom-white-2/50'
      )}
    >
      <div
        className={clsx(
          'relative flex h-full w-fit items-center gap-x-1 bg-transparent pr-2 pt-1 duration-300',
          'group-hover:rounded group-hover:bg-custom-black'
        )}
      >
        <MdArrowForward
          className={clsx(
            'relative -top-1 text-3xl text-custom-green duration-500',
            'group-hover:-rotate-45'
          )}
        />
        <h1
          className={clsx(
            'text-3xl text-custom-black',
            'group-hover:text-custom-green',
            'lg:text-4xl',
            'dark:text-custom-green'
          )}
        >
          contact me
        </h1>
      </div>
      <p className={clsx('text-center text-sm', 'md:text-base')}>
        Need to get in touch? You're just a message away from reaching me.
      </p>
      <ContactForm />
    </section>
  );
}
