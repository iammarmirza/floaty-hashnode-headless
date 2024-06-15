'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SOCIAL_LINKS } from '@/utils/consts';
import { PublicationLinks, usePublicationQuery } from '../../generated/graphq';
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export const SocialLinks = () => {
  const { data } = usePublicationQuery({
    host,
  });

  if (!data?.publication?.links) return null;
  const links = Object.entries(data.publication.links).filter(
    ([key, value]) => value
  ) as Array<[keyof PublicationLinks, string]>;

  return (
    <div className='flex flex-wrap gap-3 md:gap-4'>
      {links.map(([socialName, socialLink]) => (
        <a
          href={socialLink as string}
          target='_blank'
          className='flex rounded-full p-2 text-slate-950 hover:bg-slate-600 hover:text-white hover:shadow-sm dark:text-zinc-300 dark:hover:bg-slate-950 dark:hover:text-zinc-300'
          key={socialName}
        >
          <FontAwesomeIcon
            icon={SOCIAL_LINKS[socialName]!}
            className='h-5 w-5'
          />
        </a>
      ))}
    </div>
  );
};
