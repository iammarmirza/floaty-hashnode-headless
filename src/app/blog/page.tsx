'use client';
import { ContactMe } from '@/components/ContactMe';
import { Container } from '@/components/Container';
import {
  useInfinitePostsQuery,
  usePostsQuery,
} from '../../../generated/graphq';
import { Post } from '@/components/Post';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useCallback, useEffect, useRef } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export default function Blog() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error } =
    useInfinitePostsQuery(
      {
        host,
        pageSize: 10,
        page: 1,
      },
      {
        queryFn: ({ pageParam }) =>
          usePostsQuery.fetcher({
            host,
            pageSize: 10,
            page: pageParam as number,
          })(),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
          return lastPage.publication?.postsViaPage.pageInfo.nextPage ?? null;
        },
      }
    );

  if (!data || error) throw new Error();

  const posts =
    data.pages.flatMap((page) => page.publication?.postsViaPage.nodes) || [];
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? posts.length + 1 : posts.length,
    getScrollElement: useCallback(() => parentRef.current, []),
    estimateSize: useCallback(() => 150, []),
    overscan: 2,
    gap: 15,
  });

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();

    if (!lastItem) {
      return;
    }

    if (
      lastItem.index >= posts.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    posts.length,
    isFetchingNextPage,
    rowVirtualizer.getVirtualItems(),
  ]);

  return (
    <Container>
      <div className='flex min-h-80 flex-col items-center gap-5 rounded-3xl bg-white py-6 text-slate-950 dark:border dark:border-slate-800 dark:bg-slate-900 dark:text-zinc-300'>
        <h1 className='text-3xl font-semibold md:text-4xl dark:text-zinc-100'>
          Blogs
        </h1>
        {posts.length === 0 && (
          <p className='flex w-full flex-1 items-center justify-center gap-3 text-lg font-semibold'>
            <ExclamationTriangleIcon className='h-8 w-8' />
            No posts found
          </p>
        )}
        {posts.length > 0 && (
          <div
            ref={parentRef}
            className='flex h-[400px] w-full flex-col overflow-auto rounded-lg px-5'
          >
            <div
              className='relative w-full'
              style={{
                height: rowVirtualizer.getTotalSize(),
              }}
            >
              {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                const isLoaderRow = virtualRow.index > posts.length - 1;
                const post = posts[virtualRow.index];

                return (
                  <div
                    key={virtualRow.index}
                    data-index={virtualRow.index}
                    className='absolute w-full'
                    ref={rowVirtualizer.measureElement}
                    style={{
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                  >
                    <Post postInfo={post} />
                    {isLoaderRow && hasNextPage && 'Loading...'}
                    {!hasNextPage && isLoaderRow && 'You have reached the end'}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <ContactMe />
    </Container>
  );
}
