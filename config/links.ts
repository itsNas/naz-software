import { Icons } from "@/components/icon"

import { Routes } from "./routes"

type HeaderLinks = {
  icon: keyof typeof Icons
  href: string
  text: string
}[]

export const HeaderLinks: HeaderLinks = [
  {
    icon: "servicesPage",
    href: Routes.Services,
    text: "for businesses",
  },
  {
    icon: "learningProductsPage",
    href: Routes.LearningProducts,
    text: "training products",
  },
  {
    icon: "projectsPage",
    href: Routes.Projects,
    text: "projects",
  },
  {
    icon: "contactsPage",
    href: Routes.Contact,
    text: "contacts",
  },
  {
    icon: "blogPage",
    href: Routes.Blog,
    text: "articles",
  },
]

type FooterLinkGroups = {
  id: number
  links: {
    href: string
    title: string
  }[]
}[]

export const FooterLinkGroups: FooterLinkGroups = [
  {
    id: 2,
    links: [
      {
        href: Routes.Services,
        title: "services for businesses",
      },
      {
        href: Routes.LearningProducts,
        title: "training products",
      },
      {
        href: Routes.Projects,
        title: "projects",
      },
      {
        href: Routes.Contact,
        title: "contacts",
      },
      {
        href: Routes.Blog,
        title: "articles",
      },
    ],
  },
]

type SocialLinks = {
  name: string
  url: string
  handle: string
  icon: keyof typeof Icons
}[]

export const SocialLinks: SocialLinks = [
  {
    name: "instagram",
    url: "https://www.instagram.com/mattegiardino",
    handle: "@mattegiardino",
    icon: "instagram",
  },
  {
    name: "tiktok",
    url: "https://www.tiktok.com/@mattegiardino",
    handle: "@mattegiardino",
    icon: "tiktok",
  },
  {
    name: "github",
    url: "https://github.com/gatteo",
    handle: "@gatteo",
    icon: "github",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/matteo-giardino",
    handle: "@matteo-giardino",
    icon: "linkedin",
  },
  {
    name: "x",
    url: "https://twitter.com/mattegiardino",
    handle: "@mattegiardino",
    icon: "twitter",
  },
  {
    name: "twitch",
    url: "https://www.twitch.tv/matteogiardino",
    handle: "@matteogiardino",
    icon: "twitch",
  },
]

type ContactLinks = {
  name: string
  mailto: string
  icon: keyof typeof Icons
  logo: string
}[]

export const ContactLinks: ContactLinks = [
  {
    name: "Personal",
    mailto: "nbensaloji@gmail.com",
    icon: "email",
    logo: "/images/mg-logo-white.webp",
  },
  {
    name: "Wezard",
    mailto: "nas@snapshorts.ai",
    icon: "email",
    logo: "/images/brands/wezard-icon.png",
  },
]
