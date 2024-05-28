import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartSimple, faClockFour } from "@fortawesome/free-solid-svg-icons";

interface PostProps {
    postInfo: {
        __typename?: "Post" | undefined;
        id: string;
        slug: string;
        title: string;
        views: number;
        publishedAt: any;
        coverImage?: {
            __typename?: "PostCoverImage" | undefined;
            url: string;
        } | null | undefined;
    } | undefined
}

export const Post = (props: PostProps) => {
    const { postInfo } = props
    const formatDate = (dateString: string) => {
        const date = new Date(dateString).toDateString()
        return date
    }
    return (
        <div className="w-full rounded-xl px-2 py-2 items-center flex flex-col sm:flex-row gap-4 border border-zinc-100 hover:shadow-md mb-6">
            <div className="w-full sm:max-w-52 aspect-video rounded-lg overflow-hidden flex">
                <Image src={postInfo?.coverImage?.url || ''} alt="Post Image" width={200} height={200} className="flex-1" />
            </div>
            <div className="flex flex-col w-full px-3">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-5">{postInfo?.title}</h3>
                <div className="flex flex-row w-full justify-between text-xs mb-3">
                    <p className="flex flex-row gap-2 items-center text-slate-800">
                        <FontAwesomeIcon icon={faClockFour} />
                        {formatDate(postInfo?.publishedAt)}</p>
                    <p className="flex flex-row gap-2 items-center text-slate-800">
                        <FontAwesomeIcon icon={faChartSimple} />
                        {postInfo?.views}</p>
                </div>
            </div>
        </div>
    )
}