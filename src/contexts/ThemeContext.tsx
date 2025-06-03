import React, { createContext, useState, useMemo, useContext } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material';
import { getThemeOptions } from '../theme/theme'; // Ajuste o caminho se necessário

interface ThemeContextType {
  mode: PaletteMode;
  toggleThemeMode: () => void;
  theme: Theme; // 'theme' está definido aqui no tipo
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface AppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const toggleThemeMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // 'theme' é criado aqui
  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

  return (
    // 'theme' é fornecido no valor do Provider aqui
    <ThemeContext.Provider value={{ mode, toggleThemeMode, theme }}>
      <MUIThemeProvider theme={theme}>
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useAppTheme must be used within an AppThemeProvider');
  }
  return context; // Retorna o objeto completo, incluindo 'theme'
};