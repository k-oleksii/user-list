import { api } from '@src/api';
import { IPost } from '@src/types';
import { useEffect, useState } from 'react';

export const useFetchPosts = (hash: string) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.getPosts(hash);

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
