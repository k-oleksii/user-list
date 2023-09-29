import { useFetchPosts } from '@src/hooks/useFetchPosts';
import { StyledLoading } from '@src/styles/ui/StyledLoading';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { PostCard } from './PostCard';

export const Posts = () => {
  const { userId } = useParams();

  const { loading, posts } = useFetchPosts(userId as string);
  console.log(posts);

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
