import { User } from '../models/User';

const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

export class UsersApiService {
  constructor() {
    this.usersApiUrl = USERS_API_URL;
  }

  async fetchUsers() {
    const response = await fetch(this.usersApiUrl);
    if (!response.ok) throw new Error('Failed to fetch users');

    const data = await response.json();
    return data.map((userData) => new User(userData));
  }

  filterUsers(users, query) {
    if (!query.trim()) return users;
    return users.filter((user) => user.matches(query));
  }
}

export const usersApiService = new UsersApiService();
