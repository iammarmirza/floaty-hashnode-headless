import { PublicationLinks } from "../../../generated/graphq"
import { faGithub, faHashnode, faInstagram, faLinkedin, faMastodon, faXTwitter, faYoutube, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { faGlobe, faHammer, faHouse, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons"

export const highlightJsMonokaiTheme =
    '.hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}';

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

