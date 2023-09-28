import { FC } from 'react';
import { Container, Form, Navbar } from 'react-bootstrap';

export const Header: FC = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>User list</Navbar.Brand>
        <Form className='d-flex'>
          <Form.Control
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
        </Form>
      </Container>
    </Navbar>
  );
};
