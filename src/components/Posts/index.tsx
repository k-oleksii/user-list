// Core
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// Components
import { PostCard } from './PostCard';

// Hooks
import { useFetchPosts } from '@src/hooks/useFetchPosts';

// Styles
import { StyledLoading } from '@src/styles/ui/StyledLoading';

export const Posts: FC = () => {
  const { userId } = useParams();

  const { loading, posts } = useFetchPosts(userId as string);

  return (
    <>
      <h1 className='mb-4 fs-3'>User Posts</h1>
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
          posts?.map(item => (
            <Col xs={12} md={4} key={item.id}>
              <PostCard {...item} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};
