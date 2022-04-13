import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main-screen'
import AboutScreen from './screens/about-screen'
import Sidebar from './components/sidebar'
const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Main'
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000',
      }}
    >
      <Drawer.Screen component={MainScreen} name="Main" />
      <Drawer.Screen component={AboutScreen} name="About" />
    </Drawer.Navigator >
  )
}

export default App