import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main-screen'
import AboutScreen from './screens/about-screen'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Drawer.Navigator initialRouteName='Main'>
      <Drawer.Screen component={MainScreen} name="Main" />
      <Drawer.Screen component={AboutScreen} name="About" />
    </Drawer.Navigator>
  )
}

export default App