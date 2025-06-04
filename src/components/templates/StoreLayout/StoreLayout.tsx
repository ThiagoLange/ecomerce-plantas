import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, IconButton, Paper } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Ícone para tema escuro
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Ícone para tema claro
import LocalFloristIcon from '@mui/icons-material/LocalFlorist'; // Logo
import { useThemeContext } from '../../../theme/ThemeContext';
import styles from './StoreLayout.module.css';
import PlantIcon from '../../atoms/PlantIcon/PlantIcon';

interface StoreLayoutProps {
  children: React.ReactNode;
}

const StoreLayout: React.FC<StoreLayoutProps> = ({ children }) => {
  const { themeMode, toggleTheme } = useThemeContext();

  return (
    <Box className={styles.layoutContainer}>
      <AppBar position="static" component="header" elevation={1} sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
        <Toolbar>
          <LocalFloristIcon sx={{ mr: 2, color: 'primary.main' }} fontSize="large" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Garden Plants E-Shop
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
            {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container component="main" sx={{ py: 4, flexGrow: 1 }}>
        <Paper elevation={0} sx={{ p: { xs: 2, sm: 3 }, bgcolor: 'background.default' }}> {/* Conteúdo principal usa default */}
            {children}
        </Paper>
      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          bgcolor: 'background.paper', // Footer usa 'paper'
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}{' '}
            Garden Plants E-Shop. Todos os direitos reservados.
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{mt: 0.5}}>
            <PlantIcon size="sm" /> Plantando felicidade no seu lar <PlantIcon size="sm" />
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default StoreLayout;