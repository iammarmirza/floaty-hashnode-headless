'use client';
import { Container } from '@/components/Container';
import { usePostQuery } from '../../../../generated/graphq';
import { useQuery } from '@tanstack/react-query';
import { ContactMe } from '@/components/ContactMe';
import { loadIframeResizer } from '@/utils/services/embed';
import { useEffect, useState } from 'react';
import { useEmbeds } from '../../../../hooks/useEmbeds';
import { triggerCustomWidgetEmbed } from '@/utils/trigger-custom-widget-embed';
import { MarkdownToHtml } from '@/components/MarkdownToHtml';
import { resizeImage } from '@/utils/image';
import handleMathJax from '@/utils/handle-math-jax';
import { CoverImage } from '@/components/CoverImage';
import { PostHeader } from '@/components/PostHeader';
import { notFound } from 'next/navigation';

const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string;

export default function BlogContent({ params }: { params: { slug: string } }) {
  const { data, error } = useQuery({
    queryKey: usePostQuery.getKey({
      host,
      slug: params.slug,
    }),
    queryFn: usePostQuery.fetcher({
      host,
      slug: params.slug,
    }),
  });

  if (!data || error) throw new Error();
  const post = data.publication?.post;
  if (!post) notFound();

  const [, setMobMount] = useState(false);
  const [canLoadEmbeds, setCanLoadEmbeds] = useState(false);
  useEmbeds({ enabled: canLoadEmbeds });

  useEffect(() => {
    if (screen.width <= 425) {
      setMobMount(true);
    }

    if (!data) {
      return;
    }

    (async () => {
      await loadIframeResizer();
      triggerCustomWidgetEmbed(post.id.toString());
      setCanLoadEmbeds(true);
    })();
  }, []);

  if (post.hasLatexInPost) {
    setTimeout(() => {
      handleMathJax(true);
    }, 500);
  }

  const coverImageSrc = post.coverImage?.url
    ? resizeImage(post.coverImage.url, {
        w: 1600,
        h: 840,
        c: 'thumb',
      })
    : undefined;

  return (
    <Container>
      <article className='w-full rounded-3xl bg-white p-4 shadow-md md:p-8 dark:border dark:border-slate-800 dark:bg-slate-900'>
        {post.coverImage?.url && (
          <CoverImage title={post.title} priority={true} src={coverImageSrc} />
        )}
        <PostHeader
          title={post.title}
          name={post.author.name}
          profileImage={post.author.profilePicture}
          subtitle={post.subtitle}
        />
        <hr className='mx-5 mb-6 h-px border-0 bg-slate-800' />
        {post.content.markdown && (
          <MarkdownToHtml contentMarkdown={post.content.markdown} />
        )}
      </article>
      <ContactMe />
    </Container>
  );
}
