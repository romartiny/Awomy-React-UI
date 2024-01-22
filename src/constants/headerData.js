import {
  faCircleInfo,
  faHardDrive,
  faBookmark,
  faMoneyBill,
  faShieldHeart,
  faQuestion
} from '@fortawesome/free-solid-svg-icons';

export const navigationLinks = [
  {
    _id: 1,
    title: 'Learn',
    href: '/learn',
    icon: faBookmark
  },
  {
    _id: 2,
    title: 'Safety',
    href: '/learn',
    icon: faShieldHeart
  },
  {
    _id: 3,
    title: 'Support',
    href: '/netflow',
    icon: faMoneyBill
  },
  {
    _id: 4,
    title: 'About',
    href: '/about',
    icon: faCircleInfo
  },
  {
    _id: 5,
    title: 'Help',
    href: '/help',
    icon: faQuestion
  }
];
