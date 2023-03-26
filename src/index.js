import React from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
if (el.hasChildNodes()) {
  const root = hydrateRoot(el);
  root.render(<App />);
} else {
  const root = createRoot(el);
  root.render(<App />);
}
