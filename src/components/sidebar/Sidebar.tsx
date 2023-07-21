import Link from 'next/link';

const sidebarList = [
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Portfolio',
    link: '/about',
  },
  {
    title: 'Contact',
    link: '/about',
  },
];

export default function Sidebar() {
  return (
    <aside className='sticky top-0 z-[1080] col-start-12 col-end-12 h-screen'>
      <div className='flex h-full flex-col items-center justify-center'>
        <ul className='relative flex flex-col gap-y-12'>
          {sidebarList.map((side) => (
            <li key={side.title} className='rotate-90'>
              <Link href={side.link} className='text-sm md:text-base'>
                {side.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
