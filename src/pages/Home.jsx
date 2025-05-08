import { useEffect, useState } from 'react';
import { UserService } from '../api/UserService';
import { Spinner } from '../components/Spinner/Spinner';
import UserList from '../components/UserList/UserList';
import FilterInput from '../components/FilterInput/FilterInput';

const userService = new UserService(
  'https://jsonplaceholder.typicode.com/users',
);

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    userService
      .fetchUsers()
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  const handleFilter = (e) => {
    const value = e.target.value;

    setQuery(value);
    setFilteredUsers(userService.filterUsers(users, value));
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
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
