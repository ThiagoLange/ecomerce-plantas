import React from 'react';
import { useAppTheme } from './contexts/ThemeContext';
import Button from '@mui/material/Button'; // Usando o botão do MUI para o toggle
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';

// Seus componentes customizados (PlantCard, PlantGrid etc.)
// import PlantCard from './components/molecules/PlantCard/PlantCard';
// import PlantGrid from './components/organisms/PlantGrid/PlantGrid';

function App() {
  // Linha onde o erro ocorre:
  const { mode, toggleThemeMode, theme } = useAppTheme();

  // Para depuração, você pode tentar:
  // const contextValue = useAppTheme();
  // console.log(contextValue); // Verifique no console se 'theme' está presente
  // const { mode, toggleThemeMode, theme } = contextValue;


  return (
    <Box sx={{
      padding: 2,
      minHeight: '100vh',
      // Aplicando a cor de fundo do tema diretamente para teste
      backgroundColor: theme.palette.background.default,
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography
          variant="h4"
          component="h1"
          // Aplicando a cor do texto do tema
          sx={{ color: theme.palette.text.primary }}
        >
          E-commerce de Plantas
        </Typography>
        <IconButton onClick={toggleThemeMode} color="inherit" aria-label="toggle theme">
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>

      <Typography
        variant="h6"
        gutterBottom
        // Aplicando a cor secundária do texto do tema
        sx={{ color: theme.palette.text.secondary }}
      >
        Modo Atual: {mode}
      </Typography>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h5">Seção com Paper 1</Typography>
        <Typography>
          Este componente Paper usa a cor `background.paper` do tema.
          A cor de fundo geral é `background.default`.
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 1, marginRight: 1 }}>
          Botão Primário
        </Button>
        <Button variant="contained" color="secondary" sx={{ marginTop: 1 }}>
          Botão Secundário
        </Button>
      </Paper>

      <Paper elevation={6} sx={{ padding: 3, marginBottom: 2 }}>
        <Typography variant="h5">Seção com Paper 2 (Elevação Maior)</Typography>
        <Typography>
          Outro exemplo de Paper para demonstrar a consistência do tema.
          O texto também deve se adaptar ao modo claro/escuro.
        </Typography>
      </Paper>

      {/*
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Nossos Produtos</Typography>
      <PlantGrid plants={samplePlants} onAddToCart={handleAddToCart} />
      */}
    </Box>
  );
}

export default App;