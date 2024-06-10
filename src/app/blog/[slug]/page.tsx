'use client'
import { Container } from "@/components/Container"
import Image from "next/image"
import { usePostQuery } from "../../../../generated/graphq"
import { useQuery } from "@tanstack/react-query"
import { ContactMe } from "@/components/ContactMe"
import { loadIframeResizer } from "@/utils/services/embed"
import { useEffect, useState } from "react"
import { useEmbeds } from "../../../../hooks/useEmbeds"
import { triggerCustomWidgetEmbed } from "../../../utils/trigger-custom-widget-embed"
import { MarkdownToHtml } from "@/components/MarkdownToHtml"

const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string
export default function BlogContent ({ params }: {
    params: { slug: string }
}) {
    const { data } = useQuery({
        queryKey: usePostQuery.getKey({
            host,
            slug: params.slug
        }),
        queryFn: usePostQuery.fetcher({
            host,
            slug: params.slug
        })
    })

    const highlightJsMonokaiTheme =
		'.hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}';
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
			triggerCustomWidgetEmbed(data.publication?.post?.id.toString());
			setCanLoadEmbeds(true);
		})();
	}, []);
    

    return(
        <Container>
            <div className="rounded-3xl w-full bg-white p-6 shadow-md">
                <div className="w-full aspect-video border rounded-xl flex mb-8">
                    <Image src={'/vercel.svg'} alt="Blog Cover Image" width={1000} height={1000} className="flex-1"/>
                </div>
                {
                    data?.publication?.post?.content.markdown && <MarkdownToHtml contentMarkdown={data.publication.post.content.markdown} />
                }
            </div>
            <ContactMe />
        </Container>
    )
}