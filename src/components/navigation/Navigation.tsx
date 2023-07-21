'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { MdGraphicEq } from 'react-icons/md';

export default function Navigation() {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const menuShowHandler = () => setIsMenuShow((prevState) => !prevState);

  return (
    <header className='nav-height fixed top-0 z-[1090] flex w-full flex-wrap items-center'>
      <nav className='layout'>
        <div className={clsx('grid-12 gap-2', 'md:gap-6')}>
          <div className='col-start-1'>
            <h1 className='w-fit rounded-sm bg-custom-black px-2 py-1 text-xl font-semibold text-custom-green'>
              HTMA.
            </h1>
          </div>
          <div className='col-start-12 col-end-12 mx-auto block'>
            <button onClick={menuShowHandler} className='z-[60] mt-1'>
              <MdGraphicEq
                className={clsx(
                  `text-3xl duration-500`,
                  `${isMenuShow ? 'rotate-180' : 'rotate-45'}`
                )}
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
