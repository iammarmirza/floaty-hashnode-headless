import Image from 'next/image';
import Link from 'next/link';

interface PostHeaderProps {
  title: string;
  name: string;
  profileImage?: string | null | undefined;
  subtitle?: string | null | undefined;
}

export const PostHeader = ({
  title,
  name,
  profileImage,
  subtitle,
}: PostHeaderProps) => {
  return (
    <div className='mx-4 flex w-full flex-col py-6 text-slate-950 dark:text-zinc-300'>
      <h1 className='mb-4 w-full text-center text-2xl font-bold md:text-4xl dark:text-zinc-100'>
        {title}
      </h1>
      <div className='flex w-full justify-between'>
        <Link href='/' className='flex items-center gap-2'>
          {profileImage && (
            <div className='flex h-8 w-8 overflow-hidden rounded-full'>
              <Image src={profileImage} width={200} height={200} alt={name} />
            </div>
          )}
          <span>{name}</span>
        </Link>
      </div>
    </div>
  );
};
