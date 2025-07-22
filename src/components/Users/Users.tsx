import { useMemo, useState } from "react";

import { GetUsers } from "../../queries";
import { FilterablePaginatedTable } from "../../shared/Table";
import { UsersStats } from "./UsersStats";
import { StatusTag } from "./StatusTag";
import { RowActions } from "./RowActions";

import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "../../types/users";

export default function Users() {
  const { data: users, isLoading, isError } = GetUsers();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const userData: User[] = useMemo(() => {
    return users?.map((user: Partial<User> & { organizationName?: string }) => ({
      id: user.id ?? 0,
      organization: user.organization || user.organizationName || "N/A",
      username: user.username?.toLowerCase() || "user",
      email: user.email || "noemail@example.com",
      phoneNumber: `+234${String(user.phoneNumber)}`,
      dateJoined: user.dateJoined || "2023-01-01",
      status: user.status || "inactive",
    })) ?? [];
  }, [users]);

  if (isLoading) return <p>Loading users...</p>;
  if (isError || !users) return <p>Error loading users.</p>;

  const columns: ColumnDef<User>[] = [
    { accessorKey: "organization", header: "Organization" },
    { accessorKey: "username", header: "Username" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "phoneNumber", header: "Phone Number" },
    { accessorKey: "dateJoined", header: "Date Joined" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue }) => <StatusTag status={getValue() as string} />,
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <RowActions
          id={row.original.id}
          open={openDropdown === row.original.id}
          onToggle={() =>
            setOpenDropdown((prev) =>
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
        <UsersStats users={users} />
      </div>

      <div className="table-section">
        <FilterablePaginatedTable
          data={userData}
          columns={columns}
          filterableKeys={[
            "organization",
            "username",
            "email",
            "phoneNumber",
            "dateJoined",
            "status",
          ]}
        />
      </div>
    </div>
  );
}
