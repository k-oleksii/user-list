import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { StyledGlobal } from './styles/Layout/StyledGlobal';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <StyledGlobal />
    <App />
  </Router>
);
