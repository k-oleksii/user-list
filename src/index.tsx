import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';
import { UserSearchProvider } from './lib/usersSearchContext';
import { StyledGlobal } from './styles/Layout/StyledGlobal';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UserSearchProvider>
    <Router>
      <StyledGlobal />
      <App />
    </Router>
  </UserSearchProvider>
);
