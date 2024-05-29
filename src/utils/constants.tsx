import { PublicationLinks } from "../../generated/graphq"
import { faGithub, faHashnode, faInstagram, faLinkedin, faMastodon, faXTwitter, faYoutube, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faGlobe, faHammer, faHouse, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons"
import { url } from "inspector"

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

export const PROJECTS = [
    {
        name: 'Khadim e Zyaraat',
        url: 'github.com/iammarmirza/khadim-e-zyaraat',
        demoLink: 'khadim-e-zyaraat-git-main-ammar-mirzas-projects-f4eca922.vercel.app',
        imageUrl: '/khadim-e-zyaraat.png'
    },
    {
        name: 'Anime Searchbar',
        url: 'github.com/iammarmirza/redux-toolkit-jikan-api',
        demoLink: 'redux-toolkit-jikan-api-git-main-ammar-mirzas-projects-f4eca922.vercel.app',
        imageUrl: '/anime-searchbar.png'
    }
]

