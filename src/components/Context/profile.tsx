import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ThemeContext, Theme } from './context';

type ContainerProps = {
  name: string;
};

type Props = {
  theme: Theme;
} & ContainerProps;

const Component: React.FC<Props> = ({ name, theme }) => {
  return <Text style={theme.label}>{name}</Text>;
};

const Container: React.FC<ContainerProps> = props => {
  const { theme } = useContext(ThemeContext);
  return <Component {...props} theme={theme} />;
};

export default Container;
