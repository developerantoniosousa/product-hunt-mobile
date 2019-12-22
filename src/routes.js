import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

const Navigator = createAppContainer(
  createStackNavigator(
    {
      Main,
      Product,
    },
    {
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#da552f',
        },
        headerTintColor: '#FFF',
      },
    },
  ),
);

export default Navigator;
