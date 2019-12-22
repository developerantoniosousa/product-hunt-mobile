import React from 'react';
import Webview from 'react-native-webview';

export default function Product({ navigation }) {
  return (
    <Webview source={{ uri: navigation.getParam('item').url }} style={{ flex: 1 }} />
  );
}

Product.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('item').title,
});
