import { Context } from '@src/lib/usersSearchContext';
import { ChangeEvent, FC, useContext } from 'react';
import { Container, Form, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Header: FC = () => {
  const context = useContext(Context);

  if (!context) {
    return;
  }

  const { searchQuery, setSearchQuery } = context;

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Link to='/'>User list</Link>
        <Form className='d-flex'>
          <Form.Control
            type='search'
            placeholder='Search'
            aria-label='Search'
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </Form>
      </Container>
    </Navbar>
  );
};
