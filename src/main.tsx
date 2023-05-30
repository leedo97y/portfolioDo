import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
