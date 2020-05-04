import React, { useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import { ThemeContext, Theme, lightTheme, darkTheme } from './context';
import Profile from './profile';

type Props = {
  theme: Theme;
  handleChangeTheme: () => void;
};

const Component: React.FC<Props> = ({ theme, handleChangeTheme }) => {
  return (
    <View style={theme.container}>
      <Text onPress={handleChangeTheme} style={theme.label}>
        Change Theme
      </Text>
      <Profile name="januswel" />
    </View>
  );
};

const Container = () => {
  const [theme, setTheme] = useState(lightTheme);
  const handleChangeTheme = useCallback(() => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component theme={theme} handleChangeTheme={handleChangeTheme} />
    </ThemeContext.Provider>
  );
};

export default Container;
