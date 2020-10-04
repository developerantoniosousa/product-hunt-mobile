import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './screens/Main';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={Main} />
  </Stack.Navigator>
);

export default Routes;
