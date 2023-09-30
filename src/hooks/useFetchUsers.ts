// Core
import { useEffect, useState } from 'react';

// Api
import { api } from '@src/api';

// Types
import { IUser } from '@src/types';

export const useFetchUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.getUsers();

        setUsers(response || []);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading };
};
