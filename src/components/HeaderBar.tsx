import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';

import { useAppDispatch, useAppSelector } from '../store/useAppStore';
import { setIsProfleSelected } from '../store/profileSelectedSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import type { PropsWithChildren } from 'react';

import { setIsExpanded as setIsExpandedStore } from '../store/caretSateSlice';
import VerticalLine from './VerticalLine';

type IconProps = PropsWithChildren<{
  name: string;
}>;

const HeaderBar = () => {
  const isProfileSelected = useAppSelector((state) => state.profile);

  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user);

  const isExpandedStore = useAppSelector((state) => state.caret.isExpanded);

  return (
    <View style={styles.constainer}>
      <Text></Text>

      <View style={styles.profileTextContainer}>
        <Text style={styles.profileText}>{userData.name}</Text>
        <Text style={styles.profileText}>{userData.role}</Text>
      </View>
      {(userData.name || userData.role) && (
        <VerticalLine height={45} color={'black'} />
      )}

      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              '*WARNING*',
              'Please upgrade your device as camera is not accessible.'
            );
          }}
        >
          <Image
            style={styles.imageItem}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            dispatch(setIsProfleSelected(!isProfileSelected.isProfileSelected));
            dispatch(setIsExpandedStore(!isExpandedStore));
          }}
          style={styles.iconS}
        >
          <Icon
            name={isExpandedStore ? 'caret-up' : 'caret-right'}
            size={30}
            color="#626262"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: 'red',
    borderWidth: 2,
    width: '100%',
  },
  constainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 10,
  },
  profileTextContainer: {
    marginHorizontal: 10,
    alignItems: 'flex-end',
  },
  profileText: {
    color: 'black',
    fontSize: 13,
    margin: 2,
    fontWeight: 'bold',
    paddingRight: 0,
  },
  seperatorContainer: {
    borderWidth: 2,
    borderColor: 'red',
  },
  seperatorItem: {
    marginHorizontal: 1,
    fontSize: 60,
    marginTop: 0,
    padding: 0,
    color: 'black',
  },

  imageItem: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5,
    marginHorizontal: 5,
  },
  modalContainer: {
    borderColor: 'red',
    borderWidth: 2,
    flex: 0.5,
    marginTop: 200,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 5,
  },
  iconS: {
    marginHorizontal: 5,
  },
});
