import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

const PickImage1 = () => {
  const [imageData, setImageData] = useState<string>();
  const [takePhotoClicked, setTakePhotoClicked] = useState(false);
  const device = useCameraDevice('back');
  const cameraRef = useRef<Camera>(null);

  const takePicture = async () => {
    if (cameraRef != null) {
      try {
        const photos = await cameraRef.current?.takePhoto({
          enableAutoStabilization: true,
        });
        setImageData(photos?.path.toString());
        setTakePhotoClicked(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const checkPermission = async () => {
      const newCameraPermission = Camera.requestCameraPermission();
      const newMicrophonePermission = Camera.requestMicrophonePermission();

      if (newCameraPermission === null) {
        ToastAndroid.show('Camera is not ready', ToastAndroid.LONG);
      }

      if (newMicrophonePermission === null) {
        ToastAndroid.show('Mic is not ready', ToastAndroid.LONG);
      }
    };
    checkPermission();
  }, []);

  if (device == null) return <ActivityIndicator />;

  return (
    <View style={styles.container}>
      {takePhotoClicked ? (
        <View style={{ flex: 1 }}>
          <Camera
            ref={cameraRef}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={false}
          />
          <TouchableOpacity
            style={styles.btnS}
            onPress={() => takePicture()}
          ></TouchableOpacity>
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          {imageData !== '' && (
            <Image
              source={{ uri: 'file://' + imageData }}
              style={{ width: '90%', height: 200 }}
            />
          )}

          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              borderWidth: 2,
              alignSelf: 'center',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setTakePhotoClicked(true)}
          >
            <Text> Click Photo</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PickImage1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnS: {
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: 'red',
    position: 'absolute',
    alignSelf: 'center',
    top: 550,
  },
});
