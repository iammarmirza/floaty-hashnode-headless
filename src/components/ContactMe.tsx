'use client';
import { usePublicationQuery } from '../../generated/graphq';
import { SocialLinks } from './SocialLinks';
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export const ContactMe = () => {
  const { data } = usePublicationQuery({
    host,
  });

  return (
    <footer className='mb-20 flex w-full flex-col items-center gap-5 rounded-3xl bg-white p-6 text-slate-950 shadow-lg md:p-8 dark:border dark:border-slate-800 dark:bg-slate-900 dark:text-zinc-300'>
      <h2 className='text-xl font-semibold lg:text-2xl'>
        Have a Project Idea?
      </h2>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-base lg:text-lg'>Let&apos;s connect</p>
        <SocialLinks />
      </div>
      <p className='text-sm text-slate-500 dark:text-zinc-300'>
        Template by{' '}
        <a href='//twitter.com/iammarmirza' target='_blank'>
          Ammar Mirza
        </a>
      </p>
      {data?.publication?.title && (
        <p className='flex items-center gap-1 text-sm text-slate-500 dark:text-zinc-300'>
          &copy; {data.publication.title} 2024
        </p>
      )}
    </footer>
  );
};
