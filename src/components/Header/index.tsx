// Core
import { ChangeEvent, FC, useContext } from 'react';
import { Container, Form, Navbar } from 'react-bootstrap';

// Context
import { Context } from '@src/lib/usersSearchContext';

// Styles
import { debounce } from '@src/helpers/debounce';
import { StyledLogo } from '@src/styles/Components/StyledLogo';

export const Header: FC = () => {
  const context = useContext(Context);

  if (!context) {
    return;
  }

  const { setSearchQuery } = context;

  const handleSearchInputChange = debounce(
    (e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value),
    200
  );

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <StyledLogo to='/'>
          User list
          <span>ProxySeller</span>
        </StyledLogo>
        <Form className='d-flex'>
          <Form.Control
            type='search'
            placeholder='Search'
            aria-label='Search'
            onChange={handleSearchInputChange}
          />
        </Form>
      </Container>
    </Navbar>
  );
};
