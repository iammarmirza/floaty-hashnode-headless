'use client';
import { useQuery } from '@tanstack/react-query';
import { useStaticPageQuery } from '../../../generated/graphq';
import { Container } from '@/components/Container';
import { MarkdownToHtml } from '@/components/MarkdownToHtml';
import { ContactMe } from '@/components/ContactMe';
import { notFound } from 'next/navigation';
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export default function StaticPage({ params }: { params: { slug: string } }) {
  const { data, error } = useQuery({
    queryKey: useStaticPageQuery.getKey({
      host,
      slug: params.slug,
    }),
    queryFn: useStaticPageQuery.fetcher({
      host,
      slug: params.slug,
    }),
  });

  if (!data || error) throw error;
  const staticPage = data.publication?.staticPage;
  if (!staticPage) notFound();

  return (
    <Container>
      <div className='w-full rounded-3xl bg-white p-4 shadow-md md:p-8 dark:border dark:border-slate-800 dark:bg-slate-900'>
        <h1 className='mb-6 w-full text-center text-3xl font-semibold text-slate-950 md:text-4xl dark:text-zinc-100'>
          {staticPage.title}
        </h1>
        <hr className='mb-6 h-px border-0 bg-slate-800' />
        <MarkdownToHtml contentMarkdown={staticPage.content.markdown} />
      </div>
      <ContactMe />
    </Container>
  );
}
