import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const MENULIST = [
  { title: 'About.', link: '/components/about' },
  { title: 'Home.', link: '/' },
  { title: 'Contact.', link: '/components/contact' }
]

export const FOOTERLINKS = [
  { id: 'work', content: 'Work.', link: '/components/work', isIcon: false },
  { id: 'side', content: 'Side.', link: '/components/sideproject', isIcon: false },
  {
    id: 'social',
    content: [
      { id: 'github', icon: <FaGithub />, href: 'https://github.com/ChungwonJ' },
      { id: 'instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/jungchungwon/' },
    ],
    isIcon: true,
  }
];