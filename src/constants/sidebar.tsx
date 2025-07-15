import {
  DashboardIcon,
  HandHoldingIcon,
  HandshakeIcon,
  PiggyBankIcon,
  SackIcon,
  UserCheckIcon,
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
]
