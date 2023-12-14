import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Routes from './Routes';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root element not found!');
}

createRoot(root).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
