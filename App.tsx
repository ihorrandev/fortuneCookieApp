import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import theme from './src/style/theme/theme';
import { Home } from './src/pages/Home';
import { View } from 'react-native';

export default function App() {
  return (
     <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
  );
}