import { useMemo, useState } from "react";
import { GetUsers } from "../../queries";
import { FilterablePaginatedTable } from "../../shared/Table";
import { UsersStats } from "./UsersStats";
import { StatusTag } from "./StatusTag";
import { RowActions } from "./RowActions";
import type { ColumnDef } from "@tanstack/react-table";

type User = {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
};

export default function Users() {
  const { data: users, isLoading, isError } = GetUsers();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const userData = useMemo(() => {
    return users?.map((user: any) => ({
      id: user.id,
      organization: user.organization || user.organizationName || 'N/A',
      username: user.username?.toLowerCase() || 'user',
      email: user.email,
      phoneNumber: user.phoneNumber,
      dateJoined: user.dateJoined || '2023-01-01',
      status: user.status || 'inactive',
    }));
  }, [users]);

  if (isLoading) return <p>Loading users...</p>;
  if (isError || !users) return <p>Error loading users.</p>;

  const columns: ColumnDef<User>[] = [
    { accessorKey: 'organization', header: 'Organization' },
    { accessorKey: 'username', header: 'Username' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'phoneNumber', header: 'Phone Number' },
    { accessorKey: 'dateJoined', header: 'Date Joined' },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ getValue }: any) => <StatusTag status={getValue()} />,
    },
    {
      id: 'actions',
      header: '',
      cell: ({ row }) => (
        <RowActions
          open={openDropdown === row.original.id}
          onToggle={() =>
            setOpenDropdown(prev =>
              prev === row.original.id ? null : row.original.id
            )
          }
          onClose={() => setOpenDropdown(null)}
        />
      ),
      enableSorting: false,
    },
  ];

  return (
    <div className="user">
      <h2>Users</h2>

      <div className="stats-section">
        <UsersStats />
      </div>

      <div className="table-section">
        <FilterablePaginatedTable data={userData} columns={columns} filterableKeys={['organization', 'username', 'email', 'phoneNumber', 'dateJoined', 'status']} />
      </div>
    </div>
  );
}
