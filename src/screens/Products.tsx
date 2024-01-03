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
      <Text>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <ProductCard item={item} />;
        }}
      />
    </View>
  );
};

export default Products;
