import React from 'react';
import PlantStore from '../src/components/pages/PlantStore'; // Importe a nova página da loja

function App() {
  // O AppThemeProvider e CssBaseline já estão em main.tsx,
  // então PlantStore terá acesso ao contexto do tema.
  return <PlantStore />;
}

export default App;