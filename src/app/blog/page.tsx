'use client'
import { ContactMe } from "@/components/ContactMe"
import { Container } from "@/components/Container"
import { useInfinitePostsQuery, usePostsQuery } from "../../../generated/graphq"
import { Post } from "@/components/Post"

const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string

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
    return (
        <Container>
            <div className="bg-white rounded-3xl px-5 py-6 flex-col flex gap-5 items-center">
                <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">Blogs</h1>
                <div className="w-full flex flex-col gap-4">
                    {
                        posts && posts.length > 0 && posts.map(post => (
                            <Post key={post?.id} postInfo={post}/>
                        ))
                    }
                    
                </div>
            </div>
            <ContactMe />
        </Container>
    )
}