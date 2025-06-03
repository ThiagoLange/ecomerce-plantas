import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist'; // Ícone de planta como logo
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAppTheme } from '../contexts/ThemeContext'; //

interface StoreLayoutProps {
  children: React.ReactNode;
}

const StoreLayout: React.FC<StoreLayoutProps> = ({ children }) => {
  const { mode, toggleThemeMode, theme } = useAppTheme(); //

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
            <LocalFloristIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: theme.palette.getContrastText(theme.palette.primary.main) }}>
            Plant Paradise
          </Typography>
          <IconButton onClick={toggleThemeMode} color="inherit" aria-label="toggle theme">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Área de Conteúdo */}
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        {children}
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: 'auto',
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          © {new Date().getFullYear()} Plant Paradise. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default StoreLayout;