'use client';

import clsx from 'clsx';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className='col-start-5 col-end-10 flex h-screen w-full flex-col items-center justify-center gap-y-6 lg:col-start-7'>
      <h2
        className={clsx(
          'text-center text-lg text-red-500',
          'md:text-2xl'
          // 'dark:text-custom-green'
        )}
      >
        Something went wrong!
      </h2>
      <button
        className={clsx(
          'mx-auto w-fit rounded bg-custom-black px-8 py-2 text-custom-green shadow-custom-shadow',
          'disabled:cursor-not-allowed disabled:bg-custom-black/50 disabled:text-custom-green/50',
          'dark:bg-custom-green dark:text-custom-black'
        )}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
