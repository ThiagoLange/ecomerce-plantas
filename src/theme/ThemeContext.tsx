// src/theme/ThemeContext.tsx
import React, { createContext, useState, useMemo, useContext, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import type { Theme, PaletteMode } from '@mui/material/styles'; // PaletteMode importado
import { lightTheme, darkTheme } from './theme';

interface ThemeContextType {
  themeMode: PaletteMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a AppThemeProvider');
  }
  return context;
};

interface AppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<PaletteMode>('light');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const [muiTheme, componentsCss] = useMemo((): [Theme, string] => {
    const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;
   
    const cssString = currentTheme.componentsCss || '';
    return [currentTheme, cssString];
  }, [themeMode]);

  useEffect(() => {
    const styleId = 'custom-theme-variables';
    let styleTag = document.getElementById(styleId) as HTMLStyleElement | null;
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = componentsCss;
  }, [componentsCss]);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};