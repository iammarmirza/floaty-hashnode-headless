'use client'
import { ContactMe } from "@/components/ContactMe"
import { Container } from "@/components/Container"
import { useInfinitePostsQuery, usePostsQuery } from "../../../generated/graphq"
import { Post } from "@/components/Post"
import { InfiniteLoader, List, AutoSizer, WindowScroller } from "react-virtualized"

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
    const rowCount = posts.length + (hasNextPage ? 1 : 0);

    const loadingContent = <div>Loading...</div>;

    const isRowLoaded = ({ index }: { index: number }) => {
        return !!posts[index];
    };

    const rowRenderer = ({ index, key, style }: { index: number; key: any; style: any }) => {
        let content;

        if (!posts[index]) {
            content = loadingContent;
        } else {
            content = <Post key={posts[index]?.id} postInfo={posts[index]} />
        }

        return <>{content}</>
    };

    return (
        <Container>
            <div className="bg-white rounded-3xl px-5 py-6 flex-col flex gap-5 items-center">
                <h1 className="text-3xl md:text-4xl font-semibold text-slate-800">Blogs</h1>
                <div className="w-full flex flex-col">
                    <WindowScroller>
                        {({ height, isScrolling, onChildScroll, scrollTop }) => (
                            <AutoSizer disableHeight>
                                {({ width }) => (
                                    <InfiniteLoader
                                        isRowLoaded={isRowLoaded}
                                        loadMoreRows={() =>
                                            hasNextPage
                                              ? fetchNextPage().then(
                                                  () => {},
                                                  (err) => console.error(err)
                                                )
                                              : Promise.resolve()}
                                        rowCount={rowCount}
                                    >
                                        {({ onRowsRendered, registerChild }) => (
                                            <List
                                                autoHeight
                                                width={width}
                                                height={height}
                                                scrollTop={scrollTop}
                                                isScrolling={isScrolling}
                                                onScroll={onChildScroll}
                                                rowHeight={100}
                                                rowCount={rowCount}
                                                rowRenderer={rowRenderer}
                                                onRowsRendered={onRowsRendered}
                                                ref={registerChild}
                                            />
                                        )}
                                    </InfiniteLoader>
                                )}
                            </AutoSizer>
                        )}
                    </WindowScroller>
                </div>
            </div>
            <ContactMe />
        </Container>
    )
}
