import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import type { PropsWithChildren } from 'react';

type IconProps = PropsWithChildren<{
  name: string;
}>;
const caretMenuComponent = ({ name }: IconProps) => {
  return <Icon name="caret-down" size={30} color="black" />;
};

export default caretMenuComponent;
