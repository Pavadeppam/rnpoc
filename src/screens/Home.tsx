import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackRootParamList } from '../routes/AppNavigator';
import { useAppSelector } from '../store/useAppStore';
import ProfilePopUp from '../components/ProfilePopUp';
import Geolocation from '@react-native-community/geolocation';

type propsT = {
  navigation: NativeStackNavigationProp<StackRootParamList, 'Home'>;
};

type cordT = {
  accuracy: number | undefined;
  altitude: number | undefined;
  heading: number | undefined;
  latitude: number | undefined;
  longitude: number | undefined;
  speed: number | undefined;
};

const Home = ({ navigation }: propsT) => {
  const isProfileSelected = useAppSelector((state) => state.caret.isExpanded);
  const user = useAppSelector((state) => state.user);
  const [cord, setCord] = useState<any>();

  Geolocation.getCurrentPosition((data) => {
    setCord(data?.coords);
  });

  return (
    <View style={styles.container}>
      <ProfilePopUp user={user} />
      {!isProfileSelected && (
        <View style={styles.infoContainer}>
          <Text style={styles.headerText}>ABOUT THIS APP</Text>
          <Text>{JSON.stringify(cord)}</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.buttonS}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonLabel}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    marginTop: 20,
  },
  btnContainer: {
    width: 300,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8dd9d2',
    margin: 20,
  },
  btnLabel: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 20,
    margin: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
  },
  buttonS: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 320,
    backgroundColor: '#bcbcbc',
    position: 'absolute',
    top: 300,
    left: 150,
  },
  buttonLabel: {
    padding: 10,
    fontSize: 20,
    height: 55,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    marginTop: 100,
  },
});
