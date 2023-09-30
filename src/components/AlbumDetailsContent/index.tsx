// Core
import { FC } from 'react';
import { useParams } from 'react-router-dom';

// Components
import { DetailsContent } from '@components/DetailsContent';

// Hooks
import { useFetchAlbumById } from '@src/hooks/useFetchAlbumById';

// Styles
import { StyledLoading } from '@src/styles/ui/StyledLoading';

export const AlbumDetailsContent: FC = () => {
  const { albumId } = useParams();
  const { album, loading } = useFetchAlbumById(albumId as string);

  return (
    <>
      {loading ? (
        <StyledLoading>
          <span
            className='spinner-border spinner-border-sm'
            aria-hidden='true'
          ></span>
          <span role='status'>Loading...</span>
        </StyledLoading>
      ) : (
        <DetailsContent title={album?.title} />
      )}
    </>
  );
};
