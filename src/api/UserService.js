import { User } from '../models/User';

export class UserService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async fetchUsers() {
    const response = await fetch(this.apiUrl);
    if (!response.ok) throw new Error('Failed to fetch users');

    const data = await response.json();
    return data.map((userData) => new User(userData));
  }

  filterUsers(users, query) {
    if (!query.trim()) return users;
    return users.filter((user) => user.matches(query));
  }
}
