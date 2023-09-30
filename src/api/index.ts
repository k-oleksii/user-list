import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

export const api = {
  async getUsers() {
    const data = await axios.get(`${url}/users`);

    return data?.data;
  },

  async getPosts(hash: string) {
    const data = await axios.get(`${url}/users/${hash}/posts`);

    return data?.data;
  },

  async getPostById(hash: string) {
    const data = await axios.get(`${url}/posts/${hash}`);

    return data?.data;
  },

  async getAlbums(hash: string) {
    const data = await axios.get(`${url}/users/${hash}/albums`);

    return data?.data;
  },

  async getAlbumById(hash: string) {
    const data = await axios.get(`${url}/albums/${hash}`);

    return data?.data;
  },
};
