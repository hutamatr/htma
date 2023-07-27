'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ScrollTop from '@components/ui/ScrollTop';

const sidebarList = [
  {
    title: 'home',
    link: '/',
  },
  {
    title: 'contact',
    link: '/contact',
  },
];

const activeLink = (url: string, pathname: string) => {
  return pathname === url
    ? clsx(
        'bg-custom-black text-custom-green',
        'lg:bg-custom-green lg:text-custom-black',
        'dark:bg-custom-green dark:text-custom-black dark:lg:bg-custom-black dark:lg:text-custom-green'
      )
    : clsx(
        'menu-link bg-none text-custom-black',
        'lg:text-custom-green',
        'dark:text-custom-green dark:lg:text-custom-black'
      );
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className='sticky top-0 z-[1080] col-start-12 col-end-12 h-screen'>
      <div className='flex h-full flex-col items-center justify-between'>
        <ul
          className={clsx(
            'flex h-full flex-col items-center justify-center gap-y-12',
            'lg:relative lg:top-4 lg:gap-y-16 lg:rounded-t-full lg:bg-custom-black',
            'dark:lg:bg-custom-green'
          )}
        >
          {sidebarList.map((side) => {
            return (
              <li
                key={side.title}
                className={clsx(
                  activeLink(pathname, side.link),
                  'rotate-90 rounded px-1 text-sm',
                  'md:text-base'
                )}
              >
                <Link href={side.link}>{side.title}</Link>
              </li>
            );
          })}
        </ul>
        <ScrollTop />
      </div>
    </aside>
  );
}
