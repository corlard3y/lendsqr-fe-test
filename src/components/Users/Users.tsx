import { useMemo } from "react";
import { GetUsers } from "../../queries";
import { FilterablePaginatedTable } from "../../shared/Table";
import { UsersStats } from "./UsersStats";

export default function Users() {
  const { data: users, isLoading, isError } = GetUsers();

  const userData = useMemo(() => {
    return users?.map((user: any) => ({
      id: user.id,
      organization: user.organization || user.organizationName || 'N/A',
      username: user.firstName?.toLowerCase() || 'user',
      email: user.email,
      phoneNumber: user.phoneNumber,
      dateJoined: user.registered || '2023-01-01',
      status: user.status || 'active',
    }));
  }, [users]);

  if (isLoading) return <p>Loading users...</p>;
  if (isError || !users) return <p>Error loading users.</p>;



  // const userData = users.map((user: any) => ({
  //   id: user.id,
  //   organization: user.organization || user.organizationName || 'N/A',
  //   username: user.firstName?.toLowerCase() || 'user',
  //   email: user.email,
  //   phoneNumber: user.phoneNumber,
  //   dateJoined: user.registered || '2023-01-01',
  //   status: user.status || 'active',
  // }));

  const columns = [
    { accessorKey: 'organization', header: 'Organization' },
    { accessorKey: 'username', header: 'Username' },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'phoneNumber', header: 'Phone Number' },
    { accessorKey: 'dateJoined', header: 'Date Joined' },
    { accessorKey: 'status', header: 'Status' },
  ];

  // const columns = [
  //   { id: 'organization', Header: 'Organization', accessorKey: 'organization' },
  //   { id: 'username', Header: 'Username', accessorKey: 'username' },
  //   { id: 'email', Header: 'Email', accessorKey: 'email' },
  //   { id: 'phoneNumber', Header: 'Phone Number', accessorKey: 'phoneNumber' },
  //   { id: 'dateJoined', Header: 'Date Joined', accessorKey: 'dateJoined' },
  //   { id: 'status', Header: 'Status', accessorKey: 'status' },
  // ];

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
}
