import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { usersApiService } from '../api/UsersApiService ';

export const UseGetUsers = (query) => {
  const [filteredUsers, setFilteredUsers] = useState([]);

  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => usersApiService.fetchUsers(),
  });

  useEffect(() => {
    if (users.length > 0) {
      setFilteredUsers(usersApiService.filterUsers(users, query));
    }
  }, [query, users]);

  return { filteredUsers, isLoading, isError, error };
};
