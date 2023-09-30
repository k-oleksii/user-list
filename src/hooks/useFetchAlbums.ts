import { api } from '@src/api';
import { IAlbum } from '@src/types';
import { useEffect, useState } from 'react';

export const useFetchAlbums = (hash: string) => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await api.getAlbums(hash);

        setAlbums(response || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  return { albums, loading };
};
