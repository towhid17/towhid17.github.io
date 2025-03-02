import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PageLoader } from './components/ui/PageLoader.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLoader />
    <App />
  </StrictMode>
);
