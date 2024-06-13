import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faClockFour } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface PostProps {
  postInfo:
    | {
        __typename?: 'Post' | undefined;
        id: string;
        slug: string;
        title: string;
        views: number;
        publishedAt: any;
        coverImage?:
          | {
              __typename?: 'PostCoverImage' | undefined;
              url: string;
            }
          | null
          | undefined;
      }
    | undefined;
}

export const Post = (props: PostProps) => {
  const { postInfo } = props;
  const formatDate = (dateString: string) => {
    const date = new Date(dateString).toDateString();
    return date;
  };

  if (!postInfo) return null;

  return (
    <Link
      href={`/blog/${postInfo.slug}`}
      className='flex w-full flex-col items-center gap-4 rounded-xl border border-zinc-100 px-2 py-2 hover:border-zinc-200 sm:flex-row dark:border-slate-800 dark:hover:border-slate-700'
    >
      {postInfo.coverImage?.url && (
        <div className='flex aspect-video w-full overflow-hidden rounded-lg sm:max-w-52'>
          <Image
            src={postInfo.coverImage.url}
            alt='Post Image'
            width={200}
            height={200}
            className='flex-1'
          />
        </div>
      )}
      <div className='flex w-full flex-col px-3 text-slate-950 dark:text-zinc-300'>
        <h3 className='mb-5 line-clamp-3 text-xl font-semibold md:text-2xl dark:text-zinc-100'>
          {postInfo?.title}
        </h3>
        <div className='mb-3 flex w-full flex-row justify-between text-xs'>
          <p className='flex flex-row items-center gap-2'>
            <FontAwesomeIcon icon={faClockFour} />
            {formatDate(postInfo?.publishedAt)}
          </p>
          <p className='flex flex-row items-center gap-2'>
            <FontAwesomeIcon icon={faChartSimple} />
            {postInfo?.views}
          </p>
        </div>
      </div>
    </Link>
  );
};
