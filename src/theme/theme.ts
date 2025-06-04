// src/theme/themes.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

const lightPalette = {
  primary: {
    main: '#8d6e63', // Um tom de marrom principal
  },
  secondary: {
    main: '#c2a39a', // Um tom de marrom mais claro para secundário
  },
  background: {
    default: '#e1d1c8', // Fundo geral claro
    paper: '#f7f1ed',   // Fundo de componentes como Card, Paper
  },
  text: {
    primary: '#3e2723', // Texto principal escuro para contraste
    secondary: '#5d4037', // Texto secundário
  },
};

const darkPalette = {
  primary: {
    main: '#4caf50', // Um tom de verde principal
  },
  secondary: {
    main: '#0a3007', // Um tom de verde mais escuro para secundário
  },
  background: {
    default: '#001600', // Fundo geral escuro
    paper: '#082005',   // Fundo de componentes como Card, Paper
  },
  text: {
    primary: '#e8f5e9', // Texto principal claro para contraste
    secondary: '#a5d6a7', // Texto secundário
  },
};

const commonComponents: ThemeOptions['components'] = {
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        backgroundImage: 'none',
      }),
    },
  },
  MuiCard: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
      }),
    },
  },
};

// Definindo uma interface que estende Theme para incluir componentsCss
interface CustomTheme extends Theme {
  componentsCss?: string;
}

interface CustomThemeOptions extends ThemeOptions {
  componentsCss?: string;
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...lightPalette,
  },
  components: {
    ...commonComponents,
  },
  componentsCss: `
    :root {
      --button-primary-bg: ${lightPalette.secondary.main};
      --button-primary-text: ${lightPalette.text.primary};
      --button-primary-hover-bg: ${lightPalette.primary.main};
      --button-secondary-bg: ${lightPalette.background.paper};
      --button-secondary-text: ${lightPalette.primary.main};
      --button-secondary-border: ${lightPalette.primary.main};
      --button-secondary-hover-bg: ${lightPalette.background.default};
    }
  `,
} as CustomThemeOptions) as CustomTheme;

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...darkPalette,
  },
  components: {
    ...commonComponents,
  },
  componentsCss: `
    :root {
      --button-primary-bg: ${darkPalette.secondary.main};
      --button-primary-text: ${darkPalette.text.primary};
      --button-primary-hover-bg: ${darkPalette.primary.main};
      --button-secondary-bg: ${darkPalette.background.paper};
      --button-secondary-text: ${darkPalette.primary.main};
      --button-secondary-border: ${darkPalette.primary.main};
      --button-secondary-hover-bg: ${darkPalette.background.default};
    }
  `,
} as CustomThemeOptions) as CustomTheme;