// Core
import { useEffect, useState } from 'react';

// Api
import { api } from '@src/api';

// Types
import { IPost } from '@src/types';

export const useFetchPosts = (id: string) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.getPosts(id);

        setPosts(response || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading };
};
