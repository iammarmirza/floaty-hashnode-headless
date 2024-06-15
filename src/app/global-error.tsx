'use client';
import { Container } from '@/components/Container';
import Link from 'next/link';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className='bg-slate-300 dark:bg-slate-950'>
        <Container>
          <div className='mb-20 flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-3xl bg-white px-4 py-8 text-slate-950 shadow-md md:px-12 dark:border dark:border-slate-800 dark:bg-slate-900 dark:text-zinc-300'>
            <ExclamationTriangleIcon className='aspect-square h-16' />
            <h2 className='text-2xl font-bold lg:text-4xl'>
              Some Error Occurred
            </h2>
            <Link href='/'>Take me back to Home</Link>
          </div>
        </Container>
      </body>
    </html>
  );
}
