import { DetailsContent } from '@components/DetailsContent';
import { useFetchAlbumById } from '@src/hooks/useFetchAlbumById';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const AlbumDetailsContent: FC = () => {
  const { albumId } = useParams();
  const { album } = useFetchAlbumById(albumId as string);

  if (!album) {
    return null;
  }

  return <DetailsContent title={album.title} />;
};
