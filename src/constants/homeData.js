import {faFlag, faLock, faShieldHalved} from "@fortawesome/free-solid-svg-icons";

export const metadataHero = {
  title: 'Look for new people nearby',
  description: 'Already millions of people have arranged casual or scheduled meetings with the service',
  button: 'Create account'
};

export const advantagesData = [
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