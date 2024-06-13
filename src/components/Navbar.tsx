'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon as HomeIconOutline,
  NewspaperIcon as NewspaperIconOutline,
  CogIcon as CogIconOutline,
} from '@heroicons/react/24/outline';

import {
  HomeIcon as HomeIconSolid,
  NewspaperIcon as NewspaperIconSolid,
  CogIcon as CogIconSolid,
} from '@heroicons/react/24/solid';

const NAVLINKS = [
  {
    name: 'Home',
    href: '/',
    icon: <HomeIconOutline className='h-6 w-6' />,
    activeIcon: <HomeIconSolid className='h-6 w-6' />,
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: <NewspaperIconOutline className='h-6 w-6' />,
    activeIcon: <NewspaperIconSolid className='h-6 w-6' />,
  },
  {
    name: 'Project',
    href: '/project',
    icon: <CogIconOutline className='h-6 w-6' />,
    activeIcon: <CogIconSolid className='h-6 w-6' />,
  },
];

export const Navbar = () => {
  const path = usePathname();
  return (
    <div className='fixed bottom-5 z-20 flex w-full justify-center'>
      <nav className='flex flex-row gap-3 rounded-full border border-zinc-100 bg-slate-100 px-3 py-2 md:gap-5 dark:border-slate-800 dark:bg-slate-900'>
        {NAVLINKS.map((navlink) => (
          <Link
            href={navlink.href}
            key={navlink.name}
            className={`rounded-full p-3 shadow-sm dark:text-slate-400 dark:hover:bg-slate-50/10 ${path === navlink.href ? 'bg-slate-300 dark:bg-slate-50/10 dark:text-slate-50' : 'bg-white dark:bg-slate-950 dark:text-slate-400'}`}
          >
            {path === navlink.href ? navlink.activeIcon : navlink.icon}
          </Link>
        ))}
      </nav>
    </div>
  );
};
