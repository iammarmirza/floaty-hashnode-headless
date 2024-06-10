'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SOCIAL_LINKS } from "@/utils/consts/constants";
import { usePublicationQuery } from "../../generated/graphq";
const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST as string

export const SocialLinks = () => {
    const { data } = usePublicationQuery({
        host
    })

    if(!data?.publication?.links) return null
    const links = Object.entries(data.publication.links).filter(([key, value]) => value)
    
    return (
        <div className="flex flex-wrap gap-3 md:gap-4">
            {
                links.map(([socialName, socialLink]) => (
                    <a href={socialLink as string} target="_blank" className="flex p-1 md:px-1 md:py-2 rounded-full hover:shadow-sm hover:bg-slate-600 hover:text-white" key={socialName}>
                        <FontAwesomeIcon icon={SOCIAL_LINKS[socialName]} className="h-4 w-4 md:h-6 md:w-6" />
                    </a>
                ))
            }
        </div>
    )
}