import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { useAppDispatch, useAppSelector } from '../store/useAppStore';
import { userT, updateUser } from '../store/userSlice';

type propsT = {
  propsUser: userT;
};

const data = [
  { id: 1, value: 'Intern' },
  { id: 2, value: 'Engineer' },
  { id: 3, value: 'Senior Engineer' },
  { id: 4, value: 'Lead Engineer' },
  { id: 5, value: 'Architect' },
  { id: 6, value: 'Scrum Master' },
  { id: 7, value: 'Delivery Manager' },
  { id: 7, value: 'Product Owner' },
];

const UpdateProfile = ({ propsUser }: propsT) => {
  const [selected, setSelected] = useState<number>();
  const [userName, setUserName] = useState<string>('');
  const [userLocation, setUserLocation] = useState<string>('');
  const [listDefaultValue, setListDefaultValue] = useState<{
    key: number | undefined;
    value: string | undefined;
  }>({
    key: undefined,
    value: undefined,
  });

  const dispatch = useAppDispatch();
  const stateUser = useAppSelector((state) => state.user);
  // console.warn(stateUser);

  useEffect(() => {
    const locationData = data.find((item) => item.value === propsUser.role);

    setUserName(propsUser.name);
    setUserLocation(propsUser.location);

    setListDefaultValue({ key: locationData?.id, value: locationData?.value });
  }, [propsUser]);

  const handleUpdateProfile = () => {
    console.log('selected', selected);

    dispatch(
      updateUser({
        email: propsUser.email,
        name: userName,
        role: selected,
        location: userLocation,
      })
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Update Details</Text>
      <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Eneter name"
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
      </View>

      <Text style={styles.label}>Role</Text>
      <SelectList
        data={data}
        setSelected={(value: number) => setSelected(value)}
        boxStyles={styles.selectItemBoxStyles}
        inputStyles={styles.InputfieldValue}
        dropdownStyles={{ borderColor: 'black', borderWidth: 1 }}
        dropdownTextStyles={{ fontSize: 17, color: 'black' }}
        // selected={setSelected}
        defaultOption={listDefaultValue}
        placeholder="Select Role"
      />
      <View style={styles.container}>
        <Text style={styles.label}>Current Location</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Eneter location"
          value={userLocation}
          onChangeText={(text) => setUserLocation(text)}
        />
      </View>
      <TouchableOpacity style={styles.buttonS} onPress={handleUpdateProfile}>
        <Text style={styles.buttonLabel}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  mainContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: 'black',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  inputField: {
    backgroundColor: '#bcbcbc',
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    color: 'black',
    height: 45,
    fontSize: 15,
  },
  selectItemBoxStyles: {
    backgroundColor: '#bcbcbc',
    borderColor: 'black',
    borderWidth: 1,
    height: 45,
    fontSize: 15,
    padding: 15,
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    color: '#000000',
    paddingStart: 5,
    fontWeight: 'bold',
  },
  buttonS: {
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#bcbcbc',
    alignSelf: 'center',
    height: 45,
  },
  buttonLabel: {
    padding: 12,
    fontSize: 17,
    height: 55,
    fontWeight: 'bold',
    color: '#fff',
    width: 350,
    textAlign: 'center',
  },
  InputfieldValue: {
    fontSize: 15,
    color: 'black',
  },
  headerText: {
    fontSize: 17,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'black',
    borderBottomWidth: 0.2,
    borderColor: 'black',
  },
});
