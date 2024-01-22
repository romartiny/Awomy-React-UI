import {
  TetherLogo,
  BitcoinLogo, BancorLogo, PolygonLogo,
  SnowtraceLogo,
  FantomLogo,
  KncLogo,
  CompLogo, DeviceArrowIcon, DeviceCardsIcon, DeviceClockIcon, DeviceListIcon, DeviceLockIcon, DeviceChartIcon
} from '../components/Home/StockLogos';
import { todayDate } from '../utils/UtilFunctions';
import { DeviceNotificationIcon, DeviceTouchIcon, DeviceUserIcon } from '../components/Home/DeviceIcons';
import { CryptoScreen, InviteScreen, StocksScreen } from '../components/Home/MobileScreens';

export const metadataHero = {
  title: 'Look for new people nearby',
  description: 'Already millions of people have arranged casual or scheduled meetings with the service',
  active: '10$ FREE',
  activeText: 'For the First Account',
  button: 'Create account'
};

export const mobileScreenData = {
  inviteData: {
    title: 'Invite people',
    subtitle: 'Get tips for every invite.',
    inputValues: [
      { label: 'Full name', value: 'Dallas C. Haffer' },
      { label: 'Email address', value: 'haffer@crypto.com' }
    ],
    submitButton: 'Invite person',
    submitLink: 'referral'
  },
  stockData: {
    title: 'Cryptocurrency',
    subtitle: todayDate()
  },
  tradeData: {
    title: 'Buy BTC',
    subtitle: '$26,734.28',
    totalCoins: '162 922',
    tradable: '$25,157.53',
    maxPrice: '$47,428.82',
    submitButton: 'Buy',
    submitLink: 'cryptocurrency'
  }
};

export const featuresData = [
  {
    name: 'Invite friends',
    description: 'For every friend you invite to Crypto, you will get free access to new features and 75$',
    icon: DeviceUserIcon,
    screen: InviteScreen
  },
  {
    name: 'Cryptocurrency',
    description: 'Get list of currencies available for transactions and currency conversions to Crypto',
    icon: DeviceNotificationIcon,
    screen: StocksScreen
  },
  {
    name: 'Buy any cryptocurrencies',
    description: 'Buy any cryptocurrency for trading purposes and receive any information from Crypto',
    icon: DeviceTouchIcon,
    screen: CryptoScreen
  }
];

export const cryptoData = [
  {
    name: 'Bitcoin',
    price: '$27,352.42',
    change: '+4.98%',
    color: '#FFF',
    logo: BitcoinLogo
  },
  {
    name: 'Comp',
    price: '$3,511.10',
    change: '-3.38%',
    color: '#FFF',
    logo: CompLogo
  },
  {
    name: 'Tether',
    price: '$1261.65',
    change: '+1.25%',
    color: '#FFF',
    logo: TetherLogo
  },
  {
    name: 'Fantom',
    price: '$514.12',
    change: '-3.38%',
    color: '#FFF',
    logo: FantomLogo
  },
  {
    name: 'Snowtrace',
    price: '$512.72',
    change: '-3.11%',
    color: '#FFF',
    logo: SnowtraceLogo
  },
  {
    name: 'KNC',
    price: '$4,098.41',
    change: '+6.25%',
    color: '#FFF',
    logo: KncLogo
  },
  {
    name: 'Bancor',
    price: '$612.21',
    change: '+9.09%',
    color: '#FFF',
    logo: BancorLogo
  },
  {
    name: 'Polygon',
    price: '$1295.97',
    change: '-1.25%',
    color: '#FFF',
    logo: PolygonLogo
  }
];

export const accountData = [
  {
    name: 'Trade with any amount',
    description:
      'Whether it is $1 or $1,000,000, you can trade in our platform',
    icon: DeviceArrowIcon
  },
  {
    name: 'Build a balanced portfolio',
    description:
      'You can not only trade but also store currencies on our platform through a secure system',
    icon: DeviceCardsIcon
  },
  {
    name: 'Trade in real-time',
    description:
      'Get insider tips on big stock moves and act on them within seconds.',
    icon: DeviceClockIcon
  },
  {
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Crypto users.',
    icon: DeviceListIcon
  },
  {
    name: 'Encrypted and anonymized',
    description:
      'Cutting-edge security technology that even the NSA does not know about keeps you hidden.',
    icon: DeviceLockIcon
  },
  {
    name: 'Progress tracking',
    description:
      'Watch your investments grow exponentially, leaving other investors in the dust.',
    icon: DeviceChartIcon
  }
];

export const consData = {
  title: 'Now is the time to open your Account',
  description: 'With our platform you can trade any cryptocurrency that is available in your personal account'
};