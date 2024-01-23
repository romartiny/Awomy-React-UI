import {
  faCircleInfo,
  faBookmark,
  faMoneyBill,
  faShieldHeart,
  faQuestion, faFileArrowDown
} from '@fortawesome/free-solid-svg-icons';

export const navigationLinks = [
  {
    _id: 1,
    href: '/',
  },
  {
    _id: 2,
    title: 'Learn',
    href: '/learn',
    icon: faBookmark
  },
  {
    _id: 3,
    title: 'Safety',
    href: '/learn',
    icon: faShieldHeart
  },
  {
    _id: 4,
    title: 'Download',
    href: '/download',
    icon: faFileArrowDown
  },
  {
    _id: 5,
    title: 'Support',
    href: '/netflow',
    icon: faMoneyBill
  },
  {
    _id: 6,
    title: 'About',
    href: '/about',
    icon: faCircleInfo
  },
  {
    _id: 7,
    title: 'Help',
    href: '/help',
    icon: faQuestion
  }
];
