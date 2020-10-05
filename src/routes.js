import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './screens/Main';
import Product from './screens/Product';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
    }}>
    <Stack.Screen
      name="Main"
      component={Main}
      options={Main.navigationOptions}
    />
    <Stack.Screen
      name="Product"
      component={Product}
      options={Product.navigationOptions}
    />
  </Stack.Navigator>
);

export default Routes;
