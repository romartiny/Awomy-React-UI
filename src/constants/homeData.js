import {faFlag, faLock, faShieldHalved} from "@fortawesome/free-solid-svg-icons";

export const metadataHero = {
  title: 'Look for new people nearby',
  description: 'Already millions of people have arranged casual or scheduled meetings with the service',
  button: 'Create account'
};

export const advantagesData = {
  title: 'We care about our platform',
  description: 'Every user is important to us, so we try to maintain the platform for a wide range of users with quality and speed'
};

export const advantagesBlocksData = [
  {
    name: "Safety",
    description: "The platform monitors the security of all users and data of each service in the application. All data is fully encrypted and inaccessible to third parties.",
    icon: faShieldHalved,
    href: '/safety',
  },
  {
    name: "Reporting",
    description: "The system takes special care to protect your personal information, applying strong security measures to protect your data and confidential use of the application. ",
    icon: faFlag,
    href: '/report',
  },
  {
    name: "Privacy",
    description: "The platform takes into account all the security of users and service data in the application. All data is fully protected and is not shared with third parties.",
    icon: faLock,
    href: '/privacy',
  }
];

export const mapData = {
  title: 'New meetings are right around the corner',
  description: 'Search for new acquaintances near you on the map and spend your free time with different people',
};

export const readyData = {
  title: 'Ready to get started?',
  description: 'Create an account and start creating new moments',
  signUp: {
    title: 'Sign up',
    href: '/login'
  },
  learnMore: {
    title: 'Learn more',
    href: '/login'
  }
};