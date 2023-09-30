// Core
import { useEffect, useState } from 'react';

// Api
import { api } from '@src/api';

// Types
import { IPost } from '@src/types';

export const useFetchPostById = (id: string) => {
  const [post, setPost] = useState<IPost>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.getPostById(id);

        setPost(response || {});
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  return { post, loading };
};
