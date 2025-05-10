import { BaseApiService } from './BaseApiService';

class UsersApiService extends BaseApiService {
  async getUsers() {
    return await this.fetch('/users');
  }

  onError(errorResponse) {
    console.error('[UsersApiService] Unable to fetch', errorResponse.status);
  }
}

export const usersApiService = new UsersApiService();
