import { DocumentTextIcon, HomeIcon, PaintBrushIcon, UserIcon } from "@heroicons/react/24/outline"

export const NAVLINKS = [
    {
        name: 'Home',
        href: '/',
        icon: <HomeIcon className='h-6 w-6' />
    },
    {
        name: 'About',
        href: '/about',
        icon: <UserIcon className="h-6 w-6" />
    },
    {
        name: 'Blog',
        href: '/blog',
        icon: <DocumentTextIcon className='h-6 w-6' />
    },
    {
        name: 'Project',
        href: '/project',
        icon: <PaintBrushIcon className='h-6 w-6' />
    }
    
]