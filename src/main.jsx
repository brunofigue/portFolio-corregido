import React from 'react';
import ReactDOM from 'react-dom/client';  // Asegúrate de importar desde 'react-dom/client' para React 18
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Usamos createRoot para React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
