import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import homeScreen from '../telas/home';
import itensScreem from '../telas/itens';
import perfilScreen from '../telas/itensperfil';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}