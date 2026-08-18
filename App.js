import { StatusBar } from 'expo-status-bar'; 
import {navigationcontainer} from '@react-navigation/native'

import RootStack from './src/routes/rootStack';

export default function App() {
  return (
<navigationcontainer>
  <rootstack />
  <Statusbar style="auto" />
</navigationcontainer>
  );
}

