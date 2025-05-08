import { useEffect, useState } from 'react';
import { UserService } from '../api/UserService';
import { Spinner } from '../components/Spinner/Spinner';
import UserList from '../components/UserList/UserList';

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
    <main className='min-h-screen p-4 md:p-8 bg-gray-50'>
      <div>
        <h1>User List</h1>

        <input type='text' value={query} onChange={handleFilter} />

        <UserList users={filteredUsers} />
      </div>
    </main>
  );
};
