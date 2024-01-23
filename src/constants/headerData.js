import {
  faCircleInfo,
  faBookmark,
  faMoneyBill,
  faShieldHeart,
  faQuestion, faFileArrowDown
} from '@fortawesome/free-solid-svg-icons';

export const navigationLinks = [
  {
    href: '/',
  },
  {
    title: 'Learn',
    href: '/learn',
    icon: faBookmark
  },
  {
    title: 'Safety',
    href: '/learn',
    icon: faShieldHeart
  },
  {
    title: 'Download',
    href: '/download',
    icon: faFileArrowDown
  },
  {
    title: 'Support',
    href: '/netflow',
    icon: faMoneyBill
  },
  {
    title: 'About',
    href: '/about',
    icon: faCircleInfo
  },
  {
    title: 'Help',
    href: '/help',
    icon: faQuestion
  }
];
