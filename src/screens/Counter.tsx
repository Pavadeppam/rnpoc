import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/useAppStore';
import { increment, decrement } from '../store/counterSlice';
const Counter = () => {
  const count = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count.countValue}</Text>
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btnBox}
          onPress={() => dispatch(increment(10))}
        >
          <Text style={styles.btnLabel}>Increment</Text>
        </Pressable>
        <Pressable
          style={styles.btnBox}
          onPress={() => dispatch(decrement(10))}
        >
          <Text style={styles.btnLabel}>Decrement</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btnBox: {
    borderWidth: 0.5,
    borderColor: 'red',
    color: 'red',
    margin: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    width: 150,
    height: 40,
    alignSelf: 'center',
  },
  btnLabel: {
    fontSize: 20,
    fontWeight: 'bold',

    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 5,
  },
});
