'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { MdGraphicEq } from 'react-icons/md';

export default function Navigation() {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const menuShowHandler = () => setIsMenuShow((prevState) => !prevState);

  return (
    <header className='fixed top-0 w-full z-[1090] flex-wrap flex items-center nav-height'>
      <nav className='container-width'>
        <div className='grid-12'>
          <div className='col-start-1 col-end-1'>
            <h1
              className={clsx(
                'rounded-sm bg-custom-black',
                'text-xl font-semibold text-custom-green',
                'py-1 px-2'
              )}
            >
              HTMA.
            </h1>
          </div>
          <div className='col-start-12 col-end-12 block mx-auto'>
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
