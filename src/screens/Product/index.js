import React from 'react';
import WebView from 'react-native-webview';

const Product = ({route}) => (
  <WebView source={{uri: route.params.product.url}} />
);

Product.navigationOptions = ({route}) => ({
  title: route.params.product.title,
});

export default Product;
