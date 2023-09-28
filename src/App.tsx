import { Layout } from '@components/Layout/Index';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home';

export const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  );
};
