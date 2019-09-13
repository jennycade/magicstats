import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LifeCounterScreen from './src/screens/LifeCounterScreen'

const navigator = createStackNavigator(
  {
    LifeCounter: LifeCounterScreen,
  }, {
    initialRouteName: 'LifeCounter',
    defaultNavigationOptions: {
      title: 'Life Counter'
    }
  }
)

const App = createAppContainer(navigator)

export default () => {
  return(
    <App />
  )
}