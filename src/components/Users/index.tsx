import { Card } from '@components/Card';
import { useFetchUsers } from '@src/hooks/useFetchUsers';
import { StyledLoading } from '@src/styles/ui/StyledLoading';
import { Col, Row } from 'react-bootstrap';

export const Users = () => {
  const { loading, users } = useFetchUsers();

  return (
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
        users?.map(item => (
          <Col xs={12} md={4} key={item.id}>
            <Card {...item} />
          </Col>
        ))
      )}
    </Row>
  );
};
