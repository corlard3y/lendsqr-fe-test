import {
  BadgeIcon,
  BankIcon,
  BriefcaseIcon,
  ChartbarIcon,
  ClipboardIcon,
  DashboardIcon,
  GalaxyIcon,
  HandHoldingIcon,
  HandshakeIcon,
  PaperIcon,
  PhoneIcon,
  PiggyBankIcon,
  SackIcon,
  SlidersIcon,
  SolidCoinIcon,
  TireIcon,
  UserCheckIcon,
  UserCOGIcon,
  UserTimesIcon,
  UsersFriendsIcon,
  UsersIcon
} from '../assets/icons'


export const sidebarItems = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: DashboardIcon,
  },
  {
    title: 'Customers',
    children: [
      {
        title: 'Users',
        path: '/#',
        icon: UsersFriendsIcon,
      },
      {
        title: 'Guarantors',
        path: '/#',
        icon: UsersIcon,
      },
      {
        title: 'Loans',
        path: '/#',
        icon: SackIcon,
      },
      {
        title: 'Decision Models',
        path: '/#',
        icon: HandshakeIcon,
      },
      {
        title: 'Savings',
        path: '/#',
        icon: PiggyBankIcon,
      },
      {
        title: 'Loan Requests',
        path: '/#',
        icon: HandHoldingIcon,
      },
      {
        title: 'Whitelist',
        path: '/#',
        icon: UserCheckIcon,
      },
      {
        title: 'Karma',
        path: '/#',
        icon: UserTimesIcon,
      },
    ],
  },
  {
    title: 'Businesses',
    children: [
      {
        title: 'Organization',
        path: '/#',
        icon: BriefcaseIcon,
      },
      {
        title: 'Loan Products',
        path: '/#',
        icon: HandHoldingIcon,
      },
      {
        title: 'Savings Products',
        path: '/#',
        icon: BankIcon,
      },
      {
        title: 'Fees and Charges',
        path: '/#',
        icon: SolidCoinIcon,
      },
      {
        title: 'Transactions',
        path: '/#',
        icon: PhoneIcon,
      },
      {
        title: 'Services',
        path: '/#',
        icon: GalaxyIcon,
      },
      {
        title: 'Service Account',
        path: '/#',
        icon: UserCOGIcon,
      },
      {
        title: 'Settlements',
        path: '/#',
        icon: PaperIcon,
      },
      {
        title: 'Reports',
        path: '/#',
        icon: ChartbarIcon,
      },
    ],
  },
  {
    title: 'Businesses',
    children: [
      {
        title: 'Organization',
        path: '/#',
        icon: SlidersIcon,
      },
      {
        title: 'Fees and Pricing',
        path: '/#',
        icon: BadgeIcon,
      },
      {
        title: 'Audit Logs',
        path: '/#',
        icon: ClipboardIcon,
      },
      {
        title: 'Systems Messages',
        path: '/#',
        icon: TireIcon,
      },
    ]
  }
]
