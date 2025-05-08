import { Component } from 'react';
import UserCard from '../UserCard/UserCard';

export default class UserList extends Component {
  render() {
    const { users } = this.props;

    if (users.length === 0) {
      return <h4>No users found</h4>;
    }

    return (
      <div>
        <ul>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      </div>
    );
  }
}
