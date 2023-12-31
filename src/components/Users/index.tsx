// Core
import { FC, memo, useCallback, useContext, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

// Components
import { Card } from '@components/Card';

// Hooks
import { useFetchUsers } from '@src/hooks/useFetchUsers';

// Context
import { Context } from '@src/lib/usersSearchContext';

// Styles
import { StyledLoading } from '@src/styles/ui/StyledLoading';

export const Users: FC = memo(() => {
  const [sortUser, setSortUser] = useState(true);
  const { loading, users } = useFetchUsers();
  const context = useContext(Context);

  const filteredUsers = users?.filter(user =>
    user.username
      .toLowerCase()
      .includes((context?.searchQuery || '').toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const usernameA = a.username.toLowerCase();
    const usernameB = b.username.toLowerCase();

    if (sortUser) {
      return usernameA > usernameB ? 1 : -1;
    } else {
      return usernameA < usernameB ? 1 : -1;
    }
  });

  const sortedHandler = useCallback(() => {
    setSortUser(prevSortUser => !prevSortUser);
  }, []);

  return (
    <>
      <div className='d-flex justify-content-between mb-4'>
        <h1 className='fs-3'>Users</h1>
        <Button variant='primary' size='sm' onClick={sortedHandler}>
          {sortUser ? 'a-z' : 'z-a'}
        </Button>
      </div>
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
          sortedUsers?.map(item => (
            <Col xs={12} md={4} key={item.id}>
              <Card {...item} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
});
