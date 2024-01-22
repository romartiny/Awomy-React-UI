import React from 'react';
import { createRoot } from 'react-dom/client';
import './app/assets/styles/index.css';
import App from './app/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

const rootElement = document.getElementById('awomy');

if (!rootElement) {
  throw new Error(
    'Root element not found.'
  );
}

const root = createRoot(rootElement);

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ErrorBoundary>
);
