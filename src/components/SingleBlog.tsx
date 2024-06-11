import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";
import { resizeImage } from "@/utils/image";
import { CoverImage } from "./CoverImage";

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

export const SingleBlog = (props: SingleBlogProps) => {
    const { brief, title, slug } = props.blogInfo
    const coverImageSrc = props.blogInfo.coverImage?.url ? resizeImage(props.blogInfo.coverImage.url, {
        w: 1600,
        h: 840,
        c: 'thumb',
    }) : undefined

    return (
        <Link href={`/blog/${slug}`} className="w-full px-4 py-4 rounded-2xl border border-zinc-100 sm:max-w-72 hover:border-zinc-200 group md:max-w-80 lg:max-w-96 items-center">
            <div className="relative flex flex-col gap-3 w-full">
                {
                    coverImageSrc && <CoverImage title={title} src={coverImageSrc} priority={true}/>
                }
                <h3 className="font-semibold text-xl">{title}</h3>
                <p className="text-slate-500 text-justify mb-8  line-clamp-3 leading-snug text-sm">{brief}</p>
                <button className="hidden absolute group-hover:block right-1 bottom-1">
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </button>
            </div>
        </Link>
    )
}