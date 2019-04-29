import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Home from '~/pages/Home';
import Search from '~/pages/Search';
import Favorites from '~/pages/Favorites';
import Profile from '~/pages/Profile';
import Cart from '~/pages/Cart';

import Product from '~/pages/Product';

import { colors } from '~/styles';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      User: createBottomTabNavigator(
        {
          Home,
          Search,
          Favorites,
          Profile,
        },
        {
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: colors.darker,
            inactiveTintColor: colors.regular,
            style: {
              backgroundColor: colors.white,
            },
          },
        },
      ),
      Cart,
      Product,
    },
    {
      initialRouteName: 'User',
    },
  ),
);

export default Routes;
