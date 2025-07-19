import type { FC } from "react";
import './Users.scss'
import { UsersStats } from "./UsersStats";

export type UsersProps = {};

const UsersComponent: FC<UsersProps> = () => {
  return (
    <div className="user">
      <h2>Users</h2>

      <UsersStats />
    </div>
  );
};

export default UsersComponent;
