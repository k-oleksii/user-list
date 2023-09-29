import { Layout } from '@components/Layout/Index';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AlbumsPage } from './pages/Albums';
import { HomePage } from './pages/Home';
import { PostsPage } from './pages/Posts';

export const App: FC = () => {
  return (
    <Routes>
      <Route path='/user-list/' element={<Layout />}>
        <Route path='/user-list/' element={<HomePage />} />
        <Route path='/posts/:userId' element={<PostsPage />} />
        <Route path='/albums/:userId' element={<AlbumsPage />} />
      </Route>
    </Routes>
  );
};
