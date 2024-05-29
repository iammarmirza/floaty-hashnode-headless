'use client'
import { ContactMe } from "@/components/ContactMe"
import { Container } from "@/components/Container"
import { useInfinitePostsQuery, usePostsQuery } from "../../../generated/graphq"
import { Post } from "@/components/Post"
import { useVirtualizer } from '@tanstack/react-virtual'
import { useCallback, useEffect, useRef } from "react"

const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string
const height = window.innerHeight

export default function Blog() {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfinitePostsQuery({
        host,
        pageSize: 10,
        page: 1
    },
        {
            queryFn: ({ pageParam }) =>
                usePostsQuery.fetcher({
                    host,
                    pageSize: 10,
                    page: pageParam as number
                })(),
            initialPageParam: 1,
            getNextPageParam: (lastPage) => {
                return lastPage.publication?.postsViaPage.pageInfo.nextPage ?? null
            }
        });

    const posts = data?.pages.flatMap(page => page.publication?.postsViaPage.nodes) || []
    const parentRef = useRef(null)

    // { Todo:- Fix Dynamic Height Issue }
    const rowVirtualizer = useVirtualizer({
        count: hasNextPage ? posts.length + 1 : posts.length,
        getScrollElement: useCallback(() => parentRef.current, []),
        estimateSize: useCallback(() => window.innerWidth < 540 ? 370 : 150, [height]),
        overscan: 2,
    })

    useEffect(() => {
        const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse()

        if (!lastItem) {
            return
        }

        if (
            lastItem.index >= posts.length - 1 &&
            hasNextPage &&
            !isFetchingNextPage
        ) {
            fetchNextPage()
        }
    }, [
        hasNextPage,
        fetchNextPage,
        posts.length,
        isFetchingNextPage,
        rowVirtualizer.getVirtualItems(),
    ])

    return (
        <Container>
            <div className="bg-white rounded-3xl px-5 py-6 flex-col flex gap-5 items-center">
                <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">Blogs</h1>
                <div
                    ref={parentRef}
                    className="w-full flex flex-col overflow-auto h-[500px] relative">
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                        const isLoaderRow = virtualRow.index > posts.length - 1
                        const post = posts[virtualRow.index]

                        return (
                            <div
                                key={virtualRow.index}
                                data-index={virtualRow.index}
                                className='w-full absolute'
                                style={{
                                    transform: `translateY(${virtualRow.start}px)`,
                                    height: `${virtualRow.size}px`,
                                }}
                            >
                                {isLoaderRow && hasNextPage && 'Loading...'}
                                {isLoaderRow && !hasNextPage && 'You have reached the end'}
                                <Post postInfo={post} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <ContactMe />
        </Container>
    )
}
