import {
  StyleSheet,
  Modal,
  TouchableOpacity,
  View,
  SafeAreaView,
  Animated,
} from 'react-native';
import React from 'react';
import { userT } from '../store/userSlice';
import UpdateProfile from './UpdateProfile';
import { useAppDispatch, useAppSelector } from '../store/useAppStore';
import { setIsProfleSelected } from '../store/profileSelectedSlice';
import { setIsExpanded } from '../store/caretSateSlice';

type propsT = {
  user: userT;
};

const ProfilePopUp = ({ user }: propsT) => {
  const dispatch = useAppDispatch();
  const isProfileSelected = useAppSelector(
    (state) => state.profile.isProfileSelected
  );

  return (
    <Modal visible={isProfileSelected} transparent animationType="slide">
      <SafeAreaView
        style={{ flex: 1 }}
        onTouchStart={() => {
          dispatch(setIsProfleSelected(false));
          dispatch(setIsExpanded(false));
        }}
      >
        <Animated.View style={[styles.popup]}>
          <TouchableOpacity style={styles.option} onPress={() => {}}>
            <SafeAreaView
              style={{ flex: 1 }}
              onTouchStart={(event) => {
                dispatch(setIsProfleSelected(true));
                event.stopPropagation();
              }}
            >
              {/* <TextInput style={styles.inputField} /> */}
              <UpdateProfile propsUser={user} />
            </SafeAreaView>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </Modal>
  );
};

export default ProfilePopUp;

const styles = StyleSheet.create({
  popup: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 78,
    position: 'absolute',

    width: '100%',
    backgroundColor: '#edebeb',

    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  option: {},
  headerText: {
    fontSize: 17,

    marginVertical: 10,
    paddingTop: 20,
    fontWeight: 'bold',

    justifyContent: 'flex-start',

    color: 'black',
    marginLeft: 0,
    paddingRight: 0,
  },
});
