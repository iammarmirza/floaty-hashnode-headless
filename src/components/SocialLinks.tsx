'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { PublicationDocument, PublicationLinks } from "@/gql/graphql";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import { SOCIAL_LINKS } from "@/utils/constants";

export const SocialLinks = () => {
    const { data } = useQuery({
        queryKey: ['PublicationInfo'],
        queryFn: async () =>
            request("https://gql.hashnode.com/",
                PublicationDocument,
                {
                    host: "ammarmirza.hashnode.dev"
                }
            )
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