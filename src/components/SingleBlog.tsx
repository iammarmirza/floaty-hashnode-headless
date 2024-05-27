import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";

interface SingleBlogProps {
    blogInfo: {
        __typename?: "Post" | undefined;
        id: string
        slug: string;
        title: string;
        brief: string;
        publishedAt?: any;
        coverImage?: {
            __typename?: "PostCoverImage" | undefined;
            url: string;
        } | null | undefined;
    }
}

export const SingleBlog = (props : SingleBlogProps) => {
    const { brief, title, slug} = props.blogInfo
    return (
        <Link href={`/blog/${slug}`} className="w-full px-4 py-4 rounded-2xl border border-zinc-100 sm:max-w-72 hover:shadow-md group md:max-w-80 lg:max-w-96 items-center">
            <div className="relative flex flex-col gap-3 w-full">
                <div className="flex w-full aspect-video border rounded-xl overflow-hidden">
                    <Image src={props.blogInfo.coverImage?.url || ''} width={1000} height={1000} alt="Project Image" className="flex-1" />
                </div>
                <h3 className="font-semibold text-xl">{title}</h3>
                <p className="text-slate-500 text-justify mb-6">{brief}</p>
                <button className="hidden absolute group-hover:block right-1 bottom-1">
                    <FontAwesomeIcon icon={faArrowRight} size="lg"/>
                </button>
            </div>
        </Link>
    )
}