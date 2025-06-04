import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import './index.css'; // Remova ou ajuste se não for usar estilos globais aqui

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);