import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import HeaderBar from '../components/HeaderBar';
import CameraScreen from '../screens/CameraScreen';
import Products from '../screens/Products';

export type StackRootParamList = {
  Login: undefined;
  Home: undefined;
  CameraScreen: undefined;
  Products: undefined;
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
        headerRight: () => {
          return <HeaderBar />;
        },
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
          // headerRight: () => {
          //   return <HeaderBar />;
          // },
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
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: '',
          headerBackVisible: true,
          // headerRight: () => {
          //   return <HeaderBar />;
          // },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
