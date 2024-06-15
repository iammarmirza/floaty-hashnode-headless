'use client';
import { SingleBlog } from './SingleBlog';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { usePublicationQuery } from '../../generated/graphq';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export const Blogs = () => {
  const { data } = usePublicationQuery({
    host,
  });

  if (!data || !data.publication) return null;
  const posts = data.publication.posts.edges

  return (
    <div className='flex w-full flex-col items-start rounded-3xl bg-white p-6 text-slate-950 shadow-lg dark:border dark:border-slate-800 dark:bg-slate-900 dark:text-zinc-300'>
      <div className='mb-6 flex w-full flex-row items-center justify-between'>
        <h2 className='text-2xl font-semibold dark:text-zinc-100'>Blogs</h2>
        <Link
          href={'/blog'}
          className='hidden flex-row items-center gap-2 rounded-full px-3 py-1 text-sm hover:bg-slate-600 hover:text-white md:flex dark:hover:bg-slate-950 dark:hover:text-zinc-300'
        >
          All Blogs <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className='flex w-full flex-col gap-5 sm:flex-row sm:justify-center md:gap-8'>
        {posts.length > 0 ? posts.map((edge) => (
          <SingleBlog blogInfo={edge.node} key={edge.node.id} />
        )) : (
          <p className='text-lg flex gap-3 items-center font-semibold'><ExclamationTriangleIcon className='h-8 w-8' />No posts found</p>
        )}
      </div>
      <Link
        href={'/blog'}
        className='mt-6 flex flex-row items-center gap-2 self-center rounded-full px-4 py-2 text-sm shadow-sm hover:bg-slate-600 hover:text-white sm:text-base md:hidden dark:hover:bg-slate-950 dark:hover:text-zinc-300'
      >
        All Blogs <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
};
