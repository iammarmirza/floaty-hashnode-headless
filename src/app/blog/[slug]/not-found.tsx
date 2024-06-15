import { Container } from '@/components/Container';
import Link from 'next/link';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
 
export default function NotFound() {
  return (
    <Container>
        <div className='text-slate-950 dark:text-zinc-300  mb-20 w-full rounded-3xl bg-white py-8 px-4 md:px-12 shadow-md dark:border dark:border-slate-800 dark:bg-slate-900 flex items-center flex-col gap-3 aspect-video justify-center'>
                <ExclamationTriangleIcon className='h-16 aspect-square'/>
                <h2 className='text-2xl lg:text-4xl font-bold'>404</h2>
                <Link href='/'>Take me back to Home</Link>
        </div>
    </Container>
  );
}