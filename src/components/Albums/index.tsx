// Core
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// Hooks
import { useFetchAlbums } from '@src/hooks/useFetchAlbums';

// Components
import { AlbumCard } from './AlbumCard';

// Styles
import { StyledLoading } from '@src/styles/ui/StyledLoading';

export const Albums: FC = () => {
  const { userId } = useParams();

  const { loading, albums } = useFetchAlbums(userId as string);

  return (
    <>
      <h1 className='mb-4 fs-3'>User Albums</h1>
      <Row className='row-gap-4'>
        {loading ? (
          <Col>
            <StyledLoading>
              <span
                className='spinner-border spinner-border-sm'
                aria-hidden='true'
              ></span>
              <span role='status'>Loading...</span>
            </StyledLoading>
          </Col>
        ) : (
          albums?.map(item => (
            <Col xs={12} md={4} key={item.id}>
              <AlbumCard {...item} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};
