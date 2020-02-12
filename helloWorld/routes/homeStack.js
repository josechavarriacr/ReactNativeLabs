import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import loginScreen from '../screens/login';
import aboutScreen from '../screens/about';

const screens = {
  Login: {
    screen: loginScreen,
  },
  aboutScreen: {
    about: aboutScreen,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);