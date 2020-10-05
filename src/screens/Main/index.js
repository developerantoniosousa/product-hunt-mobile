import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import api from '../../services/api';
import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt',
  };

  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');
    const {docs} = response.data;
    this.setState({products: docs});
  };

  renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.productButton} onPress={() => {}}>
        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.products}
          keyExtractor={(item) => item._id.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default Main;
