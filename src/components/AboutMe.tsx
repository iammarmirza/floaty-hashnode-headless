'use client'
import Image from "next/image"
import { SocialLinks } from "./SocialLinks"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { usePublicationQuery } from "../../generated/graphq"

export const AboutMe = () => {
    const path = usePathname()
    
    const { data, isLoading } = usePublicationQuery({
        host: "ammarmirza.hashnode.dev"
    })
    
    if(!data || !data.publication) return null
    const { publication } = data
    return (
        <div className="bg-white w-full shadow-md rounded-3xl p-6 flex flex-col sm:flex-row gap-7 items-center">
            <div className="w-full sm:max-w-52 aspect-square overflow-hidden flex rounded-xl">
                {publication.author.profilePicture && <Image src={publication.author.profilePicture} alt="profile pic" width={1000} height={1000} className="flex-1" />}
            </div>
            <div className="flex-1 flex flex-col justify-between max-w-full">
                <div className="flex flex-col gap-2 lg:gap-0 sm:flex-row justify-between w-full items-center mb-4">
                    <div className="hidden md:block bg-green-200 text-green-700 py-1 px-3 text-sm rounded-2xl">&#8226; Available for work</div>
                    <div className="block md:hidden bg-green-200 text-green-700 py-1 px-3 text-sm rounded-2xl">&#8226; Available</div>
                    <SocialLinks />
                </div>
                <div className="flex flex-col lg:w-[600px] gap-2 mb-4">
                    <p className="font-semibold text-2xl sm:text-3xl md:text-4xl text-slate-800">{
                        path === '/' ? `Hi There! I am ${publication.author.name}!` : 'Get to Know Me'
                    }</p>
                    <div className="text-slate-500" dangerouslySetInnerHTML={{ __html: publication.author.bio?.html || '' }} />
                </div>
                <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center ">
                    <p className="text-slate-500 text-sm">{publication.author.location}</p>
                    {
                        path === '/' && <Link href='/about' className="rounded-full shadow-sm shadow-slate-100 text-sm px-3 py-2 flex flex-row gap-2 items-center hover:gap-3 hover:bg-slate-600 hover:text-white self-center">
                            More about Me
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}