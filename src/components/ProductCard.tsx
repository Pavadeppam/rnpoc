import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { productT } from '../store/productSlice';

type propsT = {
  item: productT;
};
const ProductCard = (props: propsT) => {
  const { title, price } = props.item;
  return (
    <View style={styles.cardContainer}>
      <Text>{title}</Text>
      <Text>{price}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: 'red',
    borderWidth: 1,
    margin: 5,
    padding: 5,
  },
});
