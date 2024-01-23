import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { useAppDispatch } from '../store/useAppStore';
import { userLogin } from '../store/authSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRootParamList } from '../routes/AppNavigator';
import { updateUser } from '../store/userSlice';

type propsT = {
  navigation: NativeStackNavigationProp<StackRootParamList, 'Login'>;
};
type dataT = { username: string; password: string };
const data: dataT = { username: 'kminchelle', password: '0lelplR' };

type authDataT = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};

type errorT = {
  name?: string;
  password?: string;
};
const Login = ({ navigation }: propsT) => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    if (isFormValid) {
      // dispatch(userLogin({ username: 'kminchelle', password: '0lelplR' }));
      dispatch(
        updateUser({
          email: '',
          name: name,
          location: '',
          role: '',
        })
      );
      setName('');
      setPassword('');
      navigation.navigate('Home');
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  const validateForm = () => {
    let errors: errorT = {};

    if (!name) {
      errors.name = 'Name is required.';
    }

    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    setError(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  useEffect(() => {
    validateForm();
  }, [name, password]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder="Enter username"
        value={name}
        onChangeText={(text) => setName(text)}
        autoCorrect={false}
        spellCheck={false}
      />

      <TextInput
        style={styles.inputField}
        placeholder="Enter password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.buttonS}
        onPress={handleSubmit}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonLabel}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',

    marginTop: 150,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
  },
  inputField: {
    backgroundColor: '#bcbcbc',
    borderColor: 'black',
    borderWidth: 1,
    width: 340,
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    fontSize: 20,
    color: 'black',
  },
  buttonS: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: '#bcbcbc',
    borderWidth: 1,
  },
  buttonLabel: {
    padding: 12,
    fontSize: 20,
    height: 55,
    fontWeight: 'bold',
    color: '#fff',
  },
});
