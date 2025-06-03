import type { PaletteMode } from '@mui/material';
import type { ThemeOptions } from '@mui/material/styles';

export const getThemeOptions = (mode: PaletteMode): ThemeOptions => {
  if (mode === 'light') {
    return {
      palette: {
        mode: 'light',
        primary: {
          main: '#8D6E63', // Um marrom médio para elementos primários
        },
        secondary: {
          main: '#c2a39a', // Marrom mais claro sugerido como secundário
        },
        background: {
          default: '#FEFBF8', // Um off-white muito claro para o fundo geral
          paper: '#e1d1c8',    // O marrom mais claro sugerido para componentes Paper
        },
        text: {
          primary: 'rgba(0, 0, 0, 0.87)',
          secondary: 'rgba(0, 0, 0, 0.6)',
        },
      },
    };
  }
  // Dark mode (green based)
  return {
    palette: {
      mode: 'dark',
      primary: {
        main: '#66BB6A', // Um verde médio para elementos primários
      },
      secondary: {
        main: '#2E7D32', // Um verde mais escuro para secundário
      },
      background: {
        default: '#001600', // Verde bem escuro sugerido para o fundo geral
        paper: '#0a3007',    // Verde escuro (um pouco mais claro) sugerido para Paper
      },
      text: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.7)',
      },
    },
  };
};