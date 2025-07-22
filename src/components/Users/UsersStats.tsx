import './Users.scss';
import type { UserDetails } from '../../types/users';
import { ActiveUsersImg, TotalUsersImg, UsersWithLoan, UsersWithSavings } from '../../assets/illustrations';

export const UsersStats = ({ users }: {users: UserDetails[]}) => {
  const totalUsers = users?.length;
  const activeUsers = users?.filter(user => user.status === 'active').length;
  const usersWithLoan = users?.filter(user =>
    typeof user.loanRepayment === 'number' && user.loanRepayment > 0
  ).length;
  const usersWithSavings = users?.filter(user => {
    const balance = Number(user.accountBalance?.replace(/[^\d.-]/g, '')) || 0;
    return balance > 300000;
  }).length;

  const usersStatsConfig = [
    {
      title: 'Users',
      stats: totalUsers || '-',
      img: TotalUsersImg,
    },
    {
      title: 'Active Users',
      stats: activeUsers || '_',
      img: ActiveUsersImg,
    },
    {
      title: 'Users with Loan',
      stats: usersWithLoan || '_',
      img: UsersWithLoan,
    },
    {
      title: 'Users with Savings',
      stats: usersWithSavings || '_',
      img: UsersWithSavings,
    },
  ];

  return (
    <div className="user-stats">
      <div className="stats">
        {usersStatsConfig.map(({ title, stats, img }, idx) => (
          <div className="stat" key={idx}>
            {img && <img src={img} className="log" alt={title} />}
            <h4>{title}</h4>
            <p>{stats}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
