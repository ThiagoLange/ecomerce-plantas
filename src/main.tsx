import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.tsx';
import { AppThemeProvider } from './contexts/ThemeContext'; // Importar o novo provider
import './index.css';
// Não precisamos mais do createTheme e ThemeProvider do MUI aqui,
// pois o AppThemeProvider cuidará disso.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider> {/* Usar o AppThemeProvider */}
      <CssBaseline /> {/* CssBaseline ajuda a normalizar e aplicar o background do tema */}
      <App />
    </AppThemeProvider>
  </StrictMode>,
);