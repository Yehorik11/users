import { Component } from 'react';

export default class UserCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user } = this.props;
    return (
      <li>
        <p>{user.email}</p>
        <p>{user.username}</p>
      </li>
    );
  }
}
