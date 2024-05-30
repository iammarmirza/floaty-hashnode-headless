'use client'
import { Container } from "@/components/Container"
import Image from "next/image"
import { usePostQuery } from "../../../../generated/graphq"
import { useQuery } from "@tanstack/react-query"
import { ContactMe } from "@/components/ContactMe"

const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string
export default function BlogContent ({ params }: {
    params: { slug: string }
}) {
    const { data, error } = useQuery({
        queryKey: usePostQuery.getKey({
            host,
            slug: params.slug
        }),
        queryFn: usePostQuery.fetcher({
            host,
            slug: params.slug
        })
    })

    return(
        <Container>
            <div className="rounded-3xl w-full bg-white p-6 shadow-md">
                <div className="w-full aspect-video border rounded-xl flex">
                    <Image src={'/vercel.svg'} alt="Blog Cover Image" width={1000} height={1000} className="flex-1"/>
                </div>
                <div className='py-2' dangerouslySetInnerHTML={{__html: data?.publication?.post?.content.html || ''}}/>
            </div>
            <ContactMe />
        </Container>
    )
}