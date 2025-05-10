export class BaseApiService {
  #apiUrl = 'https://jsonplaceholder.typicode.com';

  async fetch(endpoint, onError) {
    const response = await fetch(`${this.#apiUrl}/${endpoint}`);

    if (!response.ok) onError(response) || this.onError(response);

    const data = await response.json();

    return data;
  }

  onError(response) {
    console.error('[BaseApiService] Unable to fetch', response.status);
  }
}
