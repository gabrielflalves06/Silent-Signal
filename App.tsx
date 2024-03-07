import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/HomeScreen';
import Register from './src/screens/Register';
import Chats from './src/screens/Chats';
import Perfil from './src/screens/Perfil';

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
          name='Register'
          component={Register}
        />
        <Stack.Screen
          name='Chats'
          component={Chats}
        />
        <Stack.Screen
          name='Perfil'
          component={Perfil}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}