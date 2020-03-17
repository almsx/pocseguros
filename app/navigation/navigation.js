import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/home.js';
import InsuranceScren from '../screens/insurance';

const NavigatorStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    Insurance: {
        screen: InsuranceScren,
        navigationOptions: {
            headerShown: false
        }
    }
}, {
    initialRouteName: 'Home'
});

export default createAppContainer(NavigatorStack);