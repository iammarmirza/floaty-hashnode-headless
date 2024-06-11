import getQueryClient from "@/utils/getQueryClient"
import { usePostQuery } from "../../../../generated/graphq"
import { HydrationBoundary, dehydrate } from "@tanstack/react-query"
import Head from "next/head"
import { highlightJsMonokaiTheme } from "@/utils/consts/constants"

interface SlugLayoutProps {
    children: React.ReactNode,
    params: {
        slug: string
    }
}

const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string

export default async function SlugLayout({ children, params }: SlugLayoutProps) {
    const queryClient = getQueryClient()

    await queryClient.prefetchQuery({
        queryKey: usePostQuery.getKey({
            host,
            slug: params.slug
        }),
        queryFn: usePostQuery.fetcher({
            host,
            slug: params.slug
        })
    })

    return (
        <>
            <Head>
                <style dangerouslySetInnerHTML={{ __html: highlightJsMonokaiTheme }} />
            </Head>
            <HydrationBoundary state={dehydrate(queryClient)}>
                {children}
            </HydrationBoundary>
        </>
    )
}