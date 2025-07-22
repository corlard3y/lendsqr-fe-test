import { useQuery } from '@tanstack/react-query';

export const GetUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('/data/users.json');
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    },
  });
