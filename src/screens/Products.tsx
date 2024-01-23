import { View, Text, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/useAppStore';
import { fetchProducts } from '../store/productSlice';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.productsData);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          return <ProductCard item={item} />;
        }}
      />
      {/* <Text>{JSON.stringify(products)}</Text> */}
    </View>
  );
};

export default Products;
