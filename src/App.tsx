// src/App.tsx
//import React from 'react';
import PlantStore from './pages/PlantStore/PlantStore';
import { AppThemeProvider } from './theme/ThemeContext';
import './App.css'; // ADICIONE ESTA LINHA PARA IMPORTAR OS ESTILOS

function App() {
  return (
    <AppThemeProvider>
      <PlantStore />
    </AppThemeProvider>
  );
}

export default App;