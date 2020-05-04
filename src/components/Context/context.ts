import { createContext } from 'react';
import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
  },
  label: {
    backgroundColor: 'white',
    color: 'black',
  },
});
export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
  label: {
    backgroundColor: 'black',
    color: 'white',
  },
});

export type Theme = typeof lightTheme | typeof darkTheme;
type Context = {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
};
export const ThemeContext = createContext<Context>({
  theme: lightTheme,
  setTheme: () => {},
});
