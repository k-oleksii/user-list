import { Container, Navbar } from 'react-bootstrap';

export const Footer = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Text className='mx-auto'>
          &copy; {new Date().getFullYear()} User list
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};
