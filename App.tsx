import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/HomeScreen';
import Login from './src/screens/Login';
import Chats from './src/screens/Chats';
import Perfil from './src/screens/Perfil';
import Conversa from './src/screens/Chitchat';
import Register from './src/screens/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='Chats'
          component={Chats}
        />
        <Stack.Screen
          name='Perfil'
          component={Perfil}
        />
        <Stack.Screen
          name='Chat'
          component={Conversa}
        />
        <Stack.Screen
          name='Register'
          component={Register}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}