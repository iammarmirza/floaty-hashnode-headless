import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import {
  PostsQuery,
  useInfinitePostsQuery,
  usePostsQuery,
} from '../../../generated/graphq';
import getQueryClient from '@/utils/getQueryClient';

const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;
const pageSize = 10;
const page = 1;

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: useInfinitePostsQuery.getKey({
      host,
      pageSize,
      page,
    }),
    queryFn: usePostsQuery.fetcher({
      host,
      pageSize,
      page,
    }),
    initialPageParam: page,
  });

  return (
    <HydrationBoundary state={dehydrate(getQueryClient())}>
      {children}
    </HydrationBoundary>
  );
}
