'use client'
import { SingleBlog } from "./SingleBlog"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { usePublicationQuery } from "../../generated/graphq"

export const Blogs = () => {
    const { data } = usePublicationQuery({
        host: "ammarmirza.hashnode.dev"
    })

    if(!data || !data.publication) return null

    return(
        <div className="bg-white w-full shadow-lg rounded-3xl p-6 md:p-8 flex flex-col items-start">
            <div className="w-full flex flex-row justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Blogs</h2>
                <Link
                    href={'/blog'}
                    className="hidden md:flex flex-row items-center gap-2 rounded-full text-sm shadow-sm px-4 py-2 hover:bg-slate-600 hover:text-white hover:gap-3">
                    All Blogs <FontAwesomeIcon icon={faArrowRight} />
                </Link>
            </div>
            <div className="w-full gap-5 flex flex-col sm:flex-row sm:justify-center md:gap-8">
                {
                    data.publication.posts.edges.map(edge => (
                        <SingleBlog blogInfo={edge.node} key={edge.node.id}/>
                    ))
                }
            </div>
            <Link
                    href={'/blog'}
                    className="flex md:hidden mt-6 sm:text-base text-sm flex-row items-center gap-2 rounded-full shadow-sm px-4 py-2 hover:bg-slate-600 hover:text-white hover:gap-3 self-center">
                    All Blogs <FontAwesomeIcon icon={faArrowRight} />
                </Link>
        </div>
    )
}