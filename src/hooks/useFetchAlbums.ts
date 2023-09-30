// Core
import { useEffect, useState } from 'react';

// Api
import { api } from '@src/api';

// Types
import { IAlbum } from '@src/types';

export const useFetchAlbums = (id: string) => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await api.getAlbums(id);

        setAlbums(response || []);
      } catch (error) {
        console.error('Error fetching albums:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  return { albums, loading };
};
