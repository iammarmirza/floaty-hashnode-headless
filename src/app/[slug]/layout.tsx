import getQueryClient from '@/utils/getQueryClient';
import { StaticPageQuery, useStaticPageQuery } from '../../../generated/graphq';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Script from 'next/script';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

interface StaticPageLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: useStaticPageQuery.getKey({
      host,
      slug: props.params.slug,
    }),
    queryFn: useStaticPageQuery.fetcher({
      host,
      slug: props.params.slug,
    }),
  });
  const data = queryClient.getQueryData<StaticPageQuery>(
    useStaticPageQuery.getKey({
      host,
      slug: props.params.slug,
    })
  );

  const page = data?.publication?.staticPage;

  if (!page)
    return {
      title: '404 not found',
    };

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description,
    openGraph: {
      title: page.seo?.title!,
      description: page.seo?.description!,
      images: [
        {
          url: page.ogMetaData?.image!,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function StaticPageLayoutProps({
  children,
  params,
}: StaticPageLayoutProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: useStaticPageQuery.getKey({
      host,
      slug: params.slug,
    }),
    queryFn: useStaticPageQuery.fetcher({
      host,
      slug: params.slug,
    }),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
      <Script src='../../../utils/highlight.js' />
    </>
  );
}
