import './Users.scss';
import { usersStatsConfig } from '../../constants/userstats';

export const UsersStats = () => {
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
