import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import { ThemeProvider } from 'styled-components';
import theme from './src/style/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}