import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from './style';
const Products = ({ products }) => {

  return (
    <View style={styles.Product_container}>
      <Image style={styles.Product_image} source={{ uri: products.imgURL }} />
      <View style={styles.Product_TextContainer}>
        <Text style={styles.Product_title}>{products.title}</Text>
        <Text style={styles.Product_price}>{products.price}</Text>
        {!products.inStock && <Text style={styles.Product_inStock}>Stokta Yok</Text>}
      </View>
    </View>
  );
};


export default Products;