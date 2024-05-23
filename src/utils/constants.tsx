import { PublicationLinks } from "@/gql/graphql"
import { faGithub, faHashnode, faInstagram, faLinkedin, faMastodon, faXTwitter, faYoutube, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faGlobe, faHammer, faHouse, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons"
import { DocumentTextIcon, HomeIcon, PaintBrushIcon, UserIcon } from "@heroicons/react/24/outline"

export const NAVLINKS = [
    {
        name: 'Home',
        href: '/',
        icon: faHouse
    },
    {
        name: 'About',
        href: '/about',
        icon: faUser
    },
    {
        name: 'Blog',
        href: '/blog',
        icon: faNewspaper
    },
    {
        name: 'Project',
        href: '/project',
        icon: faHammer
    }

]

export const SOCIAL_LINKS: {
    [key in keyof PublicationLinks]: IconDefinition
} = {
    'instagram': faInstagram,
    'github': faGithub,
    'website': faGlobe,
    'hashnode': faHashnode,
    'youtube': faYoutube,
    'linkedin': faLinkedin,
    'mastodon': faMastodon
}