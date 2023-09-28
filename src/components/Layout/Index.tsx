import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <div className='app d-flex flex-column h-100'>
      <Header />
      <main className='flex-fill py-5 bg-light bg-gradient'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};
