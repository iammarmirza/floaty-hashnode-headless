'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SOCIAL_LINKS } from "@/utils/constants";
import { usePublicationQuery } from "../../generated/graphq";

export const SocialLinks = () => {
    const { data } = usePublicationQuery({
        host: "ammarmirza.hashnode.dev"
    })

    if(!data?.publication?.links) return null
    const links = Object.entries(data.publication.links).filter(([key, value]) => value)
    
    return (
        <div className="flex flex-wrap gap-3 md:gap-4">
            {
                links.map(([socialName, socialLink]) => (
                    <a href={socialLink as string} target="_blank" className="flex p-1 md:p-3 rounded-full shadow-sm" key={socialName}>
                        <FontAwesomeIcon icon={SOCIAL_LINKS[socialName]} className="h-4 w-4 md:h-6 md:w-6" />
                    </a>
                ))
            }
        </div>
    )
}