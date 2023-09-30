// Core
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

// Components
import { App } from './App';

// Context
import { UserSearchProvider } from './lib/usersSearchContext';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledGlobal } from './styles/Layout/StyledGlobal';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UserSearchProvider>
    <Router>
      <StyledGlobal />
      <App />
    </Router>
  </UserSearchProvider>
);
