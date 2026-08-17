import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from '..telas/home';
import Login from '../telas/login';
import cadusuario from '../telas/cadUsuario';
import recSenha from '../telas/recSenha';

const Stack =createNativeStackNavigator();

export default function rootStack() {
  return (
    <Stack.Navigator initialRouteName="login">  
    <Stack.Screen 
    name="Login"
     component={Login}  
     options={{title: 'login'}}
     />
    <Stack.Screen 
    name="cadusuario"
     component={cadusuario}  />
       options={{title: 'cadastro de usuário'}}
    <Stack.Screen 
    name="recsenha"
     component={recsenha}  />
       options={{title: 'recuperação de senha'}}
    </Stack.Navigator>
  );
}