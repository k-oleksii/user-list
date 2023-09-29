import { Card } from '@components/Card';
import { useFetchUsers } from '@src/hooks/useFetchUsers';
import { Context } from '@src/lib/usersSearchContext';
import { StyledLoading } from '@src/styles/ui/StyledLoading';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';

export const Users = () => {
  const { loading, users } = useFetchUsers();
  const context = useContext(Context);

  const filteredUsers = users?.filter(user =>
    user.username
      .toLowerCase()
      .includes((context?.searchQuery || '').toLowerCase())
  );

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
        filteredUsers?.map(item => (
          <Col xs={12} md={4} key={item.id}>
            <Card {...item} />
          </Col>
        ))
      )}
    </Row>
  );
};
