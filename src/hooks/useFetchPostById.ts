import { api } from '@src/api';
import { IPost } from '@src/types';
import { useEffect, useState } from 'react';

export const useFetchPostById = (hash: string) => {
  const [post, setPost] = useState<IPost>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.getPostById(hash);

        setPost(response || {});
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  return { post, loading };
};
