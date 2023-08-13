import clsx from 'clsx';

import LoadingSpin from '@components/ui/loading-spin';

export default function Loading() {
  return (
    <div className='col-start-7 flex w-full items-center justify-center lg:col-start-8'>
      <LoadingSpin className={clsx('h-8 w-8', 'md:h-12 md:w-12')} />
    </div>
  );
}
