'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export default function SidebarLink() {
  const pathname = usePathname();

  return (
    <>
      {sidebarList.map((side) => {
        return (
          <li
            key={side.title}
            className={clsx(
              activeLink(pathname, side.link),
              'rotate-90 rounded px-1 text-base',
              'md:text-base',
              '2xl:text-lg'
            )}
          >
            <Link href={side.link}>{side.title}</Link>
          </li>
        );
      })}
    </>
  );
}
