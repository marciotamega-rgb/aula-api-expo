import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from '..telas/home';
import Login from '../telas/login';
import cadusuario from '../telas/cadUsuario';
import recSenha from '../telas/recSenha';
import myTabs from '../telas/myTabs';


const Stack =createNativeStackNavigator();

export default function rootStack() {
  return (
    <Stack.Navigator
     initialRouteName="login"
     ScreenOptions={
      {
     headerstyle:{
      backgroundcolor:'tomato'
     },
    }
  }
  >
    <Stack.Screen 
    name="Login"
     component={Login}  
     options={{title: 'login'}}
     />
       <Stack.Screen 
    name="home"
     component={myTabs}  
     options={{
      title: 'home', 
        headershown: false
        }}
      />
    <Stack.Screen 
    name="cadusuario"
     component={Cadusuario}  />
       options={{title: 'cadastro de usuário'}}
    <Stack.Screen 
    name="recsenha"
     component={Recsenha} 
       options= {{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#00e1ff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, 
        }}
           />
    </Stack.Navigator>
  );
}