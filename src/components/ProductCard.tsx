import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import { productT } from '../store/productSlice';

type propsT = {
  item: productT;
};
const ProductCard = (props: propsT) => {
  const { title, price, thumbnail } = props.item;
  // console.log(thumbnail);

  if (!title) return <ActivityIndicator size={25} animating={true} />;
  return (
    <View style={styles.cardContainer}>
      <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
        <Image source={{ uri: thumbnail }} style={styles.imgContainer} />
        <View style={styles.cardLableWrapeer}>
          <Text style={styles.titleLabel}>{title}</Text>
          <Text style={styles.priceLabel}>{price}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: 'gray',
    borderWidth: 0.25,
    margin: 10,
    // padding: 5,
    borderRadius: 12,
    borderBottomWidth: 0.5,
    backgroundColor: 'white',
  },
  pressableContainer: {
    borderColor: 'red',
    borderWidth: 1,
  },
  imgContainer: {
    height: 200,
    width: '100%',
    // borderRadius: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  cardLableWrapeer: {
    // borderColor: 'red',
    // borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: 5,
  },
  titleLabel: {
    // borderColor: 'red',
    // borderWidth: 2,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  priceLabel: {
    // borderColor: 'red',
    // borderWidth: 2,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});
