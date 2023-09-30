// Core
import { useEffect, useState } from 'react';

// Api
import { api } from '@src/api';

// Types
import { IAlbum } from '@src/types';

export const useFetchAlbumById = (id: string) => {
  const [album, setAlbum] = useState<IAlbum>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await api.getAlbumById(id);

        setAlbum(response || {});
      } catch (error) {
        console.error('Error fetching album:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbum();
  }, []);

  return { album, loading };
};
