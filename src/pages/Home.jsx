import { useState } from 'react';

import { Spinner } from '../components/Spinner/Spinner';
import UserList from '../components/UserList/UserList';
import FilterInput from '../components/FilterInput/FilterInput';
import { useQuery } from '@tanstack/react-query';
import { usersApiService } from '../api/UsersApiService ';

export const Home = () => {
  const [query, setQuery] = useState('');

  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => usersApiService.fetchUsers(),
  });

  const filteredUsers = usersApiService.filterUsers(users, query);

  const handleFilter = (e) => {
    const value = e.target.value;

    setQuery(value);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>{error.message || 'Error loading'}</p>;
  }

  return (
    <main className='min-h-screen p-4 md:p-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800'>
          User List
        </h1>

        <FilterInput value={query} onChange={handleFilter} />

        <UserList users={filteredUsers} />
      </div>
    </main>
  );
};
