import { FrontendMentorIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../components/SocialIcons";

type socialLinks = {
  id: number;
  name: string;
  link: string;
  icon: React.ReactNode;
};

export const socialLinks: socialLinks[] = [
  {
    id: 0,
    name: "github",
    link: "https://www.github.com",
    icon: GithubIcon,
  },
  {
    id: 1,
    name: "frontend-mentor",
    link: "https://www.frontendmentor.io",
    icon: FrontendMentorIcon,
  },
  {
    id: 2,
    name: "linkedin",
    link: "https://www.linkedin.com/",
    icon: LinkedinIcon,
  },
  {
    id: 3,
    name: "twitter",
    link: "https://x.com",
    icon: TwitterIcon,
  },
];
