import React from 'react';
import { View, StyleSheet } from 'react-native';

type propsT = {
  height: number;
  color: string;
};

const VerticalLine = ({ height, color }: propsT) => {
  return (
    <View
      style={[
        styles.verticalLine,
        { height: height || '100%', borderColor: color || 'black' },
      ]}
    />
  );
};

export default VerticalLine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalLine: {
    borderLeftWidth: 1,
  },
});
