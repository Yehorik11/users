import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { usersApiService } from '../api/UsersApiService';

export const useGetUsers = (query) => {
  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => usersApiService.getUsers(),
  });

  const filteredUsers = useMemo(() => {
    if (!query?.trim()) return users;

    return users.filter(
      ({ id, name, username, email, phone, website, address, company }) =>
        [
          id?.toString(),
          name,
          username,
          email,
          phone,
          website,
          address?.street,
          address?.suite,
          address?.city,
          address?.zipcode,
          address?.geo?.lat,
          address?.geo?.lng,
          company?.name,
          company?.catchPhrase,
          company?.bs,
        ].some((field) => field?.toLowerCase?.().includes(query.toLowerCase())),
    );
  }, [users, query]);

  return {
    filteredUsers,
    isLoading,
    isError,
    error,
  };
};
