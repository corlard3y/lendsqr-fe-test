import { useState, type FC } from "react";
import './Users.scss';
import { UsersStats } from "./UsersStats";
import { FilterablePaginatedTable } from "../../shared/Table";
import type { ColumnDef } from "@tanstack/react-table";
import { StatusTag } from "./StatusTag";
import { RowActions } from "./RowActions";

const userData = [
  {
    organization: "Lendsqr",
    username: "deji_001",
    email: "deji@lendsqr.com",
    phone: "+234 812 345 6789",
    date_joined: "2023-02-15",
    status: "active",
  },
  {
    organization: "Paystack",
    username: "userpay_23",
    email: "user@paystack.com",
    phone: "+234 801 222 2222",
    date_joined: "2023-01-20",
    status: "inactive",
  },
  {
    organization: "Flutterwave",
    username: "wavey123",
    email: "wave@flutter.com",
    phone: "+234 705 123 9876",
    date_joined: "2023-03-05",
    status: "pending",
  },
  {
    organization: "Lendsqr",
    username: "tolu_dev",
    email: "tolu@lendsqr.com",
    phone: "+234 909 888 7766",
    date_joined: "2023-02-28",
    status: "blacklisted",
  },
  {
    organization: "Carbon",
    username: "carbon_dude",
    email: "dude@carbon.ng",
    phone: "+234 803 112 3344",
    date_joined: "2023-04-10",
    status: "active",
  },
  {
    organization: "Kuda",
    username: "kudaqueen",
    email: "queen@kuda.com",
    phone: "+234 702 334 5566",
    date_joined: "2023-05-01",
    status: "inactive",
  },
  {
    organization: "Lendsqr",
    username: "kolade",
    email: "kolade@lendsqr.com",
    phone: "+234 805 666 7788",
    date_joined: "2023-06-12",
    status: "active",
  },
  {
    organization: "Moniepoint",
    username: "pointy",
    email: "point@monie.ng",
    phone: "+234 901 222 3344",
    date_joined: "2023-07-03",
    status: "pending",
  },
  {
    organization: "PiggyVest",
    username: "piggywise",
    email: "wise@piggyvest.com",
    phone: "+234 807 444 5566",
    date_joined: "2023-07-15",
    status: "blacklisted",
  },
  {
    organization: "Lendsqr",
    username: "admin_001",
    email: "admin@lendsqr.com",
    phone: "+234 701 999 1111",
    date_joined: "2023-08-20",
    status: "active",
  }
];

type User = {
  organization: string;
  username: string;
  email: string;
  phone: string;
  date_joined: string;
  status: string;
};

const UsersComponent: FC = () => {
  const [openActionIndex, setOpenActionIndex] = useState<number | null>(null);

    const columns: ColumnDef<User>[] = [
      { accessorKey: 'organization', header: 'Organization' },
      { accessorKey: 'username', header: 'Username' },
      { accessorKey: 'email', header: 'Email' },
      { accessorKey: 'phone', header: 'Phone Number' },
      { accessorKey: 'date_joined', header: 'Date Joined' },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ getValue }) => <StatusTag status={getValue() as string} />
      },
      {
        id: 'actions',
        header: '',
        cell: ({ row }) => (
          <RowActions
            open={openActionIndex === row.index}
            onClose={() => setOpenActionIndex(null)}
            onToggle={() =>
              setOpenActionIndex(prev => (prev === row.index ? null : row.index))
            }
          />
        )
      }
    ];
  return (
    <div className="user">

      <h2>Users</h2>

      <div className="stats-section">
        <UsersStats />
      </div>

      <div className="table-section">
        <FilterablePaginatedTable data={userData} columns={columns} />
      </div>
    </div>
  );
};

export default UsersComponent;
