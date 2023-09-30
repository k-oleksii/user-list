// Core
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

export const api = {
  async getUsers() {
    const data = await axios.get(`${url}/users`);

    return data?.data;
  },

  async getPosts(id: string) {
    const data = await axios.get(`${url}/users/${id}/posts`);

    return data?.data;
  },

  async getPostById(id: string) {
    const data = await axios.get(`${url}/posts/${id}`);

    return data?.data;
  },

  async getAlbums(id: string) {
    const data = await axios.get(`${url}/users/${id}/albums`);

    return data?.data;
  },

  async getAlbumById(id: string) {
    const data = await axios.get(`${url}/albums/${id}`);

    return data?.data;
  },
};
