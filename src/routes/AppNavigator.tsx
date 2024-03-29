import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import HeaderBar from '../components/HeaderBar';
import CameraScreen from '../screens/CameraScreen';

export type StackRootParamList = {
  Login: undefined;
  Home: undefined;
  CameraScreen: undefined;
};

const AppNavigator = () => {
  const Stack = createNativeStackNavigator<StackRootParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: '#bcbcbc' },

        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerBackVisible: false,
          headerRight: () => {
            return <HeaderBar />;
          },
        }}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          title: '',
          headerBackVisible: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
