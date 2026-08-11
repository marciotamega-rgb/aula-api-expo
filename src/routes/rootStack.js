import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from '..telas/home';
import Login from '../telas/login';
import cadusuario from '../telas/cadUsuario';
import recSenha from '../telas/recSenha';

const Stack =createNativeStackNavigator();

export default function rootStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login}  />
    <Stack.Screen name="Login" component={homescreen}  />
    <Stack.Screen name="Login" component={cadusuario}  />
    <Stack.Screen name="Login" component={recsenha}  />
    </Stack.Navigator>
  );
}