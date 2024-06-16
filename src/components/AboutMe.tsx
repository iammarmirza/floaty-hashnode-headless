'use client';
import Image from 'next/image';
import { SocialLinks } from './SocialLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { usePublicationQuery } from '../../generated/graphq';
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export const AboutMe = () => {
  const { data, error } = usePublicationQuery({
    host,
  });

  if (!data?.publication || error) return null;

  const { publication } = data;
  const isAvailableLink =
    publication.links?.linkedin || publication.links?.twitter;
  return (
    <div className='flex w-full flex-col items-center gap-7 rounded-3xl bg-white p-6 shadow-md sm:flex-row dark:border dark:border-slate-800 dark:bg-slate-900'>
      {publication.author.profilePicture && (
        <div className='flex aspect-square w-full overflow-hidden rounded-xl sm:max-w-52'>
          <Image
            src={publication.author.profilePicture}
            alt='profile pic'
            width={1000}
            height={1000}
            className='flex-1'
          />
        </div>
      )}

      <div className='flex max-w-full flex-1 flex-col justify-between'>
        <div className='mb-4 flex w-full flex-col items-center justify-between gap-2 sm:flex-row lg:gap-0'>
          {isAvailableLink && (
            <a
              href={isAvailableLink}
              target='_blank'
              className='hidden rounded-2xl bg-green-200 px-3 py-1 text-sm text-green-700 md:block'
            >
              &#8226; Available for work
            </a>
          )}
          {isAvailableLink && (
            <a
              href={isAvailableLink}
              target='_blank'
              className='block rounded-2xl bg-green-200 px-3 py-1 text-sm text-green-700 md:hidden'
            >
              &#8226; Available
            </a>
          )}
          <SocialLinks />
        </div>
        <div className='mb-4 flex flex-col gap-2'>
          <p className='w-full text-2xl font-semibold text-slate-950 sm:text-3xl dark:text-zinc-100'>{`Hi There! I am ${publication.author.name}!`}</p>
          {publication.author.bio && (
            <div
              className='text-justify text-slate-500 lg:text-left dark:text-zinc-300'
              dangerouslySetInnerHTML={{
                __html: publication.author.bio.html || '',
              }}
            />
          )}
        </div>
        {publication.author.location && (
          <p className='flex w-full items-center gap-2 text-sm text-slate-500 dark:text-zinc-300'>
            <FontAwesomeIcon icon={faLocationDot} />
            {publication.author.location}
          </p>
        )}
      </div>
    </div>
  );
};
