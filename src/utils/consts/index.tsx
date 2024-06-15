import { PublicationLinks } from '../../../generated/graphq';
import {
  faGithub,
  faHashnode,
  faInstagram,
  faLinkedin,
  faMastodon,
  faXTwitter,
  faYoutube,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export const SOCIAL_LINKS: {
  [key in keyof PublicationLinks]: IconDefinition;
} = {
  instagram: faInstagram,
  github: faGithub,
  website: faGlobe,
  hashnode: faHashnode,
  youtube: faYoutube,
  linkedin: faLinkedin,
  mastodon: faMastodon,
  twitter: faXTwitter,
};

export const PROJECTS: {
  name: string;
  url?: string;
  demoLink?: string;
  imageUrl?: string;
}[] = [
  {
    name: 'Project 1',
  },
  {
    name: 'Project 2',
  },
];
