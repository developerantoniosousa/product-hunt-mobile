import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './screens/Main';

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
  </Stack.Navigator>
);

export default Routes;
