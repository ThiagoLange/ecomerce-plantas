import React from 'react';
import PlantStore from './pages/PlantStore/PlantStore';
import { AppThemeProvider } from './theme/ThemeContext';

function App() {
  return (
    <AppThemeProvider>
      <PlantStore />
    </AppThemeProvider>
  );
}

export default App;