import { Layout } from '@components/Layout/Index';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AlbumDetailsViewPage } from './pages/AlbumDetailsView';
import { AlbumsPage } from './pages/Albums';
import { HomePage } from './pages/Home';
import { PostDetailsViewPage } from './pages/PostDetailsView';
import { PostsPage } from './pages/Posts';

export const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<HomePage />} />
        <Route path='/posts/:userId/' element={<PostsPage />} />
        <Route path='/post/:postId/' element={<PostDetailsViewPage />} />
        <Route path='/albums/:userId' element={<AlbumsPage />} />
        <Route path='/album/:albumId' element={<AlbumDetailsViewPage />} />
      </Route>
    </Routes>
  );
};
