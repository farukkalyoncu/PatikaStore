import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList } from 'react-native';
import style from "./component/style";
import Products from './component/products';
import products_data from './products.json';

function App() {
  const renderProduct = ({ item }) => {
  return <Products products={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={style.header_text}>PATİKASTORE</Text>
      <TextInput
        style={style.search_text}
        
        placeholder='Ara..'
      />
      <FlatList
        numColumns='2'
        data={products_data}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  }
});

export default App;