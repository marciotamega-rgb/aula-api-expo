import { View, Text } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';


export default function Login() {

     const navigation = useNavigation();

    return (
        <View>
            <text>Login</text>
            <Button screen="home">acesse o sistema</Button>
            <Link screen="recsenha">esqueci a senha</Link>
            <pressable>
                <text>cadastrar o usuário</text>
            </pressable>
        </View>
    );
}