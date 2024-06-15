import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowRightArrowLeft,
  faArrowRightRotate,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { PhotoIcon } from '@heroicons/react/24/outline';

interface SingleProjectProps {
  project: {
    name: string;
    url?: string;
    demoLink?: string;
    imageUrl?: string;
  };
}
export const SingleProject = (props: SingleProjectProps) => {
  const { project } = props;
  return (
    <div className='w-full items-center rounded-2xl border border-zinc-100 px-4 py-4 hover:border-zinc-200 sm:max-w-72 md:max-w-80 lg:max-w-96 dark:border-slate-800 dark:hover:border-slate-700'>
      <div className='flex w-full flex-col gap-3 text-slate-950 dark:text-zinc-300'>
        {project.imageUrl ? (
          <div className='flex aspect-video w-full overflow-hidden rounded-xl'>
            <Image
              src={project.imageUrl}
              width={2000}
              height={2000}
              alt='Project Image'
              className='flex-1'
            />
          </div>
        ) : (<div className='flex aspect-video w-full rounded-xl bg-slate-300 dark:bg-slate-950 justify-center items-center'>
          <p className='text-slate-950 dark:text-zinc-300 font-semibold'><PhotoIcon className='h-12 w-12'/></p>
        </div>)}
        <p className='text-xl font-semibold dark:text-zinc-100'>
          {project.name}
        </p>
        <div className='flex w-full flex-row items-center gap-2 text-xs'>
          {
            project.url ? (<a
              href={`//${project.url}`}
              target='_blank'
              className='flex items-center gap-2 rounded-full px-2 py-1 hover:bg-slate-600 hover:text-white dark:hover:bg-slate-950 dark:hover:text-zinc-300'
            >
              <FontAwesomeIcon icon={faGithub} />
              Source Code
            </a>) : (
              <div
                className='flex cursor-pointer items-center gap-2 rounded-full px-2 py-1 hover:bg-slate-600 hover:text-white dark:hover:bg-slate-950 dark:hover:text-zinc-300'
              >
                <FontAwesomeIcon icon={faGithub} />
                Source Code
              </div>
            )
          }
          {project.demoLink ? (
            <a
              href={`//${project.demoLink}`}
              target='_blank'
              className='flex items-center gap-2 rounded-full px-2 py-1 hover:bg-slate-600 hover:text-white dark:hover:bg-slate-950 dark:hover:text-zinc-300'
            >
              Live Demo
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          ) : (
            <div
              className='flex cursor-pointer items-center gap-2 rounded-full px-2 py-1 hover:bg-slate-600 hover:text-white dark:hover:bg-slate-950 dark:hover:text-zinc-300'
            >
              Live Demo
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
