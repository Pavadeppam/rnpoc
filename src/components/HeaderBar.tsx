import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import person from '../assets/person.png';

import { useAppDispatch, useAppSelector } from '../store/useAppStore';
import { setIsProfleSelected } from '../store/profileSelectedSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import type { PropsWithChildren } from 'react';
import { ImagePickerResponse, launchCamera } from 'react-native-image-picker';
import { setIsExpanded as setIsExpandedStore } from '../store/caretSateSlice';
import VerticalLine from './VerticalLine';
import storeData, { storeDataT } from '../utilities/storeData';
import retrieveData from '../utilities/retrieveData';

type IconProps = PropsWithChildren<{
  name: string;
}>;

const HeaderBar = () => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const isProfileSelected = useAppSelector((state) => state.profile);

  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user);

  const isExpandedStore = useAppSelector((state) => state.caret.isExpanded);

  const openCamera = () => {
    const options = {
      storageOption: {
        path: 'images',
        mediatype: 'photo',
      },
      includeBase64: true,
    };
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      (response: ImagePickerResponse) => {
        console.log('Resopnse=>', response);
        if (response.didCancel) {
          console.log('user cancelled image picke');
        } else if (response.errorCode) {
          console.log(
            'ImagePicker Error: ',
            response.errorCode + '-' + response.errorMessage
          );
        } else {
          console.log(response.assets?.[0]?.uri);
          setSelectedImage(response.assets?.[0]?.uri);
          storeData({ key: 'user', value: response.assets?.[0]?.uri || '' });
        }
      }
    );
  };

  return (
    <View style={styles.constainer}>
      <Text></Text>

      <View style={styles.profileTextContainer}>
        <Text style={styles.profileText}>{userData.name}</Text>
        <Text style={styles.profileText}>{userData.role}</Text>
      </View>
      {(userData.name || userData.role) && (
        <VerticalLine height={50} color={'black'} />
      )}

      <View style={styles.iconContainer}>
        <View>
          <TouchableOpacity
            onPress={() => {
              openCamera();
              //   Alert.alert(
              //     '*WARNING*',
              //     'Please upgrade your device as camera is not accessible.'
              //   );
            }}
          >
            {selectedImage ? (
              <Image
                style={styles.imageItem}
                source={{
                  // uri: 'https://reactnative.dev/img/tiny_logo.png',
                  uri:
                    selectedImage ||
                    'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            ) : (
              // <View>
              // <Icon name={'user'} size={30} color="#626262" />
              <Image source={person} style={styles.personContainer} />
              // </View>
            )}
            {/* <Image
              style={styles.imageItem}
              source={{
                // uri: 'https://reactnative.dev/img/tiny_logo.png',
                uri: selectedImage || 'https://reactnative.dev/img/tiny_logo.png',
              }}
            /> */}
          </TouchableOpacity>
        </View>

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
    marginBottom: 3,
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
    borderRadius: 999,
  },
  avatarContainer: {
    borderRadius: 50,
    borderWidth: 1,
  },
  personContainer: {
    width: 55,
    height: 55,
    borderRadius: 50,
    // alignSelf: 'center',
    // marginTop: 5,
    // marginHorizontal: 5,
  },
});
