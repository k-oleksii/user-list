import { api } from '@src/api';
import { IAlbum } from '@src/types';
import { useEffect, useState } from 'react';

export const useFetchAlbumById = (hash: string) => {
  const [album, setAlbum] = useState<IAlbum>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await api.getAlbumById(hash);

        setAlbum(response || {});
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbum();
  }, []);

  return { album, loading };
};
