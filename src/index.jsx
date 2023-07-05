import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routes from './Routes';
import './styles/index.scss';

const root = document.getElementById('root');
if (!root) {
  throw new Error('No root div found!');
}

createRoot(root).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
