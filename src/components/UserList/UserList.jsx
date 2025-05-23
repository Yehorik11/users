import { UserCard } from '../UserCard';

const UserList = ({ users }) => {
  if (users.length === 0) {
    return (
      <h4 className='text-gray-800 dark:text-gray-400 text-center text-lg mt-6'>
        No users found
      </h4>
    );
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export { UserList };
